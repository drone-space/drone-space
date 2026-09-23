import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';
import { OptionGet } from '@repo/types';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    // const userId = request.nextUrl.searchParams.get('userId');

    const optionRecords = await db.option.findMany({
      // where: !userId ? undefined : { profileId: userId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { items: optionRecords },
      { status: 200, statusText: 'Options Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get options):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const {
      options,
      deletedIds,
    }: {
      options: OptionGet[];
      deletedIds?: string[];
    } = await request.json();

    // First handle explicit deletions if any exist
    if (deletedIds?.length) {
      await db.option.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = options.map((option) =>
      db.option.upsert({
        where: { id: option.id },
        update: {
          ...option,
          updatedAt: new Date(option.updatedAt),
        },
        create: {
          ...option,
          createdAt: new Date(option.createdAt),
          updatedAt: new Date(option.updatedAt),
        },
      }),
    );

    // Run all operations in one transaction
    const updateOptions = await db.$transaction(operations);

    return NextResponse.json(
      { items: updateOptions },
      { status: 200, statusText: 'Options Updated' },
    );
  } catch (error) {
    console.error('---> route handler error (update options):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
