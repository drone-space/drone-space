'use client';

import cx from 'clsx';
import {
  Anchor,
  Container,
  createTheme,
  Modal,
  Notification,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import classesContainer from './mantine/container.module.scss';
import classesNotification from './mantine/notification.module.scss';
import classesModal from './mantine/modal.module.scss';
import { ICON_STROKE_WIDTH } from '@/data/constants';

const appTheme = createTheme({
  colors: {
    pri: [
      '#ebf3fd',
      '#c6d5eb',
      '#a1b6db',
      '#7c96cd',
      '#5774bf',
      '#3e57a7',
      '#304182',
      '#222c5d',
      '#141939', // src (8)
      '#060a17',
    ],
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
  defaultRadius: 'lg',
  defaultGradient: {
    from: 'pri.8',
    to: 'sec.3',
    deg: 45,
  },
  primaryShade: { light: 8, dark: 8 },
  cursorType: 'pointer',

  headings: {
    fontFamily: 'var(--font-montserrat)',
    fontWeight: '700',
  },

  components: {
    Modal: Modal.extend({
      classNames: classesModal,
      defaultProps: {
        transitionProps: {
          duration: 250,
          transition: 'fade',
        },
        overlayProps: {
          backgroundOpacity: 0.5,
          blur: 3,
        },
      },
    }),

    Anchor: Anchor.extend({
      defaultProps: { underline: 'never' },
    }),

    Title: Title.extend({
      defaultProps: { c: 'pri.8' },
    }),

    TextInput: TextInput.extend({
      defaultProps: {
        styles: {
          input: {
            borderWidth: ICON_STROKE_WIDTH,
          },
        },
      },
    }),

    Textarea: Textarea.extend({
      defaultProps: {
        styles: {
          input: {
            borderWidth: ICON_STROKE_WIDTH,
          },
        },
      },
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
