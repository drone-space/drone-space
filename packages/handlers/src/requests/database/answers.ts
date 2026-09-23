import { AnswerCreate, AnswerGet, AnswerUpdate } from '@repo/types';
import { apiCall } from './fetch';

const segment = 'answers';

export const answersGet = (params: { apiUrl: string; userId?: string }) => {
  const query = params?.userId ? `?userId=${params.userId}` : '';
  return apiCall(segment + query, 'GET', params.apiUrl);
};

let currentController: AbortController | null = null;

export const answersUpdate = async (
  apiUrl: string,
  answers: AnswerGet[],
  deletedIds?: string[],
) => {
  if (currentController) currentController.abort();
  currentController = new AbortController();

  try {
    return await apiCall(
      segment + '',
      'PUT',
      apiUrl,
      { answers, deletedIds },
      currentController.signal,
    );
  } finally {
    currentController = null;
  }
};

export const answerGet = (params: { apiUrl: string; answerId: string }) => {
  return apiCall(segment + `/${params.answerId}`, 'GET', params.apiUrl);
};

export const answerCreate = (apiUrl: string, answer: AnswerCreate) => {
  return apiCall(segment + '/create', 'POST', apiUrl, answer);
};

export const answerUpdate = (apiUrl: string, answer: AnswerUpdate) => {
  return apiCall(segment + `/${answer.id}`, 'PUT', apiUrl, answer);
};

export const answerDelete = (apiUrl: string, answerId: string) => {
  return apiCall(segment + `/${answerId}`, 'DELETE', apiUrl);
};
