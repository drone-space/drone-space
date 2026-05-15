import {
  IconBellRinging,
  IconHeart,
  IconHelpCircle,
  IconInfoCircle,
  IconLibrary,
  IconLibraryPhoto,
  IconLicense,
  IconLock,
  IconLogout,
  IconPackage,
  IconQuestionMark,
  IconStar,
  IconUser,
} from '@tabler/icons-react';
import { images } from '@repo/constants/images';
import { AUTH_URLS } from '@repo/constants/paths';
import { EMAILS, LOCATIONS, PHONES, SOCIALS } from '@repo/constants/app';
import { cleanPaths } from '@repo/utilities/array';

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
    image: images.icons.social.facebook,
    title: SOCIALS.FB.label,
    link: SOCIALS.FB.link,
  },
  {
    image: images.icons.social.instagram,
    title: SOCIALS.IG.label,
    link: SOCIALS.IG.link,
  },
  {
    image: images.icons.social.twitterx,
    title: SOCIALS.X.label,
    link: SOCIALS.X.link,
  },
  {
    image: images.icons.social.linkedin,
    title: SOCIALS.LI.label,
    link: SOCIALS.LI.link,
  },
  {
    image: images.icons.social.youtube,
    title: SOCIALS.YT.label,
    link: SOCIALS.YT.link,
  },
  {
    image: images.icons.social.whatsapp,
    title: SOCIALS.WA.label,
    link: SOCIALS.WA.link,
  },
];

const email = {
  info: EMAILS.INFO,
  training: EMAILS.TRAINING,
};
const phone = {
  pri: PHONES.MAIN,
  sec: PHONES.OTHER,
};

export const links = {
  navbar: [
    {
      link: '/resources',
      label: 'Resources',
      subLinks: [
        {
          link: '/blog',
          label: 'News & Insights',
          leftSection: IconLibrary,
          desc: 'Latest stories, insights, and updates from our community.',
        },
        // {
        //   link: '/downloads',
        //   label: 'Downloads',
        //   leftSection: IconDownload,
        //   desc: 'Access useful resources, files, and important documents.',
        // },
        {
          link: '/gallery',
          label: 'Gallery',
          leftSection: IconLibraryPhoto,
          desc: 'See a visual showcase of our journey and achievements.',
        },
        {
          link: '/faq',
          label: 'FAQ',
          leftSection: IconQuestionMark,
          desc: 'Answers to common questions about our products & services.',
        },
      ],
    },
  ],
  footer: [
    {
      title: 'About',
      links: [
        {
          label: 'Our Story',
          link: '/about',
        },
        {
          label: 'Spaces & Hub',
          link: `/about#spaces-and-hub`,
        },
        {
          label: 'Testimonials',
          link: `/about#testimonials`,
        },
        {
          label: 'Contact Us',
          link: `/contact`,
        },
      ],
    },
    {
      title: 'Contact',
      links: [
        {
          label: LOCATIONS.MAIN.LOCATION_SHORT,
          link: LOCATIONS.MAIN.PIN,
        },
        {
          label: email.info,
          link: `mailto:${email.info}`,
        },
        {
          label: email.training,
          link: `mailto:${email.training}`,
        },
        {
          label: `+${phone.pri}`,
          link: `tel:${phone.pri}`,
        },
        // {
        //   label: phone.sec,
        //   link: `tel:${phone.sec}`,
        // },
      ],
    },
  ],
};

const mainLinks = [...links.navbar].map((l) => l.link);

const subLinks: string[] = [];

links.navbar.map((l) => {
  if (l.subLinks) {
    l.subLinks.map((sl) => {
      subLinks.push(sl.link);
    });
  }
});

const footerLinks: string[] = [];

links.footer.map((li) => {
  if (li.links) {
    li.links.map((li2) => {
      subLinks.push(li2.link);
    });
  }
});

export const unprotectedRoutes = [
  ...cleanPaths(
    [
      '/',
      ...mainLinks,
      ...subLinks,
      ...footerLinks,
      '/legal/terms',
      '/legal/policy',
    ].filter((l) => !l.startsWith('/#'))
  ),
];

export const sitemapRoutes = [...unprotectedRoutes].filter((l) => l != '/');
