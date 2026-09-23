import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';
import { QuestionGet } from '@repo/types';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    // const userId = request.nextUrl.searchParams.get('userId');

    const questionRecords = await db.question.findMany({
      // where: !userId ? undefined : { profileId: userId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { items: questionRecords },
      { status: 200, statusText: 'Questions Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get questions):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const {
      questions,
      deletedIds,
    }: {
      questions: QuestionGet[];
      deletedIds?: string[];
    } = await request.json();

    // First handle explicit deletions if any exist
    if (deletedIds?.length) {
      await db.question.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = questions.map((question) =>
      db.question.upsert({
        where: { id: question.id },
        update: {
          ...question,
          updatedAt: new Date(question.updatedAt),
        },
        create: {
          ...question,
          createdAt: new Date(question.createdAt),
          updatedAt: new Date(question.updatedAt),
        },
      }),
    );

    // Run all operations in one transaction
    const updateQuestions = await db.$transaction(operations);

    return NextResponse.json(
      { items: updateQuestions },
      { status: 200, statusText: 'Questions Updated' },
    );
  } catch (error) {
    console.error('---> route handler error (update questions):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
