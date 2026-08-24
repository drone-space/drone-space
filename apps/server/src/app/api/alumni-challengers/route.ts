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

export async function GET(request: NextRequest) {
  try {
    const srpl = request.nextUrl.searchParams.get('srpl');

    const alumniChallengerRecords = await prisma.alumniChallenger.findMany({
      where: !srpl ? undefined : { srpl: srpl },
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json(
      { items: alumniChallengerRecords },
      { status: 200, statusText: 'Alumni Challengers Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get alumni challengers):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
