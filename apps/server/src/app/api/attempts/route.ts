/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@repo/libraries/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { AttemptGet } from '@repo/types/models/attempt';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId');

    const attemptRecords = await prisma.attempt.findMany({
      where: !userId ? undefined : { profile_id: userId },
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json(
      { items: attemptRecords },
      { status: 200, statusText: 'Attempts Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get attempts):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const {
      attempts,
      deletedIds,
    }: {
      attempts: AttemptGet[];
      deletedIds?: string[];
    } = await request.json();

    // First handle explicit deletions if any exist
    if (deletedIds?.length) {
      await prisma.attempt.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = attempts.map((attempt) =>
      prisma.attempt.upsert({
        where: { id: attempt.id },
        update: {
          ...attempt,
          updated_at: new Date(attempt.updated_at),
        },
        create: {
          ...attempt,
          created_at: new Date(attempt.created_at),
          updated_at: new Date(attempt.updated_at),
        },
      })
    );

    // Run all operations in one transaction
    const updateAttempts = await prisma.$transaction(operations);

    return NextResponse.json(
      { items: updateAttempts },
      { status: 200, statusText: 'Attempts Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update attempts):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
