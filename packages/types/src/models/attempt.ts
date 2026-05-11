import { Prisma, Attempt } from '@repo/db/generated/prisma/client.js';

// Type for creating a item (without id and relations)
export type AttemptCreate = Prisma.AttemptCreateInput;

// Type for updating a item (all fields optional except id)
export type AttemptUpdate = Prisma.AttemptUpdateInput;

// Type for default item (with id and no relations)
export type AttemptGet = Attempt;

// Type for fetched item with relations
export type AttemptRelations = Prisma.AttemptGetPayload<{
  include: {
    _count: { select: { answers: true } };
  };
}>;
