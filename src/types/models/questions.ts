import { Question, Prisma } from '@prisma/client';

// Type for creating (without id and relations)
export type QuestionCreate = Prisma.QuestionCreateInput;

// Type for updating (all fields optional except id)
export type QuestionUpdate = Prisma.QuestionUpdateInput;

// Type for default (with id and no relations)
export type QuestionGet = Question;

// Type for fetched with relations
export type QuestionRelations = Prisma.QuestionGetPayload<{
  include: { quiz: true };
}>;
