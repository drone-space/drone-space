import { Request as EnumRequest } from '@/enums/request';
import { API_URL, HEADERS } from '@/data/constants';
import { QuestionCreate, QuestionUpdate } from '@/types/models/questions';

const baseRequestUrl = `${API_URL}/questions`;

export const questionsGet = async () => {
  try {
    const request = new Request(baseRequestUrl, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get questions):', error);
    throw error;
  }
};

export const questionGet = async (slug: { questionId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${slug.questionId}`, {
      method: EnumRequest.GET,
      credentials: 'include',
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
      method: EnumRequest.POST,
      credentials: 'include',
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
      method: EnumRequest.PUT,
      credentials: 'include',
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
      method: EnumRequest.DELETE,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete question):', error);
    throw error;
  }
};
