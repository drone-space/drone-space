import { Prisma, Reply } from '@repo/db/generated/prisma/client.js';

// Type for creating a item (without id and relations)
export type ReplyCreate = Prisma.ReplyCreateInput;

// Type for updating a item (all fields optional except id)
export type ReplyUpdate = Prisma.ReplyUpdateInput;

// Type for default item (with id and no relations)
export type ReplyGet = Reply;
