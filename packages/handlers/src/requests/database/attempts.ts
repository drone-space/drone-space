/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import {
  AttemptCreate,
  AttemptGet,
  AttemptUpdate,
} from '@repo/types/models/attempt';
import { apiCall } from './fetch';

const segment = 'attempts';

export const attemptsGet = (params: { apiUrl: string; userId?: string }) => {
  const query = params?.userId ? `?userId=${params.userId}` : '';
  return apiCall(segment + query, 'GET', params.apiUrl);
};

let currentController: AbortController | null = null;

export const attemptsUpdate = async (
  apiUrl: string,
  attempts: AttemptGet[],
  deletedIds?: string[]
) => {
  if (currentController) currentController.abort();
  currentController = new AbortController();

  try {
    return await apiCall(
      segment + '',
      'PUT',
      apiUrl,
      { attempts, deletedIds },
      currentController.signal
    );
  } finally {
    currentController = null;
  }
};

export const attemptGet = (params: { apiUrl: string; attemptId: string }) => {
  return apiCall(segment + `/${params.attemptId}`, 'GET', params.apiUrl);
};

export const attemptCreate = (apiUrl: string, attempt: AttemptCreate) => {
  return apiCall(segment + '/create', 'POST', apiUrl, attempt);
};

export const attemptUpdate = (apiUrl: string, attempt: AttemptUpdate) => {
  return apiCall(segment + `/${attempt.id}`, 'PUT', apiUrl, attempt);
};

export const attemptDelete = (apiUrl: string, attemptId: string) => {
  return apiCall(segment + `/${attemptId}`, 'DELETE', apiUrl);
};
