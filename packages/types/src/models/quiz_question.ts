import { Prisma, QuizQuestion } from '@repo/db/generated/prisma/client.js';

// Type for creating a item (without id and relations)
export type QuizQuestionCreate = Prisma.QuizQuestionCreateInput;

// Type for updating a item (all fields optional except id)
export type QuizQuestionUpdate = Prisma.QuizQuestionUpdateInput;

// Type for default item (with id and no relations)
export type QuizQuestionGet = QuizQuestion;

// Type for fetched item with relations
export type QuizQuestionRelations = Prisma.QuizQuestionGetPayload<{
  include: {
    question: true;
    quiz: true;
  };
}>;
