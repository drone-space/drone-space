import {
  IconBellRinging,
  IconHeart,
  IconHelpCircle,
  IconInfoCircle,
  IconLicense,
  IconLock,
  IconLogout,
  IconPackage,
  IconStar,
  IconUser,
} from '@tabler/icons-react';
import { images } from '@/assets/images';
import { AUTH_URLS } from './constants';
import { socials } from '@repo/constants/app';
import { Link } from '@/types/link';

export const navLinkItems = {
  activity: [
    {
      icon: IconHeart,
      link: `/account/wishlist`,
      label: 'My Wishlist',
    },
    {
      icon: IconPackage,
      link: `/account/orders`,
      label: 'My Orders',
    },
    {
      icon: IconStar,
      link: `/account/reviews`,
      label: 'My Reviews',
    },
  ],
  account: [
    {
      icon: IconUser,
      link: `/account/profile`,
      label: 'Profile Settings',
    },
    {
      icon: IconLock,
      link: `/account/security`,
      label: 'Account Security',
    },
    // {
    // 	icon: IconCoins,
    // 	link: `/account/payment`,
    // 	label: "Payment Details",
    // },
    // {
    // 	icon: IconMapPin,
    // 	link: `/account/addresses`,
    // 	label: "Addresses",
    // },
    {
      icon: IconBellRinging,
      link: `/account/notifications`,
      label: 'Notifications',
    },
  ],
  support: [
    {
      icon: IconHelpCircle,
      link: `/help`,
      label: 'Help Center',
    },
    {
      icon: IconLicense,
      link: `/legal/terms-and-conditions`,
      label: 'Terms and Conditions',
    },
    {
      icon: IconInfoCircle,
      link: `/legal/privacy-policy`,
      label: 'Privacy Policy',
    },
  ],
  danger: [
    {
      icon: IconLogout,
      link: AUTH_URLS.SIGN_OUT,
      label: 'Sign Out',
    },
  ],
};

export const socialLinks = [
  {
    image: images.icons.social.twitterx,
    title: socials[0].label,
    link: socials[0].link,
  },
  {
    image: images.icons.social.facebook,
    title: socials[1].label,
    link: socials[1].link,
  },
  {
    image: images.icons.social.instagram,
    title: socials[2].label,
    link: socials[2].link,
  },
  {
    image: images.icons.social.linkedin,
    title: socials[3].label,
    link: socials[3].link,
  },
  {
    image: images.icons.social.whatsapp,
    title: socials[4].label,
    link: socials[4].link,
  },
];

export const links: Link[] = [
  {
    link: '/faq',
    label: 'FAQ',
    desc: 'Find quick answers to common questions about our services, products, and policies.',
  },
];
