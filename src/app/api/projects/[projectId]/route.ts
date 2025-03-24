import prisma from '@/libraries/prisma';
import { ProjectCreate, ProjectGet } from '@/types/models/project';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  try {
    const getProject = await prisma.project.findUnique({
      where: { id: params.projectId },
      include: { profiles: true },
    });

    return NextResponse.json(
      { project: getProject },
      { status: 200, statusText: 'Project Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get project):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  try {
    const {
      project,
      profileIds,
    }: { project: ProjectCreate; profileIds: string[] } = await request.json();

    const createProject = await prisma.project.create({
      data: {
        ...project,
        id: params.projectId,
        profiles: {
          connect: profileIds?.map((pId) => {
            return { id: pId };
          }),
        },
      },
    });

    return NextResponse.json(
      { project: createProject },
      { status: 200, statusText: 'Project Created' }
    );
  } catch (error) {
    console.error('---> route handler error (add project):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  try {
    const {
      project,
      addProfileIds,
      removeProfileIds,
    }: {
      project: ProjectGet;
      addProfileIds?: string[];
      removeProfileIds?: string[];
    } = await request.json();

    const updateProject = await prisma.project.update({
      where: { id: params.projectId },
      data: {
        ...project,
        id: params.projectId,
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
      { project: updateProject },
      { status: 200, statusText: 'Project Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update project):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  try {
    const deleteProject = await prisma.project.delete({
      where: { id: params.projectId },
    });

    return NextResponse.json(
      { project: deleteProject },
      { status: 200, statusText: 'Project Deleted' }
    );
  } catch (error) {
    console.error('---> route handler error (delete project):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
