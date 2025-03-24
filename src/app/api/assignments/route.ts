import { REVALIDATE } from '@/data/constants';
import prisma from '@/libraries/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = REVALIDATE.WEEK;

export async function GET() {
  try {
    const assignmentRecords = await prisma.assignment.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { assignments: assignmentRecords },
      { status: 200, statusText: 'Assignment Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get assignments):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
