export const companyName = 'Drone Space Kenya';
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
  times: '9 AM - 5 PM',
};

export const locations = {
  main: {
    location: '6th Floor Prosperity House, Westlands Road, Nairobi',
    pin: 'https://maps.app.goo.gl/iSZHfscYTWESifVS6',
    iframe:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8345672141318!2d36.80919860989597!3d-1.2723689356043535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17307ceb423b%3A0x2b6f26cf176c4f6f!2sProsperity%20House%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1737159523640!5m2!1sen!2ske',
  },
};

export const socials = {
  twitter: {
    platform: `${companyName} @ X`,
    link: 'https://twitter.com/DroneSpaceKenya',
  },
  facebook: {
    platform: `${companyName} @ Facebook`,
    link: 'https://www.facebook.com/profile.php?id=100079898846715&mibextid=kFxxJD',
  },
  instagram: {
    platform: `${companyName} @ Instagram`,
    link: 'https://www.instagram.com/dronespacekenya/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
  },
  linkedin: {
    platform: `${companyName} @ LinkedIn`,
    link: 'https://www.linkedin.com/company/drone-space-kenya-limited',
  },
  whatsapp: {
    platform: `${companyName} @ WhatsApp`,
    link: 'https://wa.me/254713028115',
  },
};
