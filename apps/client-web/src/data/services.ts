import { images } from '@repo/constants/images';
import {
  IconCertificate,
  IconDrone,
  IconHeadset,
  IconMap2,
  IconMapQuestion,
  IconMedicalCross,
  IconMessageChatbot,
  IconMovie,
  IconSeeding,
  IconSolarPanel,
  IconSos,
  IconTemperatureCelsius,
} from '@tabler/icons-react';

const services = [
  {
    image: images.services.aerCin,
    title: 'Aerial Cinematography',
    linkDesc: 'Capture stunning visuals from breathtaking aerial perspectives.',
    desc: 'We offer professional aerial cinematography services to capture stunning aerial footage of any location. Our experienced drone pilots use state­of-the-art drone technology to produce high-quality aerial footage that will make your project stand out.',
  },

  {
    image: images.services.droSee,
    title: 'Agriculture',
    linkDesc: 'Precision farming with drone-powered seeding.',
    desc: 'From precise crop monitoring and targeted spraying to efficient data collection for informed decision­making, our drone technology optimizes resource allocation, reduces costs, and maximizes yields.',
  },

  {
    image: images.services.mappSur,
    title: 'Drone Mapping and Survey',
    titleShort: 'Mapping and Survey',
    linkDesc: 'High-precision mapping and surveying for accurate data.',
    desc: 'We specialize in creating detailed maps, 3D models, and orthomosaics that empower informed decision­making in land surveying, construction, agriculture, environmental monitoring, and more.',
  },

  {
    image: images.services.solIns,
    title: 'Thermal Inspection',
    linkDesc: 'Advanced thermal inspections for performance and safety.',
    desc: 'Our thermal inspection services leverage advanced drone technology to provide detailed thermal imaging and analysis for a variety of applications. We specialize in identifying anomalies and potential issues in solar panels, landfills, dumpsites, geothermal sites, and power lines. Our high-resolution thermal data enables early detection of problems, facilitating timely maintenance and preventing costly failures.',
  },

  {
    image: images.services.sar,
    title: 'Search and Rescue',
    linkDesc: 'Rapid-response drone support for emergency operations.',
    desc: 'We are equipped to support search and rescue operations with our advanced drone technology. Our drones, equipped with thermal imaging cameras and long-range capabilities, can quickly scan vast areas, providing crucial aerial support to locate missing persons or assess disaster zones efficiently and safely.',
  },

  {
    image: images.services.medical,
    title: 'Medical Delivery',
    linkDesc: 'Fast delivery of critical medical supplies when it matters.',
    desc: 'Drones deliver life-saving supplies like automated external defibrillators (AEDs), epinephrine injectors, and first aid kits directly to emergency scenes, ensuring rapid response during critical moments.',
  },

  {
    image: images.services.conRes,
    title: 'Drone Consultancy and Resale',
    titleShort: 'Consultancy and Resale',
    linkDesc: 'Expert advice and access to the right drone solutions.',
    desc: 'We offer drone consultancy services to help you get the most out of your drone solutions. Our team of experts can help you with everything from drone selection and setup, to training and maintenance.',
  },

  {
    image: images.services.rocSup,
    title: 'ROC Support',
    linkDesc: 'Support for obtaining and managing your ROC.',
    desc: "We are the holders of ROC 002. We support our clients' commercial operations through our ROC at affordable rates to ensure safety and legal compliance. Our ROC enables you carry out missions in a legal and compliant manner with significant cost savings on setup costs.",
  },
];

export default services;
