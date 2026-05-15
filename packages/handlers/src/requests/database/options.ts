/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { API_URL } from '@repo/constants/paths';
import { HEADERS } from '@repo/constants/other';
import { OptionCreate, OptionRelations, OptionUpdate } from '@repo/types/models/option';

const baseRequestUrl = `${API_URL}/options`;

export const optionsGet = async (params?: { userId?: string }) => {
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
    console.error('---> handler error - (get options):', error);
    throw error;
  }
};

let currentController: AbortController | null = null;

export const optionsUpdate = async (
  options: OptionRelations[],
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
      body: JSON.stringify({ options, deletedIds }),
    });

    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (update options):', error);
    throw error;
  } finally {
    // Clear controller once done (important for GC)
    currentController = null;
  }
};

export const optionGet = async (params: { optionId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${params.optionId}`, {
      method: 'GET',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get option):', error);
    throw error;
  }
};

export const optionCreate = async (option: OptionCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: 'POST',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(option),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create option):', error);
    throw error;
  }
};

export const optionUpdate = async (option: OptionUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${option.id}`, {
      method: 'PUT',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(option),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update option):', error);
    throw error;
  }
};

export const optionDelete = async (optionId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${optionId}`, {
      method: 'DELETE',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete option):', error);
    throw error;
  }
};
