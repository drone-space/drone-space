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
    metaTitle: 'Aerial Cinematography Services',
    title: 'Aerial Cinematography',
    metaDesc:
      'Professional aerial cinematography services for films, events, commercials, and real estate. Capture cinematic, high-quality drone footage that tells your story from above.',
    linkDesc: 'Capture stunning visuals from breathtaking aerial perspectives.',
    desc: 'We offer professional aerial cinematography services to capture stunning aerial footage of any location. Our experienced drone pilots use state­of-the-art drone technology to produce high-quality aerial footage that will make your project stand out.',
  },

  {
    image: images.services.droSee,
    metaTitle: 'Agricultural Drone Services for Precision Farming',
    title: 'Agriculture',
    metaDesc:
      'Boost farm productivity with precision agriculture drone solutions. We offer crop monitoring, spraying, and aerial analysis for smarter, data-driven farming.',
    linkDesc: 'Precision farming with drone-powered seeding.',
    desc: 'From precise crop monitoring and targeted spraying to efficient data collection for informed decision­making, our drone technology optimizes resource allocation, reduces costs, and maximizes yields.',
  },

  {
    image: images.services.mappSur,
    metaTitle: 'Drone Mapping & Surveying Services',
    title: 'Drone Mapping and Survey',
    titleShort: 'Mapping and Survey',
    metaDesc:
      'Accurate drone mapping and surveying services including 3D modeling, orthomosaics, and topographic data for construction, mining, and land development projects.',
    linkDesc: 'High-precision mapping and surveying for accurate data.',
    desc: 'We specialize in creating detailed maps, 3D models, and orthomosaics that empower informed decision­making in land surveying, construction, agriculture, environmental monitoring, and more.',
  },

  {
    image: images.services.solIns,
    metaTitle: 'Thermal Drone Inspection Services',
    title: 'Thermal Inspection',
    metaDesc:
      'Advanced thermal drone inspections for detecting heat loss, electrical faults, and structural issues. Ideal for industrial, solar, and infrastructure assessments.',
    linkDesc: 'Advanced thermal inspections for performance and safety.',
    desc: 'Our thermal inspection services leverage advanced drone technology to provide detailed thermal imaging and analysis for a variety of applications. We specialize in identifying anomalies and potential issues in solar panels, landfills, dumpsites, geothermal sites, and power lines. Our high-resolution thermal data enables early detection of problems, facilitating timely maintenance and preventing costly failures.',
  },

  {
    image: images.services.sar,
    metaTitle: 'Search and Rescue Drone Services',
    title: 'Search and Rescue',
    metaDesc:
      'Rapid drone-based search and rescue support with real-time imaging and thermal detection to assist emergency response and disaster operations.',
    linkDesc: 'Rapid-response drone support for emergency operations.',
    desc: 'We are equipped to support search and rescue operations with our advanced drone technology. Our drones, equipped with thermal imaging cameras and long-range capabilities, can quickly scan vast areas, providing crucial aerial support to locate missing persons or assess disaster zones efficiently and safely.',
  },

  {
    image: images.services.medical,
    metaTitle: 'Medical Drone Delivery Services',
    title: 'Medical Delivery',
    metaDesc:
      'Fast and reliable medical drone delivery services for transporting essential supplies like blood, vaccines, and emergency equipment to remote areas.',
    linkDesc: 'Fast delivery of critical medical supplies when it matters.',
    desc: 'Drones deliver life-saving supplies like automated external defibrillators (AEDs), epinephrine injectors, and first aid kits directly to emergency scenes, ensuring rapid response during critical moments.',
  },

  {
    image: images.services.conRes,
    metaTitle: 'Drone Consultancy & Equipment Resale',
    title: 'Drone Consultancy and Resale',
    titleShort: 'Consultancy and Resale',
    metaDesc:
      'Expert drone consultancy and equipment resale services. Get guidance on drone selection, deployment, and access trusted high-performance drone systems.',
    linkDesc: 'Expert advice and access to the right drone solutions.',
    desc: 'We offer drone consultancy services to help you get the most out of your drone solutions. Our team of experts can help you with everything from drone selection and setup, to training and maintenance.',
  },

  {
    image: images.services.rocSup,
    metaTitle: 'Remote Operations Centre (ROC) Drone Support',
    title: 'ROC Support',
    metaDesc:
      'Remote Operations Centre (ROC) support for drone missions including fleet management, mission planning, live monitoring, and compliance oversight.',
    linkDesc: 'Support for obtaining and managing your ROC.',
    desc: "We are the holders of ROC 002. We support our clients' commercial operations through our ROC at affordable rates to ensure safety and legal compliance. Our ROC enables you carry out missions in a legal and compliant manner with significant cost savings on setup costs.",
  },
];

export default services;
