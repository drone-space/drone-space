import { Prisma, AlumniChallenger } from '@repo/db/generated/prisma/client.js';

// Type for creating a item (without id and relations)
export type AlumniChallengerCreate = Prisma.AlumniChallengerCreateInput;

// Type for updating a item (all fields optional except id)
export type AlumniChallengerUpdate = Prisma.AlumniChallengerUpdateInput;

// Type for default item (with id and no relations)
export type AlumniChallengerGet = AlumniChallenger;

// // Type for fetched item with relations
// export type AlumniChallengerRelations = Prisma.AlumniChallengerGetPayload<{
//   include: {
//     _count: { select: { answers: true } };
//   };
// }>;
