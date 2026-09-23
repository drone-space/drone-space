import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    const srpl = request.nextUrl.searchParams.get('srpl');

    const alumniChallengerRecords = await db.alumniChallenger.findMany({
      where: !srpl ? undefined : { srpl: srpl },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { items: alumniChallengerRecords },
      { status: 200, statusText: 'Alumni Challengers Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get alumni challengers):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
