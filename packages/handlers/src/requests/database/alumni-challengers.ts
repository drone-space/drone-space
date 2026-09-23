import { AlumniChallengerCreate, AlumniChallengerGet, AlumniChallengerUpdate } from '@repo/types';
import { apiCall } from './fetch';

const segment = 'alumni-challengers';

export const alumniChallengersGet = (params: { apiUrl: string; userId?: string }) => {
  const query = params?.userId ? `?userId=${params.userId}` : '';
  return apiCall(segment + query, 'GET', params.apiUrl);
};

let currentController: AbortController | null = null;

export const alumniChallengersUpdate = async (
  apiUrl: string,
  alumniChallengers: AlumniChallengerGet[],
  deletedIds?: string[],
) => {
  if (currentController) currentController.abort();
  currentController = new AbortController();

  try {
    return await apiCall(
      segment + '',
      'PUT',
      apiUrl,
      { alumniChallengers, deletedIds },
      currentController.signal,
    );
  } finally {
    currentController = null;
  }
};

export const alumniChallengerGet = (params: { apiUrl: string; alumniChallengerId: string }) => {
  return apiCall(segment + `/${params.alumniChallengerId}`, 'GET', params.apiUrl);
};

export const alumniChallengerCreate = (
  apiUrl: string,
  alumniChallenger: AlumniChallengerCreate,
) => {
  return apiCall(segment + '/create', 'POST', apiUrl, alumniChallenger);
};

export const alumniChallengerUpdate = (
  apiUrl: string,
  alumniChallenger: AlumniChallengerUpdate,
) => {
  return apiCall(segment + `/${alumniChallenger.id}`, 'PUT', apiUrl, alumniChallenger);
};

export const alumniChallengerDelete = (apiUrl: string, alumniChallengerId: string) => {
  return apiCall(segment + `/${alumniChallengerId}`, 'DELETE', apiUrl);
};
