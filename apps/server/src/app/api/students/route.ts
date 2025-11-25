/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@/libraries/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { SyncStatus } from '@repo/types/models/enums';
import { StudentGet } from '@repo/types/models/student';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET() {
  try {
    const studentRecords = await prisma.student.findMany({
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json(
      { items: studentRecords },
      { status: 200, statusText: 'Students Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get students):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const {
      students,
      deletedIds,
    }: {
      students: StudentGet[];
      deletedIds?: string[];
    } = await request.json();

    // First handle explicit deletions if any exist
    if (deletedIds?.length) {
      await prisma.student.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = students.map((student) =>
      prisma.student.upsert({
        where: { id: student.id },
        update: {
          image: student.image,
          name: student.name,
          position: student.position,
          quote: student.quote,
          status: student.status,
          sync_status: student.sync_status,
          updated_at: new Date(student.updated_at),
        },
        create: {
          id: student.id,
          image: student.image,
          name: student.name,
          position: student.position,
          quote: student.quote,
          status: student.status,
          sync_status: student.sync_status || SyncStatus.SYNCED,
          created_at: new Date(student.created_at),
          updated_at: new Date(student.updated_at),
        },
      })
    );

    // Run all operations in one transaction
    const updateStudents = await prisma.$transaction(operations);

    return NextResponse.json(
      { items: updateStudents },
      { status: 200, statusText: 'Students Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update students):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
