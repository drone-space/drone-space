/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@repo/libraries/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ quiz_questionId: string }> }
) {
  try {
    const { quiz_questionId } = await params;

    const quizQuestionRecord = await prisma.quizQuestion.findUnique({
      where: { id: quiz_questionId },

      include: {
        quiz: true,
        question: true,
      },
    });

    return NextResponse.json(
      { item: quizQuestionRecord },
      { status: 200, statusText: 'QuizQuestion Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get quiz_question):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
