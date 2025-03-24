import { Request as EnumRequest } from '@/enums/request';
import { API_URL, HEADERS } from '@/data/constants';
import { ProjectCreate, ProjectUpdate } from '@/types/models/project';

const baseRequestUrl = `${API_URL}/projects`;

export const projectsGet = async () => {
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
    console.error('---> handler error - (get projects):', error);
    throw error;
  }
};

export const projectGet = async (slug: { projectId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${slug.projectId}`, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get project):', error);
    throw error;
  }
};

export const projectCreate = async (project: ProjectCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: EnumRequest.POST,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(project),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create project):', error);
    throw error;
  }
};

export const projectUpdate = async (project: ProjectUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${project.id}`, {
      method: EnumRequest.PUT,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(project),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update project):', error);
    throw error;
  }
};

export const projectDelete = async (projectId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${projectId}`, {
      method: EnumRequest.DELETE,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete project):', error);
    throw error;
  }
};
