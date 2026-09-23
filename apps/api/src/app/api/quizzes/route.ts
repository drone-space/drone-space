import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';
import { QuizGet } from '@repo/types';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    // const userId = request.nextUrl.searchParams.get('userId');

    const quizRecords = await db.quiz.findMany({
      // where: !userId ? undefined : { profileId: userId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { items: quizRecords },
      { status: 200, statusText: 'Quizzes Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get quizzes):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const {
      quizzes,
      deletedIds,
    }: {
      quizzes: QuizGet[];
      deletedIds?: string[];
    } = await request.json();

    // First handle explicit deletions if any exist
    if (deletedIds?.length) {
      await db.quiz.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = quizzes.map((quiz) =>
      db.quiz.upsert({
        where: { id: quiz.id },
        update: {
          ...quiz,
          updatedAt: new Date(quiz.updatedAt),
        },
        create: {
          ...quiz,
          createdAt: new Date(quiz.createdAt),
          updatedAt: new Date(quiz.updatedAt),
        },
      }),
    );

    // Run all operations in one transaction
    const updateQuizzes = await db.$transaction(operations);

    return NextResponse.json(
      { items: updateQuizzes },
      { status: 200, statusText: 'Quizzes Updated' },
    );
  } catch (error) {
    console.error('---> route handler error (update quizzes):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
