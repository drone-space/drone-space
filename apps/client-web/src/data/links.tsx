import {
  IconAperture,
  IconArrowRight,
  IconArticle,
  IconBellRinging,
  IconBolt,
  IconBuildingFactory,
  IconBuildingFactory2,
  IconCash,
  IconCell,
  IconCopyright,
  IconDeviceCameraPhone,
  IconDownload,
  IconDrone,
  IconHeart,
  IconHelp,
  IconHelpCircle,
  IconInfoCircle,
  IconLibrary,
  IconLibraryPhoto,
  IconLicense,
  IconLock,
  IconLogout,
  IconMap2,
  IconMovie,
  IconPackage,
  IconPlant2,
  IconQuestionMark,
  IconReceipt2,
  IconSeeding,
  IconSpaces,
  IconSparkles,
  IconStar,
  IconSun,
  IconUser,
} from '@tabler/icons-react';
import { linkify } from '@repo/utilities/url';
import services from './services';
import { courseList } from '@repo/constants/courses';
import { images } from '@repo/constants/images';
import { AUTH_URLS } from '@repo/constants/paths';
import { EMAILS, LOCATIONS, PHONES, SOCIALS } from '@repo/constants/app';
import { cleanPaths } from '@repo/utilities/array';
import { Button } from '@mantine/core';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';

export const shopLinks = [
  {
    link: '/shop',
    label: 'All Drones',
    leftSection: IconDrone,
    // desc: 'Capture stunning aerial photos and videos with state-of-the-art camera drones.',
    // definition:
    //   'Camera drones are designed to capture high-quality photos and videos from the air. Equipped with stabilized gimbals and advanced imaging sensors, they offer unique perspectives ideal for creators, travelers, and hobbyists. Their user-friendly controls and intelligent flight modes make aerial photography more accessible than ever.',
  },

  {
    link: '/shop?category=camera&layout=grid&listSize=6#listing',
    label: 'Camera Drones',
    leftSection: IconAperture,
    // desc: 'Capture stunning aerial photos and videos with state-of-the-art camera drones.',
    // definition:
    //   'Camera drones are designed to capture high-quality photos and videos from the air. Equipped with stabilized gimbals and advanced imaging sensors, they offer unique perspectives ideal for creators, travelers, and hobbyists. Their user-friendly controls and intelligent flight modes make aerial photography more accessible than ever.',
    // image: images.carousel.shop.image1,
  },
  {
    link: '/shop?category=cinematography&layout=grid&listSize=6#listing',
    label: 'Cinematography & Filmmaking',
    labelShort: 'Cinematography',
    leftSection: IconMovie,
    // desc: 'Professional-grade drones built for filmmakers and content creators, offering smooth, high-resolution aerial footage.',
    // definition:
    //   'Cinematography drones are high-end tools for filmmakers, production studios, and content creators. They feature large sensors, cinema-grade optics, and dynamic stabilization systems, enabling sweeping aerial shots with exceptional clarity and motion fluidity. Ideal for everything from indie films to major productions.',
    // image: images.carousel.shop.image5,
  },
  {
    link: '/shop?category=enterprise&layout=grid&listSize=6#listing',
    label: 'Industrial & Enterprise Applications',
    labelShort: 'Industrial & Enterprise',
    leftSection: IconBuildingFactory2,
    // desc: 'Powerful drones designed for industrial and commercial applications.',
    // definition:
    //   'Enterprise drones introduce advanced data capture capabilities, encompassing high-resolution imagery, LiDAR scanning, and thermal imaging. These capabilities empower businesses to amass detailed and actionable insights efficiently over expansive areas. Processed through specialized software, the collected data can yield precise maps, 3D models, and a range of analytics on a large scale.',
    // image: images.carousel.shop.image2,
  },
  {
    link: '/shop?category=mapping&layout=grid&listSize=6#listing',
    label: 'Surveying & Mapping',
    leftSection: IconMap2,
    // desc: 'Accurate and efficient drones tailored for geospatial mapping, land surveying, and 3D modeling applications.',
    // definition:
    //   'Mapping and survey drones are specialized for collecting accurate geospatial data. Using technologies like RTK GPS, photogrammetry, and LiDAR, they can efficiently cover large areas to generate topographic maps, 3D models, and contour lines. They are widely used in industries like construction, mining, and urban planning.',
    // image: images.carousel.shop.image4,
  },
  {
    link: '/shop?category=agriculture&layout=grid&listSize=6#listing',
    label: 'Agriculture & Precision Farming',
    labelShort: 'Agriculture',
    leftSection: IconSeeding,
    // desc: 'Transform farming with innovative drones for precision agriculture and crop management.',
    // definition:
    //   'Agriculture drones are purpose-built to support modern farming. They help monitor crop health, manage irrigation, and even perform precise spraying tasks. By automating field assessments and data collection, these drones enable farmers to make timely, data-driven decisions that boost yield and reduce resource waste.',
    // image: images.carousel.shop.image3,
  },
  // {
  //   link: '/shop?category=upcoming&layout=grid&listSize=6#listing',
  //   label: 'Upcoming Releases',
  //   leftSection: IconPlant2,
  //   desc: 'Be the first to explore the latest drone innovations and upcoming models hitting the skies soon.',
  //   definition:
  //     'This category features the latest drone models set to hit the market. Whether it’s groundbreaking flight technology, improved sensors, or entirely new capabilities, upcoming releases give enthusiasts and professionals early insight into the future of drone innovation.',
  //   image: images.carousel.shop.image6,
  // },
  // {
  //   link: '/shop/accessories',
  //   label: 'Drone Accessories',
  //   leftSection: IconCirclePlus,
  //   desc: 'Enhance your drone experience with high-quality accessories and add-ons.',
  //   image: images.carousel.shop.image1,
  // },
];

