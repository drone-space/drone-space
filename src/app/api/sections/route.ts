import { REVALIDATE } from '@/data/constants';
import prisma from '@/libraries/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = REVALIDATE.WEEK;

export async function GET() {
  try {
    const sectionRecords = await prisma.section.findMany({
      include: { _count: { select: { modules: true, quizzes: true } } },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { sections: sectionRecords },
      { status: 200, statusText: 'Sections Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get sections):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
