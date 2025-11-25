import { Prisma, Comment } from '@repo/db/generated/prisma/client.js';

// Type for creating a item (without id and relations)
export type CommentCreate = Prisma.CommentCreateInput;

// Type for updating a item (all fields optional except id)
export type CommentUpdate = Prisma.CommentUpdateInput;

// Type for default item (with id and no relations)
export type CommentGet = Comment;

// Type for fetched item with relations
export type CommentRelations = Prisma.CommentGetPayload<{
  include: {
    _count: { select: { replies: true } };
  };
}>;
