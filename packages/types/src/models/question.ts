import { Prisma, Question } from '@repo/db/generated/prisma/client.js';

// Type for creating a item (without id and relations)
export type QuestionCreate = Prisma.QuestionCreateInput;

// Type for updating a item (all fields optional except id)
export type QuestionUpdate = Prisma.QuestionUpdateInput;

// Type for default item (with id and no relations)
export type QuestionGet = Question;

// Type for fetched item with relations
export type QuestionRelations = Prisma.QuestionGetPayload<{
  include: {
    _count: { select: { options: true } };
  };
}>;
