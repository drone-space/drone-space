import { Profile, Prisma } from '@prisma/client';

// Type for creating (without id and relations)
export type ProfileCreate = Prisma.ProfileCreateInput;

// Type for updating (all fields optional except id)
export type ProfileUpdate = Prisma.ProfileUpdateInput;

// Type for default (with id and no relations)
export type ProfileGet = Profile;

// Type for fetched with relations
export type ProfileRelations = Prisma.ProfileGetPayload<{
  include: {
    addresses: true;
    posts: true;
    comments: true;
    replies: true;
  };
}>;
