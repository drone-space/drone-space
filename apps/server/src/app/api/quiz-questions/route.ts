/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@repo/libraries/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { QuizQuestionGet } from '@repo/types/models/quiz_question';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    // const userId = request.nextUrl.searchParams.get('userId');

    const quizQuestionRecords = await prisma.quizQuestion.findMany({
      // where: !userId ? undefined : { profile_id: userId },
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json(
      { items: quizQuestionRecords },
      { status: 200, statusText: 'QuizQuestions Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get quiz_questions):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const {
      quizQuestion,
      deletedIds,
    }: {
      quizQuestion: QuizQuestionGet[];
      deletedIds?: string[];
    } = await request.json();

    // First handle explicit deletions if any exist
    if (deletedIds?.length) {
      await prisma.quizQuestion.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = quizQuestion.map((quizQuestion) =>
      prisma.quizQuestion.upsert({
        where: { id: quizQuestion.id },
        update: {
          ...quizQuestion,
          updated_at: new Date(quizQuestion.updated_at),
        },
        create: {
          ...quizQuestion,
          created_at: new Date(quizQuestion.created_at),
          updated_at: new Date(quizQuestion.updated_at),
        },
      })
    );

    // Run all operations in one transaction
    const updateQuizQuestions = await prisma.$transaction(operations);

    return NextResponse.json(
      { items: updateQuizQuestions },
      { status: 200, statusText: 'QuizQuestions Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update quiz_questions):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
