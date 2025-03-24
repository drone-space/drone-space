import { Request as EnumRequest } from '@/enums/request';
import { API_URL, HEADERS } from '@/data/constants';
import { AssignmentCreate, AssignmentUpdate } from '@/types/models/assignment';

const baseRequestUrl = `${API_URL}/assignments`;

export const assignmentsGet = async () => {
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
    console.error('---> handler error - (get assignments):', error);
    throw error;
  }
};

export const assignmentGet = async (slug: { assignmentId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${slug.assignmentId}`, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get assignment):', error);
    throw error;
  }
};

export const assignmentCreate = async (assignment: AssignmentCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: EnumRequest.POST,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(assignment),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create assignment):', error);
    throw error;
  }
};

export const assignmentUpdate = async (assignment: AssignmentUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${assignment.id}`, {
      method: EnumRequest.PUT,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(assignment),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update assignment):', error);
    throw error;
  }
};

export const assignmentDelete = async (assignmentId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${assignmentId}`, {
      method: EnumRequest.DELETE,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete assignment):', error);
    throw error;
  }
};
