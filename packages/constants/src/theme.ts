'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import {
  Anchor,
  Container,
  createTheme,
  Loader,
  MantineThemeOverride,
  Modal,
  Notification,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import cx from 'clsx';
import { ICON_STROKE_WIDTH } from './sizes';

export type AppThemeProps = {
  theme?: MantineThemeOverride;
  styleSheets?: {
    container?: any;
    notification?: any;
    modal?: any;
  };
};

export const getAppTheme = (params?: AppThemeProps) => {
  const componentContainer = {
    Container: Container.extend({
      defaultProps: {
        mx: 'auto',
      },

      classNames: (_: unknown, { size }: { size?: unknown }) => ({
        root: cx({
          [params?.styleSheets?.container.root]: size === 'responsive',
        }),
      }),
    }),
  };

  const componentNotification = {
    Notification: Notification.extend({
      classNames: params?.styleSheets?.notification,
    }),
  };

  const componentModal = {
    Modal: Modal.extend({
      classNames: params?.styleSheets?.modal,
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
  };

  const componentsWithStyles = {
    ...(params?.styleSheets?.container ? componentContainer : {}),
    ...(params?.styleSheets?.notification ? componentNotification : {}),
    ...(params?.styleSheets?.modal ? componentModal : {}),
  };

  const baseTheme: MantineThemeOverride = {
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
    primaryShade: { light: 8, dark: 8 },
    cursorType: 'pointer',

    headings: {
      fontFamily: 'var(--font-montserrat)',
      fontWeight: '700',
    },

    components: {
      Container: Container.extend({
        defaultProps: {
          mx: 'auto',
        },

        classNames: (_: unknown, { size }: { size?: unknown }) => ({
          root: cx({
            [params?.styleSheets?.container.root]: size === 'responsive',
          }),
        }),
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

      Loader: Loader.extend({
        defaultProps: {
          type: 'bars',
          size: 'sm',
        },
      }),

      ...componentsWithStyles,
    },
  };

  return createTheme({
    ...baseTheme,
    ...(params?.theme || {}),
  });
};
