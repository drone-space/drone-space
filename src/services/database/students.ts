'use server';

import prisma from '@/libraries/prisma';

export const studentsGet = async () => {
  try {
    const studentRecords = await prisma.student.findMany({
      where: { status: 'ACTIVE' },
    });

    if (!studentRecords) {
      throw new Error('No student records found');
    }

    return { items: studentRecords };
  } catch (error) {
    console.error('---> service error - (get student):', error);
    return null;
  }
};
