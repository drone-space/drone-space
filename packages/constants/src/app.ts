/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

export const companyName = 'Drone Space';
export const appName = 'Drone Space';
export const companyDescription =
  'Drone Space is the leading provider of drone training and drone services in Kenya and East Africa. The company offers comprehensive drone license training courses designed to educate and equip professionals with the skills and knowledge to safely and effectively operate drones commercially. The courses are designed to meet international standards and provide students with hands-on experience and practical knowledge of drone operations.';

export const phones = {
  main: '(254) 713 028-115',
  other: '(254) 750 939-105',
};

export const emails = {
  info: process.env.NEXT_PUBLIC_EMAIL_INFO,
  training: process.env.NEXT_PUBLIC_EMAIL_TRAINING,
  noreply: process.env.NEXT_PUBLIC_EMAIL_NOREPLY,
};

export const hours = {
  days: 'Mon - Fri',
  times: '8 AM - 5 PM',
};

export const locations = {
  main: {
    location: '6th Floor Prosperity House, Westlands Road, Nairobi',
    pin: 'https://maps.app.goo.gl/iSZHfscYTWESifVS6',
    iframe:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8345672141318!2d36.80919860989597!3d-1.2723689356043535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17307ceb423b%3A0x2b6f26cf176c4f6f!2sProsperity%20House%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1737159523640!5m2!1sen!2ske',
  },

  airfield: {
    location: 'Drone Space Training Airfield, Sigona',
    pin: 'https://maps.app.goo.gl/sqTsuBjzMdJP6UmQ8',
    iframe:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63822.7997001289!2d36.585638248632804!3d-1.212487699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11d71d5a3707%3A0x2873b3fea33c24da!2sDrone%20Space%20Training%20Airfeld%2C%20Sigona!5e0!3m2!1sen!2ske!4v1754644667288!5m2!1sen!2ske',
  },
};

export const socials = [
  {
    label: `X`,
    link: '#twitter',
  },
  {
    label: `Facebook`,
    link: '#facebook',
  },
  {
    label: `Instagram`,
    link: '#instagram',
  },
  {
    label: `LinkedIn`,
    link: '#linkedin',
  },
  {
    label: `WhatsApp`,
    link: '#whatsapp',
  },
];

export const aboutStats = {
  rplCertifications: 270,
  droneOperations: 100,
};
