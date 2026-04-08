/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

export const COMPANY_NAME = 'Drone Space';
export const COMPANY_DESCRIPTION =
  'Drone Space is the leading provider of drone training and drone services in Kenya and East Africa. The company offers comprehensive drone license training courses designed to educate and equip professionals with the skills and knowledge to safely and effectively operate drones commercially. The courses are designed to meet international standards and provide students with hands-on experience and practical knowledge of drone operations.';

export const PHONES = {
  MAIN: '(254) 713 028-115',
  OTHER: '(254) 750 939-105',
};

export const EMAILS = {
  DEV: process.env.NEXT_PUBLIC_EMAIL_DEV,
  DELIVERY: process.env.NEXT_PUBLIC_EMAIL_DELIVERY,
  NEWSLETTER: process.env.NEXT_PUBLIC_EMAIL_NEWSLETTER,
  INFO: process.env.NEXT_PUBLIC_EMAIL_INFO,
  TRAINING: process.env.NEXT_PUBLIC_EMAIL_TRAINING,
  NO_REPLY: process.env.NEXT_PUBLIC_EMAIL_NOREPLY,
};

export const BUSINESS_HOURS = {
  DAYS: 'Mon - Fri',
  TIMES: '8 AM - 5 PM',
};

export const LOCATIONS = {
  MAIN: {
    LOCATION: 'Prosperity House (6th Floor), 73 Westlands Road - Nairobi, KE',
    LOCATION_SHORT: 'Prosperity House (6th Floor), Westlands Road, Nairobi',
    PIN: 'https://maps.app.goo.gl/iSZHfscYTWESifVS6',
    IFRAME:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8345672141318!2d36.80919860989597!3d-1.2723689356043535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17307ceb423b%3A0x2b6f26cf176c4f6f!2sProsperity%20House%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1737159523640!5m2!1sen!2ske',
  },

  AIRFIELD: {
    LOCATION: 'Drone Space Training Airfield, Sigona',
    PIN: 'https://maps.app.goo.gl/sqTsuBjzMdJP6UmQ8',
    IFRAME:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63822.7997001289!2d36.585638248632804!3d-1.212487699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11d71d5a3707%3A0x2873b3fea33c24da!2sDrone%20Space%20Training%20Airfeld%2C%20Sigona!5e0!3m2!1sen!2ske!4v1754644667288!5m2!1sen!2ske',
  },
};

export const SOCIALS = {
  X: {
    label: `X`,
    link: 'https://x.com/DroneSpaceKenya',
  },
  FB: {
    label: `Facebook`,
    link: 'https://www.facebook.com/DroneSpaceKenya',
  },
  IG: {
    label: `Instagram`,
    link: 'https://www.instagram.com/dronespacekenya',
  },
  LI: {
    label: `LinkedIn`,
    link: 'https://www.linkedin.com/company/drone-space-kenya-limited',
  },
  YT: {
    label: `YouTube`,
    link: 'http://www.youtube.com/@dronespacekenya',
  },
  WA: {
    label: `WhatsApp`,
    link: 'https://wa.me/254713028115',
  },
};

export const ABOUT_STATS = {
  RPL_CERTIFICATIONS: 300,
  DRONE_OPERATIONS: 100,
};

export const APP_NAME = {
  SHOP: 'Shop',
  LMS: 'LMS',
  WEB: COMPANY_NAME,
};

export const APP_DESC = {
  LMS: 'A lightweight and optimized Next.js template for building fast, SEO-friendly websites.',
  SHOP: 'A lightweight and optimized Next.js template for building fast, SEO-friendly websites.',
  WEB: COMPANY_DESCRIPTION,
};
