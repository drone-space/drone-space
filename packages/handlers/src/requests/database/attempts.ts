/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { API_URL } from '@repo/constants/paths';
import { HEADERS } from '@repo/constants/other';
import { AttemptCreate, AttemptRelations, AttemptUpdate } from '@repo/types/models/attempt';

const baseRequestUrl = `${API_URL}/attempts`;

export const attemptsGet = async (params?: { userId?: string }) => {
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
    console.error('---> handler error - (get attempts):', error);
    throw error;
  }
};

let currentController: AbortController | null = null;

export const attemptsUpdate = async (
  attempts: AttemptRelations[],
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
      body: JSON.stringify({ attempts, deletedIds }),
    });

    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (update attempts):', error);
    throw error;
  } finally {
    // Clear controller once done (important for GC)
    currentController = null;
  }
};

export const attemptGet = async (params: { attemptId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${params.attemptId}`, {
      method: 'GET',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get attempt):', error);
    throw error;
  }
};

export const attemptCreate = async (attempt: AttemptCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: 'POST',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(attempt),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create attempt):', error);
    throw error;
  }
};

export const attemptUpdate = async (attempt: AttemptUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${attempt.id}`, {
      method: 'PUT',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(attempt),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update attempt):', error);
    throw error;
  }
};

export const attemptDelete = async (attemptId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${attemptId}`, {
      method: 'DELETE',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete attempt):', error);
    throw error;
  }
};
