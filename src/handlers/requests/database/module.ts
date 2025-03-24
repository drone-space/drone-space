import { Request as EnumRequest } from '@/enums/request';
import { API_URL, HEADERS } from '@/data/constants';
import { ModuleCreate, ModuleUpdate } from '@/types/models/module';

const baseRequestUrl = `${API_URL}/modules`;

export const modulesGet = async () => {
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
    console.error('---> handler error - (get modules):', error);
    throw error;
  }
};

export const moduleGet = async (slug: { moduleId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${slug.moduleId}`, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get module):', error);
    throw error;
  }
};

export const moduleCreate = async (module: ModuleCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: EnumRequest.POST,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(module),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create module):', error);
    throw error;
  }
};

export const moduleUpdate = async (module: ModuleUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${module.id}`, {
      method: EnumRequest.PUT,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(module),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update module):', error);
    throw error;
  }
};

export const moduleDelete = async (moduleId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${moduleId}`, {
      method: EnumRequest.DELETE,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete module):', error);
    throw error;
  }
};
