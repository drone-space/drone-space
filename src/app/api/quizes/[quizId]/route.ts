import prisma from '@/libraries/prisma';
import { QuizCreate, QuizGet } from '@/types/models/quiz';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { quizId: string } }
) {
  try {
    const getQuiz = await prisma.quiz.findUnique({
      where: { id: params.quizId },
      include: { _count: { select: { questions: true } } },
    });

    return NextResponse.json(
      { quiz: getQuiz },
      { status: 200, statusText: 'Quiz Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get quiz):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { quizId: string } }
) {
  try {
    const { quiz }: { quiz: QuizCreate } = await request.json();

    const createQuiz = await prisma.quiz.create({
      data: {
        ...quiz,
        id: params.quizId,
      },
    });

    return NextResponse.json(
      { quiz: createQuiz },
      { status: 200, statusText: 'Quiz Created' }
    );
  } catch (error) {
    console.error('---> route handler error (add quiz):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { quizId: string } }
) {
  try {
    const {
      quiz,
    }: {
      quiz: QuizGet;
    } = await request.json();

    const updateQuiz = await prisma.quiz.update({
      where: { id: params.quizId },
      data: quiz,
    });

    return NextResponse.json(
      { quiz: updateQuiz },
      { status: 200, statusText: 'Quiz Updated' }
    );
  } catch (error) {
    console.error('---> route handler error (update quiz):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { quizId: string } }
) {
  try {
    const deleteQuiz = await prisma.quiz.delete({
      where: { id: params.quizId },
    });

    return NextResponse.json(
      { quiz: deleteQuiz },
      { status: 200, statusText: 'Quiz Deleted' }
    );
  } catch (error) {
    console.error('---> route handler error (delete quiz):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
