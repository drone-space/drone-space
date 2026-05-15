/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@repo/libraries/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { QuizGet } from '@repo/types/models/quiz';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    // const userId = request.nextUrl.searchParams.get('userId');

    const quizRecords = await prisma.quiz.findMany({
      // where: !userId ? undefined : { profile_id: userId },
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json(
      { items: quizRecords },
      { status: 200, statusText: 'Quizzes Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get quizzes):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
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
      await prisma.quiz.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = quizzes.map((quiz) =>
      prisma.quiz.upsert({
        where: { id: quiz.id },
        update: {
          ...quiz,
          updated_at: new Date(quiz.updated_at),
        },
        create: {
          ...quiz,
          created_at: new Date(quiz.created_at),
          updated_at: new Date(quiz.updated_at),
        },
      })
    );

    // Run all operations in one transaction
    const updateQuizzes = await prisma.$transaction(operations);

    return NextResponse.json(
      { items: updateQuizzes },
      { status: 200, statusText: 'Quizzes Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update quizzes):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
