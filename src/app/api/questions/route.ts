import { REVALIDATE } from '@/data/constants';
import prisma from '@/libraries/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = REVALIDATE.WEEK;

export async function GET() {
  try {
    const questionRecords = await prisma.question.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { questions: questionRecords },
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
