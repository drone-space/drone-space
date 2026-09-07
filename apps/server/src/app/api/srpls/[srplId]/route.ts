/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@repo/libraries/prisma';
import { SrplGet } from '@repo/types/models/srpl';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ srplId: string }> }
) {
  try {
    const { srplId } = await params;

    const srplRecord = await prisma.srpl.findUnique({
      where: { id: srplId },
    });

    return NextResponse.json(
      { item: srplRecord },
      { status: 200, statusText: 'Srpl Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get srpls):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const srpl: SrplGet = await request.json();

    const resolvedSrpl = await prisma.$transaction(async (tx) => {
      const existingSrpl = await tx.srpl.findUnique({
        where: { srplNumber: srpl.srplNumber },
      });

      if (existingSrpl) {
        return existingSrpl;
      }

      const newSrpl = await tx.srpl.create({
        data: {
          ...srpl,
          created_at: new Date(srpl.created_at),
          updated_at: new Date(srpl.updated_at),
        },
      });

      return newSrpl;
    });

    return NextResponse.json(
      { item: resolvedSrpl },
      { status: 200, statusText: 'Srpl Created' }
    );
  } catch (error) {
    console.error('---> route handler error (create srpls):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ srplId: string }> }
) {
  try {
    const { srplId } = await params;

    const srpl: SrplGet = await request.json();

    const updateSrpl = await prisma.srpl.update({
      where: { id: srplId },
      data: srpl,
    });

    return NextResponse.json(
      { item: updateSrpl },
      { status: 200, statusText: 'Srpl Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update srpls):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
