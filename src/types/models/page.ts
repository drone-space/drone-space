import { Page, Prisma } from '@prisma/client';

// Type for creating (without id and relations)
export type PageCreate = Prisma.PageCreateInput;

// Type for updating (all fields optional except id)
export type PageUpdate = Prisma.PageUpdateInput;

// Type for default (with id and no relations)
export type PageGet = Page;

// Type for fetched with relations
export type PageRelations = Prisma.PageGetPayload<{
  include: { module: true };
}>;
