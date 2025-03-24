import { Request as EnumRequest } from '@/enums/request';
import { API_URL, HEADERS } from '@/data/constants';
import { ProfileCreate, ProfileUpdate } from '@/types/models/profile';

const baseRequestUrl = `${API_URL}/profiles`;

export const profilesGet = async () => {
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
    console.error('---> handler error - (get profiles):', error);
    throw error;
  }
};

export const profileGet = async (slug: { profileId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${slug.profileId}`, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get profile):', error);
    throw error;
  }
};

export const profileCreate = async (profile: ProfileCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: EnumRequest.POST,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(profile),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create profile):', error);
    throw error;
  }
};

export const profileUpdate = async (profile: ProfileUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${profile.id}`, {
      method: EnumRequest.PUT,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(profile),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update profile):', error);
    throw error;
  }
};

export const profileDelete = async (profileId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${profileId}`, {
      method: EnumRequest.DELETE,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete profile):', error);
    throw error;
  }
};
