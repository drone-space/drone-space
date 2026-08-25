/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { API_URL } from '@repo/constants/paths';
import { HEADERS } from '@repo/constants/other';
import {
  AlumniChallengerCreate,
  AlumniChallengerGet,
  AlumniChallengerUpdate,
} from '@repo/types/models/alumni-challenger';

const baseRequestUrl = `${API_URL}/alumni-challengers`;

export const alumniChallengersGet = async (params?: { userId?: string }) => {
  try {
    const request = new Request(
      `${baseRequestUrl}?userId=${params?.userId || ''}`,
      {
        method: 'GET',
        headers: HEADERS.WITHOUT_BODY,
      }
    );

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get alumniChallengers):', error);
    throw error;
  }
};

let currentController: AbortController | null = null;

export const alumniChallengersUpdate = async (
  alumniChallengers: AlumniChallengerGet[],
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
      body: JSON.stringify({ alumniChallengers, deletedIds }),
    });

    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (update alumniChallengers):', error);
    throw error;
  } finally {
    // Clear controller once done (important for GC)
    currentController = null;
  }
};

export const alumniChallengerGet = async (params: {
  alumniChallengerId: string;
}) => {
  try {
    const request = new Request(
      `${baseRequestUrl}/${params.alumniChallengerId}`,
      {
        method: 'GET',
        headers: HEADERS.WITHOUT_BODY,
      }
    );

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get alumniChallenger):', error);
    throw error;
  }
};

export const alumniChallengerCreate = async (
  alumniChallenger: AlumniChallengerCreate
) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: 'POST',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(alumniChallenger),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create alumniChallenger):', error);
    throw error;
  }
};

export const alumniChallengerUpdate = async (
  alumniChallenger: AlumniChallengerUpdate
) => {
  try {
    const request = new Request(`${baseRequestUrl}/${alumniChallenger.id}`, {
      method: 'PUT',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(alumniChallenger),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update alumniChallenger):', error);
    throw error;
  }
};

export const alumniChallengerDelete = async (alumniChallengerId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${alumniChallengerId}`, {
      method: 'DELETE',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete alumniChallenger):', error);
    throw error;
  }
};
