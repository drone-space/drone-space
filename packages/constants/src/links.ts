/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import {
  IconCategory,
  IconLabel,
  IconLogout,
  IconSettings,
  IconUserEdit,
} from '@tabler/icons-react';
import { AUTH_URLS } from './paths';
import { Link } from '@repo/types/link';

export const navLinkItems = {
  user: {
    activity: [
      // {
      //   icon: IconHeart,
      //   link: `/account/wishlist`,
      //   label: 'My Wishlist',
      // },
      // {
      //   icon: IconPackage,
      //   link: `/account/orders`,
      //   label: 'My Orders',
      // },
      // {
      //   icon: IconStar,
      //   link: `/account/reviews`,
      //   label: 'My Reviews',
      // },
    ] satisfies Link[],

    account: [
      {
        icon: IconUserEdit,
        link: `/account/profile`,
        label: 'Edit Profile',
      },
      {
        icon: IconSettings,
        link: `/account/settings`,
        label: 'Account Settings',
      },
    ] satisfies Link[],

    danger: [
      {
        icon: IconLogout,
        link: AUTH_URLS.SIGN_OUT,
        label: 'Sign Out',
      },
    ] satisfies Link[],
  },
};

export const navLinkApp = [
  {
    label: 'Account Groups',
    icon: IconLabel,
  },
  {
    label: 'Categories',
    icon: IconCategory,
  },
  {
    label: 'Settings',
    icon: IconSettings,
  },
];
