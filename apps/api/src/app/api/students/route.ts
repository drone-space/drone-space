import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';
import { StudentGet } from '@repo/types';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET() {
  try {
    const studentRecords = await db.student.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { items: studentRecords },
      { status: 200, statusText: 'Students Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get students):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
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
      await db.student.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = students.map((student) =>
      db.student.upsert({
        where: { id: student.id },
        update: {
          ...student,
          updatedAt: new Date(student.updatedAt),
        },
        create: {
          ...student,
          createdAt: new Date(student.createdAt),
          updatedAt: new Date(student.updatedAt),
        },
      }),
    );

    // Run all operations in one transaction
    const updateStudents = await db.$transaction(operations);

    return NextResponse.json(
      { items: updateStudents },
      { status: 200, statusText: 'Students Updated' },
    );
  } catch (error) {
    console.error('---> route handler error (update students):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
