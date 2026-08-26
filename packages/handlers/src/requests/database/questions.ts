/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import {
  QuestionCreate,
  QuestionGet,
  QuestionUpdate,
} from '@repo/types/models/question';
import { apiCall } from './fetch';

const segment = 'questions';

export const questionsGet = (params: { apiUrl: string; userId?: string }) => {
  const query = params?.userId ? `?userId=${params.userId}` : '';
  return apiCall(segment + query, 'GET', params.apiUrl);
};

let currentController: AbortController | null = null;

export const questionsUpdate = async (
  apiUrl: string,
  questions: QuestionGet[],
  deletedIds?: string[]
) => {
  if (currentController) currentController.abort();
  currentController = new AbortController();

  try {
    return await apiCall(
      segment + '',
      'PUT',
      apiUrl,
      { questions, deletedIds },
      currentController.signal
    );
  } finally {
    currentController = null;
  }
};

export const questionGet = (params: { apiUrl: string; questionId: string }) => {
  return apiCall(segment + `/${params.questionId}`, 'GET', params.apiUrl);
};

export const questionCreate = (apiUrl: string, question: QuestionCreate) => {
  return apiCall(segment + '/create', 'POST', apiUrl, question);
};

export const questionUpdate = (apiUrl: string, question: QuestionUpdate) => {
  return apiCall(segment + `/${question.id}`, 'PUT', apiUrl, question);
};

export const questionDelete = (apiUrl: string, questionId: string) => {
  return apiCall(segment + `/${questionId}`, 'DELETE', apiUrl);
};
