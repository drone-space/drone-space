import { REVALIDATE } from '@/data/constants';
import prisma from '@/libraries/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = REVALIDATE.WEEK;

export async function GET() {
  try {
    const pageRecords = await prisma.page.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { pages: pageRecords },
      { status: 200, statusText: 'Pages Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get pages):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
