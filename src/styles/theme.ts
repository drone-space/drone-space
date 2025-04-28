'use client';

import {
  Anchor,
  Container,
  createTheme,
  Notification,
  Title,
} from '@mantine/core';

import cx from 'clsx';

import classesNotification from './mantine/notification.module.scss';
import classesContainer from './mantine/container.module.scss';
import classesAnchor from './mantine/anchor.module.scss';

const appTheme = createTheme({
  focusClassName: 'focus',
  activeClassName: 'active',

  colors: {
    pri: [
      '#edeffd',
      '#d6daf5',
      '#aab1ec',
      '#7a86e6',
      '#5362df',
      '#3c4adc',
      '#313fdb',
      '#2431c3',
      '#1e2caf',
      '#13259a', // src
    ],
    sec: [
      '#e1fdfd',
      '#d3f6f4',
      '#aeeae6',
      '#85dcd7', // src
      '#63d2cb',
      '#4ccbc4',
      '#3bc8c0',
      '#28b1a9',
      '#149d97',
      '#008982',
    ],
  },

  primaryColor: 'pri',

  defaultRadius: 'sm',

  primaryShade: { light: 9, dark: 9 },

  defaultGradient: {
    from: 'pri',
    to: 'sec',
    deg: 45,
  },

  headings: {
    fontFamily: 'var(--font-montserrat)',
    fontWeight: '700',
  },

  cursorType: 'pointer',

  components: {
    Title: Title.extend({
      defaultProps: { ff: 'var(--font-montserrat)', c: 'pri', fw: 'bold' },
    }),

    Anchor: Anchor.extend({
      defaultProps: { underline: 'never' },
      classNames: classesAnchor,
    }),

    Container: Container.extend({
      defaultProps: {
        mx: 'auto',
      },

      classNames: (_: any, { size }: { size?: any }) => ({
        root: cx({ [classesContainer.root]: size === 'responsive' }),
      }),
    }),

    Notification: Notification.extend({ classNames: classesNotification }),
  },
});

export default appTheme;
