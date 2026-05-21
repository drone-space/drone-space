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
  { params }: { params: Promise<{ quizQuestionId: string }> }
) {
  try {
    const { quizQuestionId } = await params;

    const quizQuestionRecord = await prisma.quizQuestion.findUnique({
      where: { id: quizQuestionId },

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
    console.error('---> route handler error (get quiz question):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
