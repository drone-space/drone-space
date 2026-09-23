import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';
import { AttemptGet } from '@repo/types';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId');

    const attemptRecords = await db.attempt.findMany({
      where: !userId ? undefined : { profileId: userId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { items: attemptRecords },
      { status: 200, statusText: 'Attempts Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get attempts):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
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
      await db.attempt.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = attempts.map((attempt) =>
      db.attempt.upsert({
        where: { id: attempt.id },
        update: {
          ...attempt,
          updatedAt: new Date(attempt.updatedAt),
        },
        create: {
          ...attempt,
          createdAt: new Date(attempt.createdAt),
          updatedAt: new Date(attempt.updatedAt),
        },
      }),
    );

    // Run all operations in one transaction
    const updateAttempts = await db.$transaction(operations);

    return NextResponse.json(
      { items: updateAttempts },
      { status: 200, statusText: 'Attempts Updated' },
    );
  } catch (error) {
    console.error('---> route handler error (update attempts):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
