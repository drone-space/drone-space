import { Request as EnumRequest } from '@/enums/request';
import { API_URL, HEADERS } from '@/data/constants';
import { PageCreate, PageUpdate } from '@/types/models/page';

const baseRequestUrl = `${API_URL}/pages`;

export const pagesGet = async () => {
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
    console.error('---> handler error - (get pages):', error);
    throw error;
  }
};

export const pageGet = async (slug: { pageId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${slug.pageId}`, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get page):', error);
    throw error;
  }
};

export const pageCreate = async (page: PageCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: EnumRequest.POST,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(page),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create page):', error);
    throw error;
  }
};

export const pageUpdate = async (page: PageUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${page.id}`, {
      method: EnumRequest.PUT,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(page),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update page):', error);
    throw error;
  }
};

export const pageDelete = async (pageId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${pageId}`, {
      method: EnumRequest.DELETE,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete page):', error);
    throw error;
  }
};
