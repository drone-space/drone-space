import { Quiz, Prisma } from '@prisma/client';

// Type for creating (without id and relations)
export type QuizCreate = Prisma.QuizCreateInput;

// Type for updating (all fields optional except id)
export type QuizUpdate = Prisma.QuizUpdateInput;

// Type for default (with id and no relations)
export type QuizGet = Quiz;

// Type for fetched with relations
export type QuizRelations = Prisma.QuizGetPayload<{
  include: { questions: true };
}>;
