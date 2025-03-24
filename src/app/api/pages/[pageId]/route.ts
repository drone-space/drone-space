import prisma from '@/libraries/prisma';
import { PageCreate, PageGet } from '@/types/models/page';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { pageId: string } }
) {
  try {
    const getPage = await prisma.page.findUnique({
      where: { id: params.pageId },
    });

    return NextResponse.json(
      { page: getPage },
      { status: 200, statusText: 'Page Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get page):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { pageId: string } }
) {
  try {
    const { page }: { page: PageCreate } = await request.json();

    const createPage = await prisma.page.create({
      data: {
        ...page,
        id: params.pageId,
      },
    });

    return NextResponse.json(
      { page: createPage },
      { status: 200, statusText: 'Page Created' }
    );
  } catch (error) {
    console.error('---> route handler error (add page):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { pageId: string } }
) {
  try {
    const { page }: { page: PageGet } = await request.json();

    const updatePage = await prisma.page.update({
      where: { id: params.pageId },
      data: page,
    });

    return NextResponse.json(
      { page: updatePage },
      { status: 200, statusText: 'Page Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update page):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { pageId: string } }
) {
  try {
    const deletePage = await prisma.page.delete({
      where: { id: params.pageId },
    });

    return NextResponse.json(
      { page: deletePage },
      { status: 200, statusText: 'Page Deleted' }
    );
  } catch (error) {
    console.error('---> route handler error (delete page):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
