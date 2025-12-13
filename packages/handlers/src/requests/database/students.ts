import { API_URL } from '@repo/constants/paths';
import { HEADERS } from '@repo/constants/other';
import {
  StudentCreate,
  StudentGet,
  StudentUpdate,
} from '@repo/types/models/student';

const baseRequestUrl = `${API_URL}/students`;

export const studentsGet = async () => {
  try {
    const request = new Request(baseRequestUrl, {
      method: 'GET',
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

let currentController: AbortController | null = null;

export const studentsUpdate = async (
  students: StudentGet[],
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
      body: JSON.stringify({ students, deletedIds }),
    });

    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (update students):', error);
    throw error;
  } finally {
    // Clear controller once done (important for GC)
    currentController = null;
  }
};

export const studentGet = async (params: { studentId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${params.studentId}`, {
      method: 'GET',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get student):', error);
    throw error;
  }
};

export const studentCreate = async (student: StudentCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: 'POST',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(student),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create student):', error);
    throw error;
  }
};

export const studentUpdate = async (student: StudentUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${student.id}`, {
      method: 'PUT',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(student),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update student):', error);
    throw error;
  }
};

export const studentDelete = async (studentId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${studentId}`, {
      method: 'DELETE',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete student):', error);
    throw error;
  }
};
