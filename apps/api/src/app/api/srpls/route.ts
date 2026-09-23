import { db } from '@repo/db';
import { SrplGet } from '@repo/types';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET() {
  try {
    const srplRecords = await db.srpl.findMany();

    return NextResponse.json(
      { items: srplRecords },
      { status: 200, statusText: 'Srpls Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get srpls):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { srpls, deletedIds }: { srpls: SrplGet[]; deletedIds?: string[] } = await request.json();

    // First handle explicit deletions if any exist
    if (deletedIds?.length) {
      await db.srpl.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = srpls.map((srpl) =>
      db.srpl.upsert({
        where: { id: srpl.id },
        update: {
          ...srpl,
          updatedAt: new Date(srpl.updatedAt),
        },
        create: {
          ...srpl,
          createdAt: new Date(srpl.createdAt),
          updatedAt: new Date(srpl.updatedAt),
        },
      }),
    );

    // Run all operations in one transaction
    const updateSrpls = await db.$transaction(operations);

    return NextResponse.json({ items: updateSrpls }, { status: 200, statusText: 'Srpls Updated' });
  } catch (error) {
    console.error('---> route handler error (update srpls):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
