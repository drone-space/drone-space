import prisma from '@/libraries/prisma';
import { AssignmentCreate, AssignmentGet } from '@/types/models/assignment';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { assignmentId: string } }
) {
  try {
    const getAssignment = await prisma.assignment.findUnique({
      where: { id: params.assignmentId },
    });

    return NextResponse.json(
      { assignment: getAssignment },
      { status: 200, statusText: 'Assignment Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get assignment):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { assignmentId: string } }
) {
  try {
    const { assignment }: { assignment: AssignmentCreate } =
      await request.json();

    const createAssignment = await prisma.assignment.create({
      data: {
        ...assignment,
        id: params.assignmentId,
      },
    });

    return NextResponse.json(
      { assignment: createAssignment },
      { status: 200, statusText: 'Assignment Created' }
    );
  } catch (error) {
    console.error('---> route handler error (add assignment):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { assignmentId: string } }
) {
  try {
    const {
      assignment,
    }: {
      assignment: AssignmentGet;
    } = await request.json();

    const updateAssignment = await prisma.assignment.update({
      where: { id: params.assignmentId },
      data: assignment,
    });

    return NextResponse.json(
      { assignment: updateAssignment },
      { status: 200, statusText: 'Assignment Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update assignment):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { assignmentId: string } }
) {
  try {
    const deleteAssignment = await prisma.assignment.delete({
      where: { id: params.assignmentId },
    });

    return NextResponse.json(
      { assignment: deleteAssignment },
      { status: 200, statusText: 'Assignment Deleted' }
    );
  } catch (error) {
    console.error('---> route handler error (delete assignment):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
