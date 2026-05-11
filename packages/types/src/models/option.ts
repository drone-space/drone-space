import { Prisma, Option } from '@repo/db/generated/prisma/client.js';

// Type for creating a item (without id and relations)
export type OptionCreate = Prisma.OptionCreateInput;

// Type for updating a item (all fields optional except id)
export type OptionUpdate = Prisma.OptionUpdateInput;

// Type for default item (with id and no relations)
export type OptionGet = Option;

// Type for fetched item with relations
export type OptionRelations = Prisma.OptionGetPayload<{
  include: {
    _count: { select: { answers: true } };
  };
}>;
