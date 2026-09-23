import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';
import { QuizQuestionGet } from '@repo/types';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    // const userId = request.nextUrl.searchParams.get('userId');

    const quizQuestionRecords = await db.quizQuestion.findMany({
      // where: !userId ? undefined : { profileId: userId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { items: quizQuestionRecords },
      { status: 200, statusText: 'QuizQuestions Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get quiz questions):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
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
      await db.quizQuestion.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = quizQuestion.map((quizQuestion) =>
      db.quizQuestion.upsert({
        where: { id: quizQuestion.id },
        update: {
          ...quizQuestion,
          updatedAt: new Date(quizQuestion.updatedAt),
        },
        create: {
          ...quizQuestion,
          createdAt: new Date(quizQuestion.createdAt),
          updatedAt: new Date(quizQuestion.updatedAt),
        },
      }),
    );

    // Run all operations in one transaction
    const updateQuizQuestions = await db.$transaction(operations);

    return NextResponse.json(
      { items: updateQuizQuestions },
      { status: 200, statusText: 'QuizQuestions Updated' },
    );
  } catch (error) {
    console.error('---> route handler error (update quiz questions):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
