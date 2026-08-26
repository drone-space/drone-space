/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { PostCreate, PostGet, PostUpdate } from '@repo/types/models/post';
import { apiCall } from './fetch';

const segment = 'posts';

export const postsGet = (params: { apiUrl: string; userId?: string }) => {
  const query = params?.userId ? `?userId=${params.userId}` : '';
  return apiCall(segment + query, 'GET', params.apiUrl);
};

let currentController: AbortController | null = null;

export const postsUpdate = async (
  apiUrl: string,
  posts: PostGet[],
  deletedIds?: string[]
) => {
  if (currentController) currentController.abort();
  currentController = new AbortController();

  try {
    return await apiCall(
      segment + '',
      'PUT',
      apiUrl,
      { posts, deletedIds },
      currentController.signal
    );
  } finally {
    currentController = null;
  }
};

export const postGet = (params: { apiUrl: string; postId: string }) => {
  return apiCall(segment + `/${params.postId}`, 'GET', params.apiUrl);
};

export const postCreate = (apiUrl: string, post: PostCreate) => {
  return apiCall(segment + '/create', 'POST', apiUrl, post);
};

export const postUpdate = (apiUrl: string, post: PostUpdate) => {
  return apiCall(segment + `/${post.id}`, 'PUT', apiUrl, post);
};

export const postDelete = (apiUrl: string, postId: string) => {
  return apiCall(segment + `/${postId}`, 'DELETE', apiUrl);
};