export const trainingLinks = [
  {
    link: `/drone-training`,
    label: 'Overview',
    leftSection: IconBolt,
  },

  ...courseList
    .map((course) => {
      return {
        link: `/drone-training/${linkify(course.title)}`,
        label: course.titleShort || course.title,
        leftSection: 'empty' as any,
        // desc: course.linkDesc,
      };
    })
    .filter((i) => i != null),

  {
    link: '/drone-training/pricing',
    label: 'Pricing',
    leftSection: IconReceipt2,
    // desc: 'Find detailed information on costs and packages for all our training programs.',
  },
];

export const serviceLinks = [
  {
    link: `/drone-solutions`,
    label: 'Overview',
    leftSection: IconBolt,
  },

  {
    label: 'Light Shows',
    link: '/drone-solutions/light-shows',
    leftSection: IconSparkles,
    // desc: 'Experience mesmerizing aerial displays that light up the skies with creativity and precision.',
  },

  ...services.map((service) => {
    return {
      link: `/drone-solutions/${linkify(service.title)}`,
      label: service.titleShort || service.title,
      leftSection: service.leftSection,
      // desc: service.linkDesc,
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
      link: '/drone-training',
      label: 'Training',
      subLinks: trainingLinks,
    },
    {
      link: '/drone-solutions',
      label: 'Solutions',
      subLinks: serviceLinks,
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
          link: '/blog',
          label: 'Blog',
          leftSection: IconLibrary,
          // desc: 'Stay updated with insights, stories, and news from our community.',
        },
        // {
        //   link: '/gallery',
        //   label: 'Gallery',
        //   leftSection: IconLibraryPhoto,
        //   // desc: 'See a visual showcase of our journey and achievements.',
        // },
        {
          link: '/downloads',
          label: 'Downloads',
          leftSection: IconDownload,
          // desc: 'Find quick answers to common questions about our services, products, and policies.',
        },
        // {
        //   link: '/faq',
        //   label: 'FAQ',
        //   leftSection: IconQuestionMark,
        //   // desc: 'Find quick answers to common questions about our services, products, and policies.',
        // },
      ],
    },
  ],
  footer: [
    {
      title: 'Training',
      links: trainingLinks,
      // cta: (
      //   <Button size="xs" variant="gradient">
      //     Start Training
      //   </Button>
      // ),
    },
    {
      title: 'Solutions',
      links: serviceLinks,
      cta: (
        <Button
          size="xs"
          variant="transparent"
          c="sec.3"
          fz={'inherit'}
          p={0}
          radius={0}
          fw={500}
          mt={5}
          rightSection={
            <IconArrowRight
              size={ICON_SIZE}
              stroke={ICON_STROKE_WIDTH}
              style={{ marginTop: 2 }}
            />
          }
        >
          Get a Quote
        </Button>
      ),
    },
    {
      title: 'Shop',
      links: shopLinks,
    },
    {
      title: 'Resources',
      links: [
        {
          link: '/blog',
          label: 'Blog',
        },
        {
          link: '/downloads',
          label: 'Downloads',
        },
        {
          link: '/gallery',
          label: 'Gallery',
        },
        // {
        //   link: '/case-studies',
        //   label: 'Case Studies',
        // },
        {
          link: '/faq',
          label: 'FAQ',
        },
      ],
    },
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
      ],
    },
    {
      title: 'Legal',
      links: [
        {
          label: 'Terms & Conditions',
          link: '/legal/terms',
        },
        {
          label: 'Privacy Policy',
          link: `/legal/policy`,
        },
        // {
        //   label: 'Refund Policy',
        //   link: `/legal/policy-refund`,
        // },
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

const mainLinks = [
  ...links.navbar,
  ...shopLinks,
  ...trainingLinks,
  ...serviceLinks,
].map((l) => l.link);

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
