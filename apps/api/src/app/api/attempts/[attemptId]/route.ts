import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ attemptId: string }> },
) {
  try {
    const { attemptId } = await params;

    const attemptRecord = await db.attempt.findUnique({
      where: { id: attemptId },

      include: {
        _count: { select: { answers: true } },
      },
    });

    return NextResponse.json(
      { item: attemptRecord },
      { status: 200, statusText: 'Attempt Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get attempt):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
