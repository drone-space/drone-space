import prisma from '@/libraries/prisma';
import { SectionCreate, SectionGet } from '@/types/models/section';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { sectionId: string } }
) {
  try {
    const getSection = await prisma.section.findUnique({
      where: { id: params.sectionId },
      include: { _count: { select: { modules: true, quizzes: true } } },
    });

    return NextResponse.json(
      { section: getSection },
      { status: 200, statusText: 'Section Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get section):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { sectionId: string } }
) {
  try {
    const { section }: { section: SectionCreate } = await request.json();

    const createSection = await prisma.section.create({
      data: {
        ...section,
        id: params.sectionId,
      },
    });

    return NextResponse.json(
      { section: createSection },
      { status: 200, statusText: 'Section Created' }
    );
  } catch (error) {
    console.error('---> route handler error (add section):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { sectionId: string } }
) {
  try {
    const {
      section,
    }: {
      section: SectionGet;
    } = await request.json();

    const updateSection = await prisma.section.update({
      where: { id: params.sectionId },
      data: section,
    });

    return NextResponse.json(
      { section: updateSection },
      { status: 200, statusText: 'Section Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update section):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { sectionId: string } }
) {
  try {
    const deleteSection = await prisma.section.delete({
      where: { id: params.sectionId },
    });

    return NextResponse.json(
      { section: deleteSection },
      { status: 200, statusText: 'Section Deleted' }
    );
  } catch (error) {
    console.error('---> route handler error (delete section):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
