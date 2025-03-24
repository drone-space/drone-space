import prisma from '@/libraries/prisma';
import { QuestionCreate, QuestionGet } from '@/types/models/questions';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { questionId: string } }
) {
  try {
    const getQuestion = await prisma.question.findUnique({
      where: { id: params.questionId },
    });

    return NextResponse.json(
      { question: getQuestion },
      { status: 200, statusText: 'Question Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get question):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { questionId: string } }
) {
  try {
    const { question }: { question: QuestionCreate } = await request.json();

    const createQuestion = await prisma.question.create({
      data: {
        ...question,
        id: params.questionId,
      },
    });

    return NextResponse.json(
      { question: createQuestion },
      { status: 200, statusText: 'Question Created' }
    );
  } catch (error) {
    console.error('---> route handler error (add question):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { questionId: string } }
) {
  try {
    const { question }: { question: QuestionGet } = await request.json();

    const updateQuestion = await prisma.question.update({
      where: { id: params.questionId },
      data: question,
    });

    return NextResponse.json(
      { question: updateQuestion },
      { status: 200, statusText: 'Question Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update question):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { questionId: string } }
) {
  try {
    const deleteQuestion = await prisma.question.delete({
      where: { id: params.questionId },
    });

    return NextResponse.json(
      { question: deleteQuestion },
      { status: 200, statusText: 'Question Deleted' }
    );
  } catch (error) {
    console.error('---> route handler error (delete question):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
