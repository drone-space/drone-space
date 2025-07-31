import { API_URL, HEADERS } from '@/data/constants';

const baseRequestUrl = `${API_URL}/students`;

export const studentsGet = async () => {
  try {
    const request = new Request(baseRequestUrl, {
      method: 'GET',
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get students):', error);
    throw error;
  }
};
