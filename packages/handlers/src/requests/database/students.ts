import { StudentCreate, StudentGet, StudentUpdate } from '@repo/types';
import { apiCall } from './fetch';

const segment = 'students';

export const studentsGet = (params: { apiUrl: string; userId?: string }) => {
  const query = params?.userId ? `?userId=${params.userId}` : '';
  return apiCall(segment + query, 'GET', params.apiUrl);
};

let currentController: AbortController | null = null;

export const studentsUpdate = async (
  apiUrl: string,
  students: StudentGet[],
  deletedIds?: string[],
) => {
  if (currentController) currentController.abort();
  currentController = new AbortController();

  try {
    return await apiCall(
      segment + '',
      'PUT',
      apiUrl,
      { students, deletedIds },
      currentController.signal,
    );
  } finally {
    currentController = null;
  }
};

export const studentGet = (params: { apiUrl: string; studentId: string }) => {
  return apiCall(segment + `/${params.studentId}`, 'GET', params.apiUrl);
};

export const studentCreate = (apiUrl: string, student: StudentCreate) => {
  return apiCall(segment + '/create', 'POST', apiUrl, student);
};

export const studentUpdate = (apiUrl: string, student: StudentUpdate) => {
  return apiCall(segment + `/${student.id}`, 'PUT', apiUrl, student);
};

export const studentDelete = (apiUrl: string, studentId: string) => {
  return apiCall(segment + `/${studentId}`, 'DELETE', apiUrl);
};
