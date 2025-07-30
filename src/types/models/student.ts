import { Prisma, Student } from '@generated/prisma';

// Type for creating a item (without id and relations)
export type StudentCreate = Prisma.StudentCreateInput;

// Type for updating a item (all fields optional except id)
export type StudentUpdate = Prisma.StudentUpdateInput;

// Type for default item (with id and no relations)
export type StudentGet = Student;
