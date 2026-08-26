/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import {
  OptionCreate,
  OptionGet,
  OptionUpdate,
} from '@repo/types/models/option';
import { apiCall } from './fetch';

const segment = 'options';

export const optionsGet = (params: { apiUrl: string; userId?: string }) => {
  const query = params?.userId ? `?userId=${params.userId}` : '';
  return apiCall(segment + query, 'GET', params.apiUrl);
};

let currentController: AbortController | null = null;

export const optionsUpdate = async (
  apiUrl: string,
  options: OptionGet[],
  deletedIds?: string[]
) => {
  if (currentController) currentController.abort();
  currentController = new AbortController();

  try {
    return await apiCall(
      segment + '',
      'PUT',
      apiUrl,
      { options, deletedIds },
      currentController.signal
    );
  } finally {
    currentController = null;
  }
};

export const optionGet = (params: { apiUrl: string; optionId: string }) => {
  return apiCall(segment + `/${params.optionId}`, 'GET', params.apiUrl);
};

export const optionCreate = (apiUrl: string, option: OptionCreate) => {
  return apiCall(segment + '/create', 'POST', apiUrl, option);
};

export const optionUpdate = (apiUrl: string, option: OptionUpdate) => {
  return apiCall(segment + `/${option.id}`, 'PUT', apiUrl, option);
};

export const optionDelete = (apiUrl: string, optionId: string) => {
  return apiCall(segment + `/${optionId}`, 'DELETE', apiUrl);
};
