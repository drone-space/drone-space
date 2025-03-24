import { REVALIDATE } from '@/data/constants';
import prisma from '@/libraries/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = REVALIDATE.WEEK;

export async function GET() {
  try {
    const projectRecords = await prisma.project.findMany({
      include: { profiles: true },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { projects: projectRecords },
      { status: 200, statusText: 'Projects Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get projects):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
