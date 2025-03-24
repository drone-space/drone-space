import { Request as EnumRequest } from '@/enums/request';
import { API_URL, HEADERS } from '@/data/constants';
import { QuizCreate, QuizUpdate } from '@/types/models/quiz';

const baseRequestUrl = `${API_URL}/quizzes`;

export const quizzesGet = async () => {
  try {
    const request = new Request(baseRequestUrl, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get quizzes):', error);
    throw error;
  }
};

export const quizGet = async (slug: { quizId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${slug.quizId}`, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get quiz):', error);
    throw error;
  }
};

export const quizCreate = async (quiz: QuizCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: EnumRequest.POST,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(quiz),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create quiz):', error);
    throw error;
  }
};

export const quizUpdate = async (quiz: QuizUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${quiz.id}`, {
      method: EnumRequest.PUT,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(quiz),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update quiz):', error);
    throw error;
  }
};

export const quizDelete = async (quizId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${quizId}`, {
      method: EnumRequest.DELETE,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete quiz):', error);
    throw error;
  }
};
