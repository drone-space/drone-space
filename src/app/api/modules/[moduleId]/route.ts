import prisma from '@/libraries/prisma';
import { ModuleCreate, ModuleGet } from '@/types/models/module';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { moduleId: string } }
) {
  try {
    const getModule = await prisma.module.findUnique({
      where: { id: params.moduleId },
      include: { _count: { select: { pages: true } } },
    });

    return NextResponse.json(
      { module: getModule },
      { status: 200, statusText: 'Module Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get module):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { moduleId: string } }
) {
  try {
    const { module }: { module: ModuleCreate } = await request.json();

    const createModule = await prisma.module.create({
      data: {
        ...module,
        id: params.moduleId,
      },
    });

    return NextResponse.json(
      { module: createModule },
      { status: 200, statusText: 'Module Created' }
    );
  } catch (error) {
    console.error('---> route handler error (add module):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { moduleId: string } }
) {
  try {
    const {
      module,
    }: {
      module: ModuleGet;
    } = await request.json();

    const updateModule = await prisma.module.update({
      where: { id: params.moduleId },
      data: module,
    });

    return NextResponse.json(
      { module: updateModule },
      { status: 200, statusText: 'Module Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update module):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { moduleId: string } }
) {
  try {
    const deleteModule = await prisma.module.delete({
      where: { id: params.moduleId },
    });

    return NextResponse.json(
      { module: deleteModule },
      { status: 200, statusText: 'Module Deleted' }
    );
  } catch (error) {
    console.error('---> route handler error (delete module):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
