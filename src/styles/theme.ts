'use client';

import cx from 'clsx';
import {
  Anchor,
  Container,
  createTheme,
  Notification,
  Title,
} from '@mantine/core';
import classesContainer from './mantine/container.module.scss';
import classesNotification from './mantine/notification.module.scss';

const appTheme = createTheme({
  colors: {
    // pri: [
    //   '#edeffd',
    //   '#d6daf5',
    //   '#aab1ec',
    //   '#7a86e6',
    //   '#5362df',
    //   '#3c4adc',
    //   '#313fdb',
    //   '#2431c3',
    //   '#1e2caf',
    //   '#13259a', // src
    // ],
    pri: [
      '#ebeefd',
      '#c6cceb',
      '#a1aadb',
      '#7c88cd',
      '#5766bf',
      '#3e4ca7',
      '#303b82',
      '#222a5d', // src (7)
      '#141939',
      '#060917',
    ],
    // sec: [
    //   '#e1fdfd',
    //   '#d3f6f4',
    //   '#aeeae6',
    //   '#85dcd7', // src
    //   '#63d2cb',
    //   '#4ccbc4',
    //   '#3bc8c0',
    //   '#28b1a9',
    //   '#149d97',
    //   '#008982',
    // ],
    sec: [
      '#e1fbfb',
      '#c3ebea',
      '#a1dcda',
      '#7ececc', // src (3)
      '#5cc0bd',
      '#43a6a4',
      '#31817f',
      '#205c5b',
      '#0c3838',
      '#001414',
    ],
  },

  primaryColor: 'pri',
  defaultRadius: 'sm',
  defaultGradient: {
    from: 'pri.7',
    to: 'sec.4',
    deg: 45,
  },
  primaryShade: { light: 7, dark: 7 },
  cursorType: 'pointer',

  headings: {
    fontFamily: 'var(--font-montserrat)',
    fontWeight: '700',
  },

  components: {
    Anchor: Anchor.extend({
      defaultProps: { underline: 'never' },
    }),

    Title: Title.extend({
      defaultProps: { c: 'pri.7' },
    }),

    Container: Container.extend({
      defaultProps: {
        mx: 'auto',
      },

      classNames: (_: unknown, { size }: { size?: unknown }) => ({
        root: cx({ [classesContainer.root]: size === 'responsive' }),
      }),
    }),

    Notification: Notification.extend({ classNames: classesNotification }),
  },
});

export default appTheme;
