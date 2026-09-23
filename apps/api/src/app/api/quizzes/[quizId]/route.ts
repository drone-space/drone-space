import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ quizId: string }> },
) {
  try {
    const { quizId } = await params;

    const quizRecord = await db.quiz.findUnique({
      where: { id: quizId },

      include: {
        _count: { select: { attempts: true, quizQuestions: true } },
      },
    });

    return NextResponse.json({ item: quizRecord }, { status: 200, statusText: 'Quiz Retrieved' });
  } catch (error) {
    console.error('---> route handler error (get quiz):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
