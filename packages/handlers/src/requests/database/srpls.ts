/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { SrplCreate, SrplGet, SrplUpdate } from '@repo/types/models/srpl';
import { apiCall } from './fetch';

const segment = 'srpls';

export const srplsGet = (params: { apiUrl: string; userId?: string }) => {
  const query = params?.userId ? `?userId=${params.userId}` : '';
  return apiCall(segment + query, 'GET', params.apiUrl);
};

let currentController: AbortController | null = null;

export const srplsUpdate = async (
  apiUrl: string,
  srpls: SrplGet[],
  deletedIds?: string[]
) => {
  if (currentController) currentController.abort();
  currentController = new AbortController();

  try {
    return await apiCall(
      segment + '',
      'PUT',
      apiUrl,
      { srpls, deletedIds },
      currentController.signal
    );
  } finally {
    currentController = null;
  }
};

export const srplGet = (params: { apiUrl: string; srplId: string }) => {
  return apiCall(segment + `/${params.srplId}`, 'GET', params.apiUrl);
};

export const srplCreate = (apiUrl: string, srpl: SrplCreate) => {
  return apiCall(segment + '/create', 'POST', apiUrl, srpl);
};

export const srplUpdate = (apiUrl: string, srpl: SrplUpdate) => {
  return apiCall(segment + `/${srpl.id}`, 'PUT', apiUrl, srpl);
};

export const srplDelete = (apiUrl: string, srplId: string) => {
  return apiCall(segment + `/${srplId}`, 'DELETE', apiUrl);
};
