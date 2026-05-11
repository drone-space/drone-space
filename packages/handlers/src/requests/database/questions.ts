/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { API_URL } from '@repo/constants/paths';
import { HEADERS } from '@repo/constants/other';
import {
  QuestionCreate,
  QuestionRelations,
  QuestionUpdate,
} from '@repo/types/models/question';

const baseRequestUrl = `${API_URL}/questions`;

export const questionsGet = async (params?: { userId?: string }) => {
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
    console.error('---> handler error - (get questions):', error);
    throw error;
  }
};

let currentController: AbortController | null = null;

export const questionsUpdate = async (
  questions: QuestionRelations[],
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
      body: JSON.stringify({ questions, deletedIds }),
    });

    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (update questions):', error);
    throw error;
  } finally {
    // Clear controller once done (important for GC)
    currentController = null;
  }
};

export const questionGet = async (params: { questionId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${params.questionId}`, {
      method: 'GET',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get question):', error);
    throw error;
  }
};

export const questionCreate = async (question: QuestionCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: 'POST',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(question),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create question):', error);
    throw error;
  }
};

export const questionUpdate = async (question: QuestionUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${question.id}`, {
      method: 'PUT',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(question),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update question):', error);
    throw error;
  }
};

export const questionDelete = async (questionId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${questionId}`, {
      method: 'DELETE',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete question):', error);
    throw error;
  }
};
