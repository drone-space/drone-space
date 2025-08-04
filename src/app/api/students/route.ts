import { studentsGet } from '@/services/database/students';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  try {
    const studentRecords = await studentsGet();

    if (studentRecords == null) throw new Error('No Records Found');

    return NextResponse.json(studentRecords, {
      status: 200,
      statusText: 'Students Retrieved',
    });
  } catch (error) {
    console.error('---> route handler error (get students):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
