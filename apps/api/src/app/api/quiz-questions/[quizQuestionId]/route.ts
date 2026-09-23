import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ quizQuestionId: string }> },
) {
  try {
    const { quizQuestionId } = await params;

    const quizQuestionRecord = await db.quizQuestion.findUnique({
      where: { id: quizQuestionId },

      include: {
        quiz: true,
        question: true,
      },
    });

    return NextResponse.json(
      { item: quizQuestionRecord },
      { status: 200, statusText: 'QuizQuestion Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get quiz question):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
