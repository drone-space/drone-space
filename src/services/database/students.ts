'use server';

import prisma from '@/libraries/prisma';
import { StudentGet } from '@/types/models/student';

export const studentsGet = async (): Promise<{ data: StudentGet[] } | null> => {
  try {
    const transactions = await prisma.$transaction(async (prisma) => {
      const studentRecords = await prisma.student.findMany({
        where: { status: 'ACTIVE' },
      });

      if (!studentRecords) {
        throw new Error('No student records found');
      }

      return { students: studentRecords };
    });

    return { data: transactions.students };
  } catch (error) {
    console.error('---> service error - (get student):', error);
    return null;
  }
};
