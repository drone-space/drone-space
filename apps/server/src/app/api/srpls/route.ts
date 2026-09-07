/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@repo/libraries/prisma';
import { SrplGet } from '@repo/types/models/srpl';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET() {
  try {
    const srplRecords = await prisma.srpl.findMany();

    return NextResponse.json(
      { items: srplRecords },
      { status: 200, statusText: 'Srpls Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get srpls):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { srpls, deletedIds }: { srpls: SrplGet[]; deletedIds?: string[] } =
      await request.json();

    // First handle explicit deletions if any exist
    if (deletedIds?.length) {
      await prisma.srpl.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = srpls.map((srpl) =>
      prisma.srpl.upsert({
        where: { id: srpl.id },
        update: {
          ...srpl,
          updated_at: new Date(srpl.updated_at),
        },
        create: {
          ...srpl,
          created_at: new Date(srpl.created_at),
          updated_at: new Date(srpl.updated_at),
        },
      })
    );

    // Run all operations in one transaction
    const updateSrpls = await prisma.$transaction(operations);

    return NextResponse.json(
      { items: updateSrpls },
      { status: 200, statusText: 'Srpls Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update srpls):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
