import sample from './sample';

const companyName = 'Drone Space';
const appName = companyName;
const companyOneLiner = sample.text.sentence;
const companyDescription =
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

export const hours = {
  days: 'Mon - Fri',
  times: '9 AM - 5 PM',
};

export const locations = {
  main: {
    location: '6th Floor Prosperity House, Chiromo - Westlands',
    pin: 'https://maps.app.goo.gl/iSZHfscYTWESifVS6',
  },
};

const appData = {
  companyOneLiner,
  companyDescription,

  name: { company: companyName, app: appName },
  phones,
  emails,
  socials,
  hours,
  locations,
  year: new Date().getFullYear(),
};

export default appData;
