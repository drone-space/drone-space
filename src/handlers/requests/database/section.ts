import { Request as EnumRequest } from '@/enums/request';
import { API_URL, HEADERS } from '@/data/constants';
import { SectionCreate, SectionUpdate } from '@/types/models/section';

const baseRequestUrl = `${API_URL}/sections`;

export const sectionsGet = async () => {
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
    console.error('---> handler error - (get sections):', error);
    throw error;
  }
};

export const sectionGet = async (slug: { sectionId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${slug.sectionId}`, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get section):', error);
    throw error;
  }
};

export const sectionCreate = async (section: SectionCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: EnumRequest.POST,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(section),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create section):', error);
    throw error;
  }
};

export const sectionUpdate = async (section: SectionUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${section.id}`, {
      method: EnumRequest.PUT,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(section),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update section):', error);
    throw error;
  }
};

export const sectionDelete = async (sectionId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${sectionId}`, {
      method: EnumRequest.DELETE,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete section):', error);
    throw error;
  }
};
