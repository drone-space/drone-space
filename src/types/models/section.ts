import { Section, Prisma } from '@prisma/client';

// Type for creating (without id and relations)
export type SectionCreate = Prisma.SectionCreateInput;

// Type for updating (all fields optional except id)
export type SectionUpdate = Prisma.SectionUpdateInput;

// Type for default (with id and no relations)
export type SectionGet = Section;

// Type for fetched with relations
export type SectionRelations = Prisma.SectionGetPayload<{
  include: { _count: { select: { modules: true; quizzes: true } } };
}>;
