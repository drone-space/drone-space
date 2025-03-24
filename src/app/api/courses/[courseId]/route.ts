import prisma from '@/libraries/prisma';
import { CourseCreate, CourseGet } from '@/types/models/course';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const getCourse = await prisma.course.findUnique({
      where: { id: params.courseId },
      include: { profiles: true },
    });

    return NextResponse.json(
      { course: getCourse },
      { status: 200, statusText: 'Course Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get course):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const { course }: { course: CourseCreate } = await request.json();

    const createCourse = await prisma.course.create({
      data: { ...course, id: params.courseId },
    });

    return NextResponse.json(
      { course: createCourse },
      { status: 200, statusText: 'Course Created' }
    );
  } catch (error) {
    console.error('---> route handler error (add course):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const {
      course,
      addProfileIds,
      removeProfileIds,
    }: {
      course: CourseGet;
      addProfileIds?: string[];
      removeProfileIds?: string[];
    } = await request.json();

    const updateCourse = await prisma.course.update({
      where: { id: params.courseId },
      data: {
        ...course,
        id: params.courseId,
        profiles: {
          connect: !addProfileIds?.length
            ? undefined
            : addProfileIds.map((pId) => {
                return { id: pId };
              }),
          disconnect: !removeProfileIds
            ? undefined
            : removeProfileIds.map((dpId) => {
                return { id: dpId };
              }),
        },
      },
    });

    return NextResponse.json(
      { course: updateCourse },
      { status: 200, statusText: 'Course Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update course):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const deleteCourse = await prisma.course.delete({
      where: { id: params.courseId },
    });

    return NextResponse.json(
      { course: deleteCourse },
      { status: 200, statusText: 'Course Deleted' }
    );
  } catch (error) {
    console.error('---> route handler error (delete course):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
