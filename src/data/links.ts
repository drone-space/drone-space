import { linkify } from '@/utilities/formatters/string';
import services from './services';
import {
  IconArticle,
  IconBellRinging,
  IconCash,
  IconCell,
  IconCirclePlus,
  IconCopyright,
  IconDeviceCameraPhone,
  IconHeart,
  IconHelp,
  IconHelpCircle,
  IconInfoCircle,
  IconLibraryPhoto,
  IconLicense,
  IconLock,
  IconLogout,
  IconPackage,
  IconPlant2,
  IconSpaces,
  IconStar,
  IconSun,
  IconUser,
  // IconUsersGroup,
} from '@tabler/icons-react';
import { courseList } from './courses';
import { images } from '@/assets/images';
import { AUTH_URLS } from './constants';
import { socials } from './app';

export const shopLinks = [
  {
    link: '/shop/drones/camera',
    label: 'Camera Drones',
    leftSection: IconDeviceCameraPhone,
    desc: 'Capture stunning aerial photos and videos with state-of-the-art camera drones.',
    definition:
      'Camera drones are designed to capture high-quality photos and videos from the air. Equipped with stabilized gimbals and advanced imaging sensors, they offer unique perspectives ideal for creators, travelers, and hobbyists. Their user-friendly controls and intelligent flight modes make aerial photography more accessible than ever.',
    image: images.carousel.shop.image1,
  },
  {
    link: '/shop/drones/cinematography',
    label: 'Cinematography & Filmmaking',
    leftSection: IconCell,
    desc: 'Professional-grade drones built for filmmakers and content creators, offering smooth, high-resolution aerial footage.',
    definition:
      'Cinematography drones are high-end tools for filmmakers, production studios, and content creators. They feature large sensors, cinema-grade optics, and dynamic stabilization systems, enabling sweeping aerial shots with exceptional clarity and motion fluidity. Ideal for everything from indie films to major productions.',
    image: images.carousel.shop.image5,
  },
  {
    link: '/shop/drones/enterprise',
    label: 'Industrial & Enterprise Applications',
    leftSection: IconCell,
    desc: 'Powerful drones designed for industrial and commercial applications.',
    definition:
      'Enterprise drones introduce advanced data capture capabilities, encompassing high-resolution imagery, LiDAR scanning, and thermal imaging. These capabilities empower businesses to amass detailed and actionable insights efficiently over expansive areas. Processed through specialized software, the collected data can yield precise maps, 3D models, and a range of analytics on a large scale.',
    image: images.carousel.shop.image2,
  },
  {
    link: '/shop/drones/mapping',
    label: 'Surveying & Mapping',
    leftSection: IconCell,
    desc: 'Accurate and efficient drones tailored for geospatial mapping, land surveying, and 3D modeling applications.',
    definition:
      'Mapping and survey drones are specialized for collecting accurate geospatial data. Using technologies like RTK GPS, photogrammetry, and LiDAR, they can efficiently cover large areas to generate topographic maps, 3D models, and contour lines. They are widely used in industries like construction, mining, and urban planning.',
    image: images.carousel.shop.image4,
  },
  {
    link: '/shop/drones/agriculture',
    label: 'Agriculture & Precision Farming',
    leftSection: IconPlant2,
    desc: 'Transform farming with innovative drones for precision agriculture and crop management.',
    definition:
      'Agriculture drones are purpose-built to support modern farming. They help monitor crop health, manage irrigation, and even perform precise spraying tasks. By automating field assessments and data collection, these drones enable farmers to make timely, data-driven decisions that boost yield and reduce resource waste.',
    image: images.carousel.shop.image3,
  },
  {
    link: '/shop/drones/upcoming',
    label: 'Upcoming Releases',
    leftSection: IconPlant2,
    desc: 'Be the first to explore the latest drone innovations and upcoming models hitting the skies soon.',
    definition:
      'This category features the latest drone models set to hit the market. Whether it’s groundbreaking flight technology, improved sensors, or entirely new capabilities, upcoming releases give enthusiasts and professionals early insight into the future of drone innovation.',
    image: images.carousel.shop.image6,
  },
  {
    link: '/shop/accessories',
    label: 'Drone Accessories',
    leftSection: IconCirclePlus,
    desc: 'Enhance your drone experience with high-quality accessories and add-ons.',
    image: images.carousel.shop.image1,
  },
];

export const trainingLinks = [
  ...courseList
    .map((course) => {
      if (courseList.indexOf(course) < 5) {
        return {
          link: `/drone-training#${linkify(course.title)}`,
          label: course.title,
          leftSection: course.leftSection,
          desc: course.linkDesc,
        };
      }

      return null;
    })
    .filter((i) => i != null),

  {
    link: '/drone-training/pricing',
    label: 'Training Pricing',
    leftSection: IconCash,
    desc: 'Find detailed information on costs and packages for all our training programs.',
  },
];

export const serviceLinks = [
  {
    label: 'Drone Light Shows',
    link: '/drone-solutions/light-shows',
    leftSection: IconSun,
    desc: 'Experience mesmerizing aerial displays that light up the skies with creativity and precision.',
  },

  ...services.map((service) => {
    return {
      link: `/drone-solutions#${linkify(service.title)}`,
      label: service.title,
      leftSection: service.leftSection,
      desc: service.linkDesc,
    };
  }),
];

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
    title: socials.twitter.platform,
    link: socials.twitter.link,
  },
  {
    image: images.icons.social.facebook,
    title: socials.facebook.platform,
    link: socials.facebook.link,
  },
  {
    image: images.icons.social.instagram,
    title: socials.instagram.platform,
    link: socials.instagram.link,
  },
  {
    image: images.icons.social.linkedin,
    title: socials.linkedin.platform,
    link: socials.linkedin.link,
  },
  {
    image: images.icons.social.whatsapp,
    title: socials.whatsapp.platform,
    link: socials.whatsapp.link,
  },
];

const links = [
  {
    link: '/about',
    label: 'About',
    subLinks: [
      {
        link: '/about/#our-story',
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
      {
        link: '/gallery',
        label: 'Gallery',
        leftSection: IconLibraryPhoto,
        desc: 'See a visual showcase of our journey and achievements.',
      },
      {
        link: '/contact',
        label: 'Contact Us',
        leftSection: IconInfoCircle,
        desc: 'Reach out for any inquiries about drone training, drone reselling and drone services.',
      },
      // {
      //   link: '/about/#team',
      //   label: 'Team',
      //   leftSection: IconUsersGroup,
      //   desc: 'Discover the talented individuals driving our mission forward.',
      // },
    ],
  },
  {
    link: '/drone-training',
    label: 'Drone Training',
    subLinks: trainingLinks,
  },
  {
    link: '/drone-solutions',
    label: 'Drone Solutions',
    subLinks: serviceLinks,
  },
  {
    link: '/shop',
    label: 'Shop',
    subLinks: shopLinks,
  },
  {
    link: '/blog',
    label: 'Resources',
    subLinks: [
      {
        link: '/blog',
        label: 'Blog',
        leftSection: IconArticle,
        desc: 'Stay updated with insights, stories, and news from our community.',
      },
      {
        link: '/faq',
        label: 'FAQ',
        leftSection: IconHelp,
        desc: 'Find quick answers to common questions about our services, products, and policies.',
      },
    ],
  },
];

export default links;
