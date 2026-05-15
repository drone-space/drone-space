/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { API_URL } from '@repo/constants/paths';
import { HEADERS } from '@repo/constants/other';
import {
  AnswerCreate,
  AnswerRelations,
  AnswerUpdate,
} from '@repo/types/models/answer';

const baseRequestUrl = `${API_URL}/answers`;

export const answersGet = async (params?: { userId?: string }) => {
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
    console.error('---> handler error - (get answers):', error);
    throw error;
  }
};

let currentController: AbortController | null = null;

export const answersUpdate = async (
  answers: AnswerRelations[],
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
      body: JSON.stringify({ answers, deletedIds }),
    });

    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (update answers):', error);
    throw error;
  } finally {
    // Clear controller once done (important for GC)
    currentController = null;
  }
};

export const answerGet = async (params: { answerId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${params.answerId}`, {
      method: 'GET',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get answer):', error);
    throw error;
  }
};

export const answerCreate = async (answer: AnswerCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: 'POST',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(answer),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create answer):', error);
    throw error;
  }
};

export const answerUpdate = async (answer: AnswerUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${answer.id}`, {
      method: 'PUT',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(answer),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update answer):', error);
    throw error;
  }
};

export const answerDelete = async (answerId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${answerId}`, {
      method: 'DELETE',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete answer):', error);
    throw error;
  }
};
