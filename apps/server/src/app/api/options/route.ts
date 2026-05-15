/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@repo/libraries/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { OptionGet } from '@repo/types/models/option';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    // const userId = request.nextUrl.searchParams.get('userId');

    const optionRecords = await prisma.option.findMany({
      // where: !userId ? undefined : { profile_id: userId },
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json(
      { items: optionRecords },
      { status: 200, statusText: 'Options Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get options):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
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
      await prisma.option.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = options.map((option) =>
      prisma.option.upsert({
        where: { id: option.id },
        update: {
          ...option,
          updated_at: new Date(option.updated_at),
        },
        create: {
          ...option,
          created_at: new Date(option.created_at),
          updated_at: new Date(option.updated_at),
        },
      })
    );

    // Run all operations in one transaction
    const updateOptions = await prisma.$transaction(operations);

    return NextResponse.json(
      { items: updateOptions },
      { status: 200, statusText: 'Options Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update options):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
