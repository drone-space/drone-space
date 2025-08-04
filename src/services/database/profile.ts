'use server';

import prisma from '@/libraries/prisma';
import {
  ProfileCreate,
  ProfileGet,
  ProfileUpdate,
} from '@/types/models/profile';

export const profileGet = async (id: string): Promise<ProfileGet | null> => {
  try {
    const profileRecord = await prisma.profile.findUnique({
      where: { id },
    });

    if (!profileRecord) {
      throw new Error("Profile doesn't exist");
    }

    return profileRecord;
  } catch (error) {
    console.error('---> service error - (get profile):', error);
    return null;
  }
};

export const profileCreate = async (params: ProfileCreate) => {
  try {
    const profileRecord = await prisma.profile.findUnique({
      where: { id: params.id },
    });

    if (profileRecord) {
      return { profile: profileRecord, existed: true };
    }

    return {
      profile: await prisma.profile.create({ data: params }),
      existed: false,
    };
  } catch (error) {
    console.error('---> service error - (create profile):', error);
    throw error;
  }
};

export const profileUpdate = async (params: ProfileUpdate) => {
  try {
    await prisma.$transaction(async (prisma) => {
      const profile = await prisma.profile.findUnique({
        where: { id: params.id as string },
      });

      if (!profile) {
        throw new Error("Profile doesn't exist");
      }

      await prisma.profile.update({
        where: { id: params.id as string },
        data: params,
      });
    });
  } catch (error) {
    console.error('---> service error - (update profile):', error);
  }
};
