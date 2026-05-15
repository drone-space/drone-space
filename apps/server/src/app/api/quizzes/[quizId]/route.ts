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
  { params }: { params: Promise<{ quizId: string }> }
) {
  try {
    const { quizId } = await params;

    const quizRecord = await prisma.quiz.findUnique({
      where: { id: quizId },

      include: {
        _count: { select: { attempts: true, questions: true } },
      },
    });

    return NextResponse.json(
      { item: quizRecord },
      { status: 200, statusText: 'Quiz Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get quiz):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
