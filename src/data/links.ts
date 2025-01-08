import { linkify } from '@/utilities/formatters/string';
import services from './services';

const links = {
  navbar: {
    main: [
      {
        link: '/',
        label: 'Home',
      },
      {
        link: '/about',
        label: 'About',
      },
      {
        link: '/training',
        label: 'Drone Training',
        subLinks: [
          {
            link: '/training/junior',
            label: 'Junior Training (Holiday Camp)',
          },
          {
            link: '/training/basic',
            label: 'Basic Training (RPL)',
          },
          {
            link: '/training/advanced',
            label: 'Advanced Training',
          },
        ],
      },
      {
        link: '/services',
        label: 'Drone Solutions',
        subLinks: services.map((service) => {
          return {
            link: `/services/${linkify(service.title)}`,
            label: service.title,
          };
        }),
      },
      {
        link: '/pricing/training',
        label: 'Pricing',
        // subLinks: [
        //   {
        //     link: '/pricing/training',
        //     label: 'Training Pricing',
        //   },
        // ],
      },
      {
        link: '/shop',
        label: 'Shop',
        // subLinks: [
        //   {
        //     link: '/shop/drones/camera',
        //     label: 'Camera Drones',
        //   },
        //   {
        //     link: '/shop/drones/enterprise',
        //     label: 'Enterprise Drones',
        //   },
        //   {
        //     link: '/shop/drones/agriculture',
        //     label: 'Agriculture Drones',
        //   },
        //   {
        //     link: '/shop/accessories',
        //     label: 'Drone Accessories',
        //   },
        // ],
      },
      {
        link: '/light-shows',
        label: 'Drone Light Shows',
      },
      {
        link: '/stories',
        label: 'Stories',
        subLinks: [
          {
            link: '/stories/gallery',
            label: 'Gallery',
          },
          {
            link: '/stories/blog',
            label: 'Blog',
          },
          // {
          //   link: '/stories/portfolio',
          //   label: 'Portfolio',
          // },
          // {
          //   link: '/stories/team',
          //   label: 'Team',
          // },
        ],
      },
      {
        link: '/contact',
        label: 'Contact',
      },
      // {
      //   link: '/help',
      //   label: 'Help',
      //   subLinks: [
      //     {
      //       link: '/help/faq',
      //       label: 'FAQ',
      //     },
      //   ],
      // },
    ],

    shop: [
      {
        link: '/shop/drones/camera',
        label: 'Camera Drones',
      },
      {
        link: '/shop/drones/enterprise',
        label: 'Enterprise Drones',
      },
      {
        link: '/shop/drones/agriculture',
        label: 'Agriculture Drones',
      },
      {
        link: '/shop/accessories',
        label: 'Drone Accessories',
      },
    ],
  },
};

export default links;
