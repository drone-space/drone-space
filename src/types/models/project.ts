import { Project, Prisma } from '@prisma/client';

// Type for creating (without id and relations)
export type ProjectCreate = Prisma.ProjectCreateInput;

// Type for updating (all fields optional except id)
export type ProjectUpdate = Prisma.ProjectUpdateInput;

// Type for default (with id and no relations)
export type ProjectGet = Project;

// Type for fetched with relations
export type ProjectRelations = Prisma.ProjectGetPayload<{
  include: { profiles: true };
}>;
