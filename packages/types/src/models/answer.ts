import { Prisma, Answer } from '@repo/db/generated/prisma/client.js';

// Type for creating a item (without id and relations)
export type AnswerCreate = Prisma.AnswerCreateInput;

// Type for updating a item (all fields optional except id)
export type AnswerUpdate = Prisma.AnswerUpdateInput;

// Type for default item (with id and no relations)
export type AnswerGet = Answer;

// Type for fetched item with relations
export type AnswerRelations = Prisma.AnswerGetPayload<{
  include: {
    attempt: true;
    option: true;
  };
}>;
