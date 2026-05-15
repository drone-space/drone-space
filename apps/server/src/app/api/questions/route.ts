/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@repo/libraries/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { QuestionGet } from '@repo/types/models/question';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    // const userId = request.nextUrl.searchParams.get('userId');

    const questionRecords = await prisma.question.findMany({
      // where: !userId ? undefined : { profile_id: userId },
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json(
      { items: questionRecords },
      { status: 200, statusText: 'Questions Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get questions):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
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
      await prisma.question.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = questions.map((question) =>
      prisma.question.upsert({
        where: { id: question.id },
        update: {
          ...question,
          updated_at: new Date(question.updated_at),
        },
        create: {
          ...question,
          created_at: new Date(question.created_at),
          updated_at: new Date(question.updated_at),
        },
      })
    );

    // Run all operations in one transaction
    const updateQuestions = await prisma.$transaction(operations);

    return NextResponse.json(
      { items: updateQuestions },
      { status: 200, statusText: 'Questions Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update questions):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
