/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { API_URL } from '@repo/constants/paths';
import { HEADERS } from '@repo/constants/other';
import { QuizCreate, QuizRelations, QuizUpdate } from '@repo/types/models/quiz';

const baseRequestUrl = `${API_URL}/quizzes`;

export const quizzesGet = async (params?: { userId?: string }) => {
  try {
    const request = new Request(
      `${baseRequestUrl}?userId=${params?.userId || ''}`,
      {
        method: 'GET',
        headers: HEADERS.WITHOUT_BODY,
      }
    );

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get quizzes):', error);
    throw error;
  }
};

let currentController: AbortController | null = null;

export const quizzesUpdate = async (
  quizzes: QuizRelations[],
  deletedIds?: string[]
) => {
  // Cancel previous request if still in-flight
  if (currentController) currentController.abort();

  // New controller for this request
  currentController = new AbortController();

  try {
    const request = new Request(baseRequestUrl, {
      method: 'PUT',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify({ quizzes, deletedIds }),
    });

    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (update quizzes):', error);
    throw error;
  } finally {
    // Clear controller once done (important for GC)
    currentController = null;
  }
};

export const quizGet = async (params: { quizId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${params.quizId}`, {
      method: 'GET',
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
      method: 'POST',
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
      method: 'PUT',
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
      method: 'DELETE',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete quiz):', error);
    throw error;
  }
};
