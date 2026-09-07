import { Prisma, Srpl } from '@repo/db/generated/prisma/client.js';

// Type for creating a item (without id and relations)
export type SrplCreate = Prisma.SrplCreateInput;

// Type for updating a item (all fields optional except id)
export type SrplUpdate = Prisma.SrplUpdateInput;

// Type for default item (with id and no relations)
export type SrplGet = Srpl;

// Type for fetched item with relations
export type SrplRelations = Prisma.SrplGetPayload<{
  include: {
    profile: true;
  };
}>;
