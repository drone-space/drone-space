import { Prisma, Email } from '@repo/db/generated/prisma/client.js';

// Type for creating a item (without id and relations)
export type EmailCreate = Prisma.EmailCreateInput;

// Type for updating a item (all fields optional except id)
export type EmailUpdate = Prisma.EmailUpdateInput;

// Type for default item (with id and no relations)
export type EmailGet = Email;

// Type for fetched item with relations
export type EmailRelations = Prisma.EmailGetPayload<{
  include: {
    profile: true;
  };
}>;
