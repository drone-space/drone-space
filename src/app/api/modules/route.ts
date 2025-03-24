import { REVALIDATE } from '@/data/constants';
import prisma from '@/libraries/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = REVALIDATE.WEEK;

export async function GET() {
  try {
    const moduleRecords = await prisma.module.findMany({
      include: { _count: { select: { pages: true } } },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { modules: moduleRecords },
      { status: 200, statusText: 'Modules Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get modules):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
