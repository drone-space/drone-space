import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';
import { CategoryGet } from '@repo/types';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    // const userId = request.nextUrl.searchParams.get('userId');

    const categoryRecords = await db.category.findMany({
      // where: !userId ? undefined : { profileId: userId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { items: categoryRecords },
      { status: 200, statusText: 'Categories Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get categories):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const {
      categories,
      deletedIds,
    }: {
      categories: CategoryGet[];
      deletedIds?: string[];
    } = await request.json();

    // First handle explicit deletions if any exist
    if (deletedIds?.length) {
      await db.category.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = categories.map((category) =>
      db.category.upsert({
        where: { id: category.id },
        update: {
          ...category,
          updatedAt: new Date(category.updatedAt),
        },
        create: {
          ...category,
          createdAt: new Date(category.createdAt),
          updatedAt: new Date(category.updatedAt),
        },
      }),
    );

    // Run all operations in one transaction
    const updateCategories = await db.$transaction(operations);

    return NextResponse.json(
      { items: updateCategories },
      { status: 200, statusText: 'Categories Updated' },
    );
  } catch (error) {
    console.error('---> route handler error (update categories):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
