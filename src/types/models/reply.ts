import { Reply, Prisma } from '@prisma/client';

// Type for creating (without id and relations)
export type ReplyCreate = Prisma.ReplyCreateInput;

// Type for updating (all fields optional except id)
export type ReplyUpdate = Prisma.ReplyUpdateInput;

// Type for default (with id and no relations)
export type ReplyGet = Reply;

// Type for fetched with relations
export type ReplyRelations = Prisma.ReplyGetPayload<{
  include: {
    profile: true;
  };
}>;
