import { Assignment, Prisma } from '@prisma/client';

// Type for creating (without id and relations)
export type AssignmentCreate = Prisma.AssignmentCreateInput;

// Type for updating (all fields optional except id)
export type AssignmentUpdate = Prisma.AssignmentUpdateInput;

// Type for default (with id and no relations)
export type AssignmentGet = Assignment;

// Type for fetched with relations
export type AssignmentRelations = Prisma.AssignmentGetPayload<{
  include: { course: true };
}>;
