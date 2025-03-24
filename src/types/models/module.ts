import { Module, Prisma } from '@prisma/client';

// Type for creating (without id and relations)
export type ModuleCreate = Prisma.ModuleCreateInput;

// Type for updating (all fields optional except id)
export type ModuleUpdate = Prisma.ModuleUpdateInput;

// Type for default (with id and no relations)
export type ModuleGet = Module;

// Type for fetched with relations
export type ModuleRelations = Prisma.ModuleGetPayload<{
  include: { pages: true };
}>;
