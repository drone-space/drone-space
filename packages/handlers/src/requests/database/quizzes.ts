/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { QuizCreate, QuizGet, QuizUpdate } from '@repo/types/models/quiz';
import { apiCall } from './fetch';

const segment = 'quizzes';

export const quizzesGet = (params: { apiUrl: string; userId?: string }) => {
  const query = params?.userId ? `?userId=${params.userId}` : '';
  return apiCall(segment + query, 'GET', params.apiUrl);
};

let currentController: AbortController | null = null;

export const quizzesUpdate = async (
  apiUrl: string,
  quizzes: QuizGet[],
  deletedIds?: string[]
) => {
  if (currentController) currentController.abort();
  currentController = new AbortController();

  try {
    return await apiCall(
      segment + '',
      'PUT',
      apiUrl,
      { quizzes, deletedIds },
      currentController.signal
    );
  } finally {
    currentController = null;
  }
};

export const quizGet = (params: { apiUrl: string; quizId: string }) => {
  return apiCall(segment + `/${params.quizId}`, 'GET', params.apiUrl);
};

export const quizCreate = (apiUrl: string, quiz: QuizCreate) => {
  return apiCall(segment + '/create', 'POST', apiUrl, quiz);
};

export const quizUpdate = (apiUrl: string, quiz: QuizUpdate) => {
  return apiCall(segment + `/${quiz.id}`, 'PUT', apiUrl, quiz);
};

export const quizDelete = (apiUrl: string, quizId: string) => {
  return apiCall(segment + `/${quizId}`, 'DELETE', apiUrl);
};
