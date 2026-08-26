/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import {
  QuizQuestionCreate,
  QuizQuestionGet,
  QuizQuestionUpdate,
} from '@repo/types/models/quiz-question';
import { apiCall } from './fetch';

const segment = 'quiz-questions';

export const quizQuestionsGet = (params: {
  apiUrl: string;
  userId?: string;
}) => {
  const query = params?.userId ? `?userId=${params.userId}` : '';
  return apiCall(segment + query, 'GET', params.apiUrl);
};

let currentController: AbortController | null = null;

export const quizQuestionsUpdate = async (
  apiUrl: string,
  quizQuestions: QuizQuestionGet[],
  deletedIds?: string[]
) => {
  if (currentController) currentController.abort();
  currentController = new AbortController();

  try {
    return await apiCall(
      segment + '',
      'PUT',
      apiUrl,
      { quizQuestions, deletedIds },
      currentController.signal
    );
  } finally {
    currentController = null;
  }
};

export const quizQuestionGet = (params: {
  apiUrl: string;
  quizQuestionId: string;
}) => {
  return apiCall(segment + `/${params.quizQuestionId}`, 'GET', params.apiUrl);
};

export const quizQuestionCreate = (
  apiUrl: string,
  quizQuestion: QuizQuestionCreate
) => {
  return apiCall(segment + '/create', 'POST', apiUrl, quizQuestion);
};

export const quizQuestionUpdate = (
  apiUrl: string,
  quizQuestion: QuizQuestionUpdate
) => {
  return apiCall(segment + `/${quizQuestion.id}`, 'PUT', apiUrl, quizQuestion);
};

export const quizQuestionDelete = (apiUrl: string, quizQuestionId: string) => {
  return apiCall(segment + `/${quizQuestionId}`, 'DELETE', apiUrl);
};
