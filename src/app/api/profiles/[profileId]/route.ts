import prisma from '@/libraries/prisma';
import { ProfileCreate, ProfileGet } from '@/types/models/profile';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { profileId: string } }
) {
  try {
    const getProfile = await prisma.profile.findUnique({
      where: { id: params.profileId },
    });

    return NextResponse.json(
      { profile: getProfile },
      { status: 200, statusText: 'Profile Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get profile):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { profileId: string } }
) {
  try {
    const { profile }: { profile: ProfileCreate } = await request.json();

    const createProfile = await prisma.profile.create({
      data: {
        ...profile,
        id: params.profileId,
      },
    });

    return NextResponse.json(
      { profile: createProfile },
      { status: 200, statusText: 'Profile Created' }
    );
  } catch (error) {
    console.error('---> route handler error (add profile):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { profileId: string } }
) {
  try {
    const { profile }: { profile: ProfileGet } = await request.json();

    const updateProfile = await prisma.profile.update({
      where: { id: params.profileId },
      data: profile,
    });

    return NextResponse.json(
      { profile: updateProfile },
      { status: 200, statusText: 'Profile Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update profile):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { profileId: string } }
) {
  try {
    const deleteProfile = await prisma.profile.delete({
      where: { id: params.profileId },
    });

    return NextResponse.json(
      { profile: deleteProfile },
      { status: 200, statusText: 'Profile Deleted' }
    );
  } catch (error) {
    console.error('---> route handler error (delete profile):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
