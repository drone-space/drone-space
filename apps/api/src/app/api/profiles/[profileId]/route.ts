import { db } from '@repo/db';
import { ProfileGet } from '@repo/types';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ profileId: string }> },
) {
  try {
    const { profileId } = await params;

    const profileRecord = await db.profile.findUnique({
      where: { id: profileId },
    });

    return NextResponse.json(
      { item: profileRecord },
      { status: 200, statusText: 'Profile Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get profiles):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ profileId: string }> },
) {
  try {
    const { profileId } = await params;

    const profile: ProfileGet = await request.json();

    const updateProfile = await db.profile.update({
      where: { id: profileId },
      data: profile,
    });

    return NextResponse.json(
      { items: updateProfile },
      { status: 200, statusText: 'Profiles Updated' },
    );
  } catch (error) {
    console.error('---> route handler error (update profiles):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
