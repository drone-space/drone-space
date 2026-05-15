import { Prisma, Quiz } from '@repo/db/generated/prisma/client.js';

// Type for creating a item (without id and relations)
export type QuizCreate = Prisma.QuizCreateInput;

// Type for updating a item (all fields optional except id)
export type QuizUpdate = Prisma.QuizUpdateInput;

// Type for default item (with id and no relations)
export type QuizGet = Quiz;

// Type for fetched item with relations
export type QuizRelations = Prisma.QuizGetPayload<{
  include: {
    _count: { select: { attempts: true; questions: true } };
  };
}>;
