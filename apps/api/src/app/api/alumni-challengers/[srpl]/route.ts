import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';
import { AlumniChallengerGet } from '@repo/types';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    const srpl = request.nextUrl.searchParams.get('srpl');

    const alumniChallengerRecord = await db.alumniChallenger.findMany({
      where: !srpl ? undefined : { srpl: srpl },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { item: alumniChallengerRecord },
      { status: 200, statusText: 'Alumni Challenger Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get alumni challenger):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ srpl: string }> },
) {
  try {
    const { srpl } = await params;

    const alumniChallenger: AlumniChallengerGet = await request.json();

    const alumniChallengerExists = await db.alumniChallenger.findUnique({
      where: { srpl },
    });

    if (alumniChallengerExists) {
      return NextResponse.json(
        { item: alumniChallengerExists, exists: true },
        { status: 200, statusText: 'Alumni Challenger Exists' },
      );
    }

    const createAlumniChallenger = await db.alumniChallenger.create({
      data: {
        ...alumniChallenger,
        createdAt: new Date(alumniChallenger.createdAt),
        updatedAt: new Date(alumniChallenger.updatedAt),
      },
    });

    return NextResponse.json(
      { item: createAlumniChallenger },
      { status: 200, statusText: 'Alumni Challenger Created' },
    );
  } catch (error) {
    console.error('---> route handler error (create alumni challenger):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ srpl: string }> }) {
  try {
    const { srpl } = await params;

    const { alumniChallenger }: { alumniChallenger: AlumniChallengerGet } = await request.json();

    const updateAlumniChallenger = await db.alumniChallenger.update({
      where: { srpl },
      data: {
        ...alumniChallenger,
        createdAt: new Date(alumniChallenger.createdAt),
        updatedAt: new Date(alumniChallenger.updatedAt),
      },
    });

    return NextResponse.json(
      { item: updateAlumniChallenger },
      { status: 200, statusText: 'Alumni Challenger Updated' },
    );
  } catch (error) {
    console.error('---> route handler error (update alumni challenger):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
