import { COMPANY_NAME } from '@repo/constants';
import { STORE_NAME } from '@repo/constants';
import { DBConfig } from '@repo/types';
import { linkify } from '@repo/utils';

export const config: DBConfig = {
  name: linkify(COMPANY_NAME),
  version: 4,
  stores: [
    {
      name: STORE_NAME.SETTINGS,
      keyPath: 'id',
    },
    {
      name: STORE_NAME.CATEGORIES,
      keyPath: 'id',
    },
    {
      name: STORE_NAME.POSTS,
      keyPath: 'id',
    },
    {
      name: STORE_NAME.QUIZZES,
      keyPath: 'id',
    },
    {
      name: STORE_NAME.QUIZ_QUESTIONS,
      keyPath: 'id',
    },
    {
      name: STORE_NAME.QUESTIONS,
      keyPath: 'id',
    },
    {
      name: STORE_NAME.OPTIONS,
      keyPath: 'id',
    },
    {
      name: STORE_NAME.ATTEMPTS,
      keyPath: 'id',
    },
    {
      name: STORE_NAME.ANSWERS,
      keyPath: 'id',
    },
    {
      name: STORE_NAME.SRPLS,
      keyPath: 'id',
    },
    {
      name: STORE_NAME.ALUMNI_CHALLENGERS,
      keyPath: 'id',
    },
  ],
};
