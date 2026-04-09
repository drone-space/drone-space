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
import { Button, Group, Text } from '@mantine/core';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';

export const shopLinks = [
  {
    link: '/shop',
    label: 'All Drones',
    desc: 'Browse our full range of drones for every need.',
    // definition:
    //   'Camera drones are designed to capture high-quality photos and videos from the air. Equipped with stabilized gimbals and advanced imaging sensors, they offer unique perspectives ideal for creators, travelers, and hobbyists. Their user-friendly controls and intelligent flight modes make aerial photography more accessible than ever.',
  },

  {
    link: '/shop?category=camera&layout=grid&listSize=6#listing',
    label: 'Camera Drones',
    desc: 'Capture stunning aerial photos and videos with ease.',
    // definition:
    //   'Camera drones are designed to capture high-quality photos and videos from the air. Equipped with stabilized gimbals and advanced imaging sensors, they offer unique perspectives ideal for creators, travelers, and hobbyists. Their user-friendly controls and intelligent flight modes make aerial photography more accessible than ever.',
  },
  {
    link: '/shop?category=cinematography&layout=grid&listSize=6#listing',
    label: 'Cinematography & Filmmaking',
    labelShort: 'Cinematography',
    desc: 'Professional drones for smooth, high-quality aerial footage.',
    // definition:
    //   'Cinematography drones are high-end tools for filmmakers, production studios, and content creators. They feature large sensors, cinema-grade optics, and dynamic stabilization systems, enabling sweeping aerial shots with exceptional clarity and motion fluidity. Ideal for everything from indie films to major productions.',
  },
  {
    link: '/shop?category=enterprise&layout=grid&listSize=6#listing',
    label: 'Industrial & Enterprise Applications',
    labelShort: 'Industrial & Enterprise',
    desc: 'Advanced drones built for industrial and commercial use.',
    // definition:
    //   'Enterprise drones introduce advanced data capture capabilities, encompassing high-resolution imagery, LiDAR scanning, and thermal imaging. These capabilities empower businesses to amass detailed and actionable insights efficiently over expansive areas. Processed through specialized software, the collected data can yield precise maps, 3D models, and a range of analytics on a large scale.',
  },
  {
    link: '/shop?category=mapping&layout=grid&listSize=6#listing',
    label: 'Surveying & Mapping',
    desc: 'Precise drones for mapping, surveying, and 3D modeling.',
    // definition:
    //   'Mapping and survey drones are specialized for collecting accurate geospatial data. Using technologies like RTK GPS, photogrammetry, and LiDAR, they can efficiently cover large areas to generate topographic maps, 3D models, and contour lines. They are widely used in industries like construction, mining, and urban planning.',
  },
  {
    link: '/shop?category=agriculture&layout=grid&listSize=6#listing',
    label: 'Agriculture & Precision Farming',
    labelShort: 'Agriculture',
    desc: 'Smart drones for efficient farming and crop management.',
    // definition:
    //   'Agriculture drones are purpose-built to support modern farming. They help monitor crop health, manage irrigation, and even perform precise spraying tasks. By automating field assessments and data collection, these drones enable farmers to make timely, data-driven decisions that boost yield and reduce resource waste.',
  },
  // {
  //   link: '/shop?category=upcoming&layout=grid&listSize=6#listing',
  //   label: 'Upcoming Releases',
  //   desc: 'Be the first to explore the latest drone innovations and upcoming models hitting the skies soon.',
  //   definition:
  //     'This category features the latest drone models set to hit the market. Whether it’s groundbreaking flight technology, improved sensors, or entirely new capabilities, upcoming releases give enthusiasts and professionals early insight into the future of drone innovation.',
  // },
  // {
  //   link: '/shop/accessories',
  //   label: 'Drone Accessories',
  //   desc: 'Enhance your drone experience with high-quality accessories and add-ons.',
  // },
];

export const trainingLinks = [
  {
    link: `/drone-training`,
    label: 'Overview',
    desc: 'Explore our drone training programs and certifications.',
  },

  ...courseList
    .map((course) => {
      return {
        link: `/drone-training/${linkify(course.title)}`,
        label: course.titleShort || course.title,
        leftSection: 'empty' as any,
        desc: course.linkDesc,
      };
    })
    .filter((i) => i != null),

  {
    link: '/drone-training/pricing',
    label: 'Pricing',
    desc: 'View costs and packages for all training programs.',
  },
];

export const serviceLinks = [
  {
    link: `/drone-solutions`,
    label: 'Overview',
    desc: 'Explore our full range of drone solutions and services.',
  },

  {
    label: 'Light Shows',
    link: '/drone-solutions/light-shows',
    desc: 'Mesmerizing aerial displays that light up the sky.',
  },

  ...services.map((service) => {
    return {
      link: `/drone-solutions/${linkify(service.title)}`,
      label: service.titleShort || service.title,
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
      cta: (
        <Group justify="space-between" wrap="nowrap" align="start">
          <div>
            <Text inherit fz={'sm'}>
              Get a quick overview of our courses, pricing table, and enrollment
              requirements in our brochure.
            </Text>
          </div>

          <div>
            <Button
              variant="gradient"
              size="xs"
              leftSection={
                <IconDownload size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
              }
            >
              Get Brochure
            </Button>
          </div>
        </Group>
      ),
    },
    {
      link: '/drone-solutions',
      label: 'Solutions',
      subLinks: serviceLinks,
      // cta: (
      //   <Group justify="space-between" wrap="nowrap" align="start">
      //     <div>
      //       <Text inherit fz={'xs'}>
      //         Discover in-depth details about our mission, expertise, and
      //         accomplishments in our company profile.
      //       </Text>
      //     </div>

      //     <div>
      //       <Button
      //         variant="gradient"
      //         size="xs"
      //         leftSection={
      //           <IconDownload size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
      //         }
      //       >
      //         Get Company Profile
      //       </Button>
      //     </div>
      //   </Group>
      // ),
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
          label: 'News & Insights',
          leftSection: IconLibrary,
          desc: 'Latest stories, insights, and updates from our community.',
        },
        {
          link: '/downloads',
          label: 'Downloads',
          leftSection: IconDownload,
          desc: 'Access useful resources, files, and important documents.',
        },
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
          label: 'News & Insights',
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
        {
          label: 'Contact Us',
          link: `/contact`,
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
