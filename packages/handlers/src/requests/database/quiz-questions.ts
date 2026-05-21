/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { API_URL } from '@repo/constants/paths';
import { HEADERS } from '@repo/constants/other';
import {
  QuizQuestionCreate,
  QuizQuestionRelations,
  QuizQuestionUpdate,
} from '@repo/types/models/quiz-question';

const baseRequestUrl = `${API_URL}/quiz-questions`;

export const quizQuestionsGet = async (params?: { userId?: string }) => {
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
    console.error('---> handler error - (get quiz questions):', error);
    throw error;
  }
};

let currentController: AbortController | null = null;

export const quizQuestionsUpdate = async (
  quizQuestions: QuizQuestionRelations[],
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
      body: JSON.stringify({ quizQuestions, deletedIds }),
    });

    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (update quiz questions):', error);
    throw error;
  } finally {
    // Clear controller once done (important for GC)
    currentController = null;
  }
};

export const quizQuestionGet = async (params: { quizQuestionId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${params.quizQuestionId}`, {
      method: 'GET',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get quiz question):', error);
    throw error;
  }
};

export const quizQuestionCreate = async (quizQuestion: QuizQuestionCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: 'POST',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(quizQuestion),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create quiz question):', error);
    throw error;
  }
};

export const quizQuestionUpdate = async (quizQuestion: QuizQuestionUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${quizQuestion.id}`, {
      method: 'PUT',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(quizQuestion),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update quiz question):', error);
    throw error;
  }
};

export const quizQuestionDelete = async (quizQuestionId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${quizQuestionId}`, {
      method: 'DELETE',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete quiz question):', error);
    throw error;
  }
};
