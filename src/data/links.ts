import { linkify } from '@/utilities/formatters/string';
import services from './services';
import {
  IconArticle,
  IconCash,
  IconCell,
  IconCertificate,
  IconCertificate2,
  IconCirclePlus,
  IconCopyright,
  IconDeviceCameraPhone,
  IconHelp,
  IconLibraryPhoto,
  IconPlant2,
  IconSchool,
  IconSpaces,
  IconSun,
} from '@tabler/icons-react';

export const shopLinks = [
  {
    link: '/shop/drones/camera',
    label: 'Camera Drones',
    leftSection: IconDeviceCameraPhone,
    desc: 'Capture stunning aerial photos and videos with state-of-the-art camera drones.',
  },
  {
    link: '/shop/drones/enterprise',
    label: 'Enterprise Drones',
    leftSection: IconCell,
    desc: 'Powerful drones designed for industrial and commercial applications.',
  },
  {
    link: '/shop/drones/agriculture',
    label: 'Agriculture Drones',
    leftSection: IconPlant2,
    desc: 'Transform farming with innovative drones for precision agriculture and crop management.',
  },
  {
    link: '/shop/accessories',
    label: 'Drone Accessories',
    leftSection: IconCirclePlus,
    desc: 'Enhance your drone experience with high-quality accessories and add-ons.',
  },
];

const links = [
  {
    link: '/about',
    label: 'About',
    subLinks: [
      {
        link: '/about/#intro',
        label: 'Our Story',
        leftSection: IconCopyright,
        desc: 'Discover our story, mission, and the values that drive us forward.',
      },
      {
        link: '/about/#spaces-and-hub',
        label: 'Spaces & Hub',
        leftSection: IconSpaces,
        desc: 'Striving to accelerate development in technology and innovation.',
      },
      // {
      //   link: '/about/#team',
      //   label: 'Team',
      //   leftSection: IconUsersGroup,
      //   desc: 'Meet the passionate individuals behind our vision and success.',
      // },
      {
        link: '/about/gallery',
        label: 'Gallery',
        leftSection: IconLibraryPhoto,
        desc: 'See a visual showcase of our journey and achievements.',
      },
    ],
  },
  {
    link: '/training',
    label: 'Drone Training',
    subLinks: [
      {
        link: '/training/junior',
        label: 'Junior Training (Holiday Camp)',
        leftSection: IconCertificate2,
        desc: 'A fun and engaging introduction to drones for kids and teens during the holidays.',
      },
      {
        link: '/training/basic',
        label: 'Basic Training (RPL)',
        leftSection: IconCertificate,
        desc: 'Gain a Remote Pilot License (RPL) with comprehensive, hands-on training.',
      },
      {
        link: '/training/advanced',
        label: 'Advanced Training',
        leftSection: IconSchool,
        desc: 'Elevate your skills with expert-level training for complex drone operations and techniques.',
      },
      {
        link: '/training/pricing',
        label: 'Training Pricing',
        leftSection: IconCash,
        desc: 'Find detailed information on costs and packages for all our training programs.',
      },
    ],
  },
  {
    link: '/services',
    label: 'Drone Solutions',
    subLinks: [
      ...services.map((service) => {
        return {
          link: `/services/${linkify(service.title)}`,
          label: service.title,
          leftSection: service.leftSection,
          desc: service.linkDesc,
        };
      }),
      {
        label: 'Drone Light Shows',
        link: '/services/light-shows',
        leftSection: IconSun,
        desc: 'Experience mesmerizing aerial displays that light up the skies with creativity and precision.',
      },
    ],
  },
  {
    link: '/shop',
    label: 'Shop',
    subLinks: shopLinks,
  },
  {
    link: '/resources',
    label: 'Resources',
    subLinks: [
      {
        link: '/resources/blog',
        label: 'Blog',
        leftSection: IconArticle,
        desc: 'Stay updated with insights, stories, and news from our community.',
      },
      {
        link: '/resources/faq',
        label: 'FAQ',
        leftSection: IconHelp,
        desc: 'Find quick answers to common questions about our services, products, and policies.',
      },
    ],
  },
];

export default links;
