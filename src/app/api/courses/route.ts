import { REVALIDATE } from '@/data/constants';
import prisma from '@/libraries/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = REVALIDATE.WEEK;

export async function GET() {
  try {
    const courseRecords = await prisma.course.findMany({
      include: { profiles: true },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { courses: courseRecords },
      { status: 200, statusText: 'Courses Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get courses):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
