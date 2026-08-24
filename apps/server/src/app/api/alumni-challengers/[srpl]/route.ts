/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@repo/libraries/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { AlumniChallengerGet } from '@repo/types/models/alumni-challenger';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    const srpl = request.nextUrl.searchParams.get('srpl');

    const alumniChallengerRecord = await prisma.alumniChallenger.findMany({
      where: !srpl ? undefined : { srpl: srpl },
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json(
      { item: alumniChallengerRecord },
      { status: 200, statusText: 'Alumni Challenger Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get alumni challenger):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ srpl: string }> }
) {
  try {
    const { srpl } = await params;

    const alumniChallenger: AlumniChallengerGet = await request.json();

    const alumniChallengerExists = await prisma.alumniChallenger.findUnique({
      where: { srpl },
    });

    if (alumniChallengerExists) {
      return NextResponse.json(
        { item: alumniChallengerExists, exists: true },
        { status: 200, statusText: 'Alumni Challenger Exists' }
      );
    }

    const createAlumniChallenger = await prisma.alumniChallenger.create({
      data: {
        ...alumniChallenger,
        created_at: new Date(alumniChallenger.created_at),
        updated_at: new Date(alumniChallenger.updated_at),
      },
    });

    return NextResponse.json(
      { item: createAlumniChallenger },
      { status: 200, statusText: 'Alumni Challenger Created' }
    );
  } catch (error) {
    console.error(
      '---> route handler error (create alumni challenger):',
      error
    );
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ srpl: string }> }
) {
  try {
    const { srpl } = await params;

    const { alumniChallenger }: { alumniChallenger: AlumniChallengerGet } =
      await request.json();

    const updateAlumniChallenger = await prisma.alumniChallenger.update({
      where: { srpl },
      data: {
        ...alumniChallenger,
        created_at: new Date(alumniChallenger.created_at),
        updated_at: new Date(alumniChallenger.updated_at),
      },
    });

    return NextResponse.json(
      { item: updateAlumniChallenger },
      { status: 200, statusText: 'Alumni Challenger Updated' }
    );
  } catch (error) {
    console.error(
      '---> route handler error (update alumni challenger):',
      error
    );
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
