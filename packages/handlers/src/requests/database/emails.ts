/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { API_URL } from '@repo/constants/paths';
import { HEADERS } from '@repo/constants/other';
import {
  EmailCreate,
  EmailRelations,
  EmailUpdate,
} from '@repo/types/models/email';

const baseRequestUrl = `${API_URL}/emails`;

export const emailsGet = async () => {
  try {
    const request = new Request(baseRequestUrl, {
      method: 'GET',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get emails):', error);
    throw error;
  }
};

let currentController: AbortController | null = null;

export const emailsUpdate = async (
  emails: EmailRelations[],
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
      body: JSON.stringify({ emails, deletedIds }),
    });

    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (update emails):', error);
    throw error;
  } finally {
    // Clear controller once done (important for GC)
    currentController = null;
  }
};

export const emailGet = async (params: { emailId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${params.emailId}`, {
      method: 'GET',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get email):', error);
    throw error;
  }
};

export const emailCreate = async (email: EmailCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: 'POST',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(email),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create email):', error);
    throw error;
  }
};

export const emailUpdate = async (email: EmailUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${email.id}`, {
      method: 'PUT',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(email),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update email):', error);
    throw error;
  }
};

export const emailDelete = async (emailId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${emailId}`, {
      method: 'DELETE',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete email):', error);
    throw error;
  }
};
