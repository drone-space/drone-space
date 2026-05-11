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
  { params }: { params: Promise<{ questionId: string }> }
) {
  try {
    const { questionId } = await params;

    const questionRecord = await prisma.question.findUnique({
      where: { id: questionId },

      include: {
        _count: { select: { options: true } },
      },
    });

    return NextResponse.json(
      { item: questionRecord },
      { status: 200, statusText: 'Question Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get question):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
