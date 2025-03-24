import { REVALIDATE } from '@/data/constants';
import prisma from '@/libraries/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = REVALIDATE.WEEK;

export async function GET() {
  try {
    const profileRecords = await prisma.profile.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { profiles: profileRecords },
      { status: 200, statusText: 'Profile Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get profiles):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
