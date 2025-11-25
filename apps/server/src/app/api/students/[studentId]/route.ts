/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@/libraries/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ studentId: string }> }
) {
  try {
    const { studentId } = await params;

    const studentRecord = await prisma.student.findUnique({
      where: { id: studentId },
    });

    return NextResponse.json(
      { item: studentRecord },
      { status: 200, statusText: 'Student Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get student):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
