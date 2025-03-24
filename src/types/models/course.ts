import { Course, Prisma } from '@prisma/client';

// Type for creating (without id and relations)
export type CourseCreate = Prisma.CourseCreateInput;

// Type for updating (all fields optional except id)
export type CourseUpdate = Prisma.CourseUpdateInput;

// Type for default (with id and no relations)
export type CourseGet = Course;

// Type for fetched with relations
export type CourseRelations = Prisma.CourseGetPayload<{
  include: { profiles: true };
}>;
