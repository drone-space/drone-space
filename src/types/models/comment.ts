import { Comment, Prisma } from '@prisma/client';

// Type for creating (without id and relations)
export type CommentCreate = Prisma.CommentCreateInput;

// Type for updating (all fields optional except id)
export type CommentUpdate = Prisma.CommentUpdateInput;

// Type for default (with id and no relations)
export type CommentGet = Comment;

// Type for fetched with relations
export type CommentRelations = Prisma.CommentGetPayload<{
  include: {
    post: true;

    _count: { select: { replies: true } };

    profile: true;
    replies: {
      include: {
        _count: { select: { replies: true } };

        profile: true;
      };
    };
  };
}>;
