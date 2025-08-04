import { images } from '@/assets/images';
import {
  IconAntenna,
  IconDrone,
  IconLeaf2,
  IconMapQuestion,
  IconPlaneTilt,
  IconStar,
  IconTemperatureCelsius,
} from '@tabler/icons-react';

const courses = {
  basic: {
    title: {
      short: 'RPL',
      full: 'Remote Pilot License',
    },
    desc: 'The Remote Pilot License (RPL) course is designed for individuals who are interested in starting a career as a drone pilot or for unlicensed drone pilots who want to fly legally. This course is also suitable for individuals who are looking to add drone operation skills to their CVs.',
    overview:
      'Students will gain knowledge and an understanding of the evolving regulations and how they apply to training of Remote Pilots as well as to recreational and commercial UAS operations. They will also explore guidance on the requirements, operational and technical aspects and the risk-based processes underpinning the application and granting of authorizations for UAS operations.',
    objectives: [
      'The current and future regulatory framework and how it impacts on UAS operations.',
      'The role of the regulator (KCAA).',
      'The different types of UAS platform and what their functionality is.',
      'The fundamental principles of UAS operation (VLOS, BVLOS).',
      'The fundamental of aviation safety and the role of specific operational risk assessments.',
      'An overview of future UAS technology and their role in enhancing UAS operational safety.',
    ],
    units: [
      // {
      // 	image: images.training.fixWin,
      // 	title: {
      // 		short: "FW",
      // 		full: "Fixed-Wing",
      // 	},
      // 	price: null,
      // 	priceFeatures: null,
      // 	desc: "The Aeroplane category is commonly referred to as the Fixed-Wing Category. The course prepares a candidate to add the category of drones to their licence and opens another avenue of drone flying to the delegate/student.",
      // 	modules: null,
      // 	qualifications: ["Fixed-Wing Rating", "Drone Space course completion certificate"],
      // 	available: false,
      // },
      {
        featured: true,
        image: images.training.mulRot,
        title: {
          short: 'MR',
          full: 'Multi-Rotor',
        },
        price: {
          discount: 136000,
          full: 170000,
        },
        priceFeatures: [
          {
            item: 'Application Fee',
            duration: null,
            price: 10000,
          },
          {
            item: 'RPL Theory (with Exam)',
            duration: '5 Days',
            price: 65000,
          },
          {
            item: 'RPL Practical',
            duration: '5 Days',
            price: 75000,
          },
          {
            item: 'DFE Skills Test',
            duration: '2 Hours',
            price: 10000,
          },
          {
            item: 'Aviation Medical (Class III)',
            duration: '1 Hour',
            price: 10000,
          },
        ],
        desc: 'The Drone Space Multi-Rotor training course provides you with the fundamental knowledge & skills required to operate drones safely and legally for non-commercial flights. The course also provides delegates with an understanding of The Civil Aviation (Unmaned Aircraft Systems) Regulations 2020 associated with the operation of Unmanned Aircraft Systems (UAS).',
        modules: [
          'Air Law / CAA (UAS) Regulations 2020',
          'Operating procedures and specifications',
          'UAS general knowledge',
          'UAS theory of flight (Multi-Rotor & Fixed-Wing)',
          'Meteorology',
          'Navigation',
          'Human factors',
          // 'Flight planning',
          'Radio telephony (offered separately)',
        ],
        qualifications: [
          'Multi-Rotor Rating',
          'Drone Space course completion certificate',
        ],
      },

      {
        image: images.training.insRat,
        title: {
          short: 'IR',
          full: 'Instructor Rating',
        },
        price: {
          discount: null,
          full: 250000,
        },
        priceFeatures: [
          {
            item: 'Train The Trainer',
            duration: '1 Day',
            price: 50000,
          },
          {
            item: 'Instructor Ground School',
            duration: '2 Days',
            price: 50000,
          },
          {
            item: 'Practical Briefing',
            duration: '3 Days',
            price: 50000,
          },
          {
            item: 'Patter Training',
            duration: '3 Days',
            price: 100000,
          },
          {
            item: 'Aviation Medical (Class III)',
            duration: '1 Hour',
            price: 10000,
          },
        ],
        desc: 'The Instructor Rating course is designed for individuals who already hold an RPL and are interested in becoming certified drone instructors. This course is ideal for RPL holders who have a passion for teaching and want to share their knowledge and experience with others. By completing this course, students will learn how to effectively instruct RPL students, create course materials, and design training programs. Upon completion, students will receive an instructor rating from the Kenya Civil Aviation Authority (KCAA), which will enable them to train and certify future RPL holders.',
        modules: [
          'Human behavior',
          'The learning processes',
          'Effective communication',
          'DFE test (first attempt)',
          'The teaching processes',
          'Planning instructional activity',
          'Instructor responsibilities and professionalism',
          'Techniques of flight instruction',
          'Risk management',
          'Airman-ship',
          // 'Flight planning',
          'Preparing a student for a skill test',
          'Air law ',
          'How to prepare a briefing',
        ],
        features: [
          {
            title: 'Train The Trainer (1 Day)',
            desc: 'Train the trainer is a program used by trainers to train potential instructors or less experienced instructors about the best ways to deliver training materials to others.',
          },
          {
            title: 'RPL Instructor Ground School (2 Days)',
            desc: 'The first part of your RPL Instructor license is theoretical based on the CAA (UAS regulations) 2020, the FAA Aviation Instruction Handbook and addition practical presentation practices are incorporated.',
          },
          {
            title: 'Practical Briefing & Patter Training (7 Days)',
            desc: 'The RPL instructor practical briefing is a one-on-one which consists of preparing briefings and conducting 5hrs of briefing with an instructor. Briefing also consist of giving ground school theory subjects the supervision of an instructor.',
          },
        ],
        qualifications: [
          "Broaden your knowledge of Human Factors and their implications within the field of unmanned aircraft Instructor's operations",
          'Provide more insight into the Drone Technology',
        ],
      },

      {
        image: images.training.radTel,
        title: {
          short: 'RadTel',
          full: 'Radio Telephony',
        },
        price: {
          discount: null,
          full: 35000,
        },
        priceFeatures: [
          {
            item: 'Radio Telephony Exam',
            duration: null,
            price: 2000,
          },
          {
            item: 'English Proficiency Exam',
            duration: null,
            price: 3000,
          },
          {
            item: 'Radio Telephony License',
            duration: null,
            price: 1200,
          },
        ],
        desc: 'The Radio Telephony License course, offered in partnership with the Nairobi Flight Academy, is designed for RPL holders seeking to operate drones in controlled airspace and conduct BVLOS operations. This comprehensive training equips participants with the necessary skills in radio telephony procedures and communication protocols. Upon passing the exam administered by the KCAA, successful participants are granted a Radio Telephony Operator License valid for two years, renewable upon expiration. The Radio Telephony License course is an essential requirement for drone pilots operating in areas that require communication with air traffic control or for those planning BVLOS operations. With this license, participants gain the readiness to conduct missions in controlled airspace, ensuring safe and compliant drone operations. By partnering with the Nairobi Flight Academy, we deliver top-quality training that prepares RPL holders for the KCAA exam.',
        modules: [
          'General Phraseology',
          'Aerodrome Control',
          'Approach Control',
          'Flight Information Service',
          'Weather',
          'Communication Failure',
          'Distress and Urgency',
          'VHF Propagation',
          'Flight Scenario',
        ],
        qualifications: [
          'Develop proficiency in radio telephony procedures for drone operations in controlled airspace and BVLOS missions.',
          'Acquire comprehensive knowledge of radio phraseology, air traffic control communication, emergency procedures, and airspace regulations',
          'Successfully pass the KCAA exam and obtain a two-year Radio Telephony Operator License, enabling compliant operations in controlled airspace.',
        ],
      },
    ],
    process: [
      {
        title: 'Theory',
        desc: 'The course consists of several modules',
      },
      {
        title: 'Practicals',
        desc: 'One on One instruction with professional flight instructors with a recommendation of 5 hours of flight time.',
      },
      {
        title: 'Checkout (Skills Test)',
        desc: "Students undergo a checkout flight by a qualified designated flight examiner (DFE) where their knowledge of the rules of the air, regulations, airmanship & flight ability will be tested and evaluated in accordance with the KCAA's Manual of Implementing Standards.",
      },
      {
        title: 'RPL Certification',
        desc: 'Passing this test will qualify our students to complete an application for a Remote Pilot. License (RPL) at KCAA.',
      },
    ],
  },
  advanced: {
    title: {
      short: 'Advanced',
      full: 'Advanced Training',
    },
    desc: 'The advanced training courses are each divided into three sections i.e. theory, practical and skills test.',
    overview:
      'The courses provide you with the fundamental knowledge & skills required to operate drones safely and legally for commercial purposes. The course also provides students with an understanding of The Civil Aviation (Unmaned Aircraft Systems) Regulations 2020, associated with the operation of unmanned aircraft systems (UAS). Students gain knowledge and an understanding of the evolving regulations and how they apply to the training as well as to commercial UAS operations. students explore guidance on the requirements, operational and technical aspects and the risk-based processes underpinning the application and granting of authorizations for UAS operations.',
    objectives: [
      'The current and future regulatory framework and how it impacts on UAS operations.',
      'The role of the regulator (KCAA).',
      'The different types of UAS platform and what their functionality is.',
      'The fundamental principles of UAS operation (VLOS, BVLOS).',
      'The fundamental of aviation safety and the role of specific operational risk assessments.',
      'An overview of future UAS technology and their role in enhancing UAS operational safety.',
    ],
    units: [
      {
        advanced: true,
        image: images.training.agriSpray,
        title: {
          short: 'Agricultural Spraying',
          full: 'Agricultural Spraying',
        },
        price: {
          discount: null,
          full: 70000,
        },
        priceFeatures: null,
        desc: 'The course equips participants with the skills to operate agricultural drones safely and effectively for precision spraying.',
        modules: [
          'Introduction to agricultural drones',
          'Basics of agronomy and agrochemical application',
          'Aerial spraying science (droplet size, drift control)',
          'Drone systems, regulations (KCAA), and mission planning',
          'Drone setup, calibration, and live spraying simulations',
          'Battery, chemical handling, and drone maintenance',
          'Field troubleshooting and data collection',
        ],
        qualifications: [
          'Enable RPAS pilots to perform the multi-functional tasks required in BVLOS with an awareness and understanding based in safe operating practices',
          'Broaden your knowledge of Human Factors and their implications within the field of unmanned aircraft BVLOS operations',
          'Provide more insight into the Drone Technology and Drone components of VTOLs.',
        ],
      },

      {
        advanced: true,
        image: images.training.bvlos,
        title: {
          short: 'BVLOS',
          full: 'Beyond Visual Line of Sight',
        },
        price: {
          discount: null,
          full: 350000,
        },
        priceFeatures: null,
        desc: 'This course aims at advanced training that allows experienced remote pilots acquire the skills to operate in category c operations which is high risk or rather manned aviation approach. BVLOS training allows the delegate to gain the skill to adequately plan and execute BVLOS operations. The seven-day course which include theory classroom, briefings, mission planning on simulator, Hands on training on Drone Space Unmanned aircraft and examination will introduce the professionally licensed pilot operators to the new opportunities and regulatory requirements to be considered with this service delivery. You will be examined in a range of current systems designed for BVLOS flight. Lesson topics will range between Ground Station control to loading of mission into the drone, and from auto pilot technology to safety management.',
        modules: [
          'Air Law & Regulations (International BVLOS standards)',
          'Human Performance in long-range operations',
          'UAV Systems & VTOL tech',
          'Risk & Safety Management using SORA and SMS',
          'Meteorology (weather theory, METAR/TAF interpretation)',
          'Operational Risks & Emergency Procedures',
          'Mission planning & airspace coordination',
          'GPS navigation & waypoint programming',
          'Emergency response drills',
          'Hands-on flying with Baby Shark VTOL 260 & PW One drones',
        ],
        qualifications: [
          'Enable RPAS pilots to perform the multi-functional tasks required in BVLOS with an awareness and understanding based in safe operating practices',
          'Broaden your knowledge of Human Factors and their implications within the field of unmanned aircraft BVLOS operations',
          'Provide more insight into the Drone Technology and Drone components of VTOLs.',
        ],
      },

      {
        advanced: true,
        image: images.training.mapSur,
        title: {
          short: 'Masterclass',
          full: 'Drone Mapping and Survey',
        },
        price: {
          discount: null,
          full: 110000,
        },
        priceFeatures: [
          {
            item: 'Drone Mapping & Survey',
            duration: null,
            price: null,
          },
          {
            item: 'Photogammetry',
            duration: null,
            price: null,
          },
          {
            item: 'LiDAR',
            duration: null,
            price: null,
          },
        ],
        desc: 'The Drone Mapping and Survey course is a 5-day course designed for RPL holders who want to learn how to use drones for mapping and surveying purposes. This course is suitable for engineers, surveyors, environmental scientists, among others. It is also ideal for individuals interested in starting a drone mapping and surveying business. By completing this course, students will acquire practical skills in drone operation, surveying techniques, and data analysis. They will also learn how to process and interpret data obtained from drone surveys to generate accurate maps and 3D models.',
        modules: [
          'Mapping drones and payloads',
          'Missions, mission planning software & flight planning',
          "GCP's pre-marking & GNSS survey",
          'Aerial LiDAR mapping',
          'Mission planning with the DJI Pilot & Drone Deploy',
          'Data collection using the Zenmuse L1',
          'Data processing & analysis using the DJI TERRA, Pix 4D Mapper & Global Mapper',
          'Workflow review and project accuracy verification procedures',
          'Practical session using the DJI Matrice 300',
        ],
        qualifications: [
          'One of the key benefits of our Drone Mapping course is the opportunity to gain hands-on experience with state-of-the-art mapping software and technology.',
          'Masterclass(Drone Mapping) Rating',
          'Drone Space course completion certificate',
        ],
      },

      {
        advanced: true,
        image: images.training.thermography,
        title: {
          short: 'Thermography',
          full: 'Thermography (ITC Level I)',
        },
        price: {
          discount: null,
          full: 200000,
        },
        priceFeatures: null,
        desc: 'The Level 1 Thermography Certification course is designed for professionals who want to develop practical skills in using thermography for inspections and diagnostics. This course is suitable for individuals working in industries such as electrical, mechanical, and building inspections, as well as professionals involved in research and development. The certification is offered in collaboration with the Infrared Training Centre (ITC) and is globally recognized. By completing this course, students will learn how to use thermal imaging cameras to identify and diagnose faults in various systems, including electrical equipment, buildings, and mechanical systems. They will also gain an understanding of infrared theory, heat transfer concepts, and thermal imaging standards. Upon completion, students will receive an internationally recognized Level 1 Thermography Certification, which can enhance their career prospects and credibility in the industry.',
        modules: [
          'Introduction to thermography',
          'Heat & temperature',
          'Infrared theory basics',
          'Measurement techniques',
          'Basic heat transfer theory',
          'Camera measurement tools',
          'Camera/software familiarization',
          'ITC certification test',
        ],
        qualifications: [
          'Internationally recognized Level I Thermography Certification',
          'A two-year Radio Telephony Operator License, enabling compliant operations in controlled airspace',
          'Proficiency in radio telephony procedures for drone operations in controlled airspace and BVLOS missions',
          'Comprehensive knowledge of radio phraseology, air traffic control communication, emergency procedures, and airspace regulations',
        ],
      },
    ],
    process: [
      {
        title: 'Theory',
        desc: 'The course consists of several modules',
      },
      {
        title: 'Practicals',
        desc: 'One on One instruction with professional flight instructors with a recommendation of 5 hours of flight time.',
      },
      {
        title: 'Checkout (Skills Test)',
        desc: "Students undergo a checkout flight by a qualified designated flight examiner (DFE) where their knowledge of the rules of the air, regulations, airmanship & flight ability will be tested and evaluated in accordance with the KCAA's Manual of Implementing Standards.",
      },
      {
        title: 'Certification',
        desc: 'Passing this test will qualify our students to complete a certification.',
      },
    ],
  },
};

export default courses;

export const courseList = [
  {
    image: images.training.rpl,
    leftSection: IconDrone,
    linkDesc:
      'Earn your Remote Pilot License (RPL) to operate drones professionally.',
    title: 'Remote Pilot License (RPL)',
    desc: 'The RPL course is designed for individuals who are interested in starting a career as a drone pilot or for unlicensed drone pilots who want to fly legally. This course is also suitable for individuals who are looking to add drone operation skills to their CVs. By obtaining an RPL, you will be able to legally operate drones in Kenya and potentially pursue a career in various industries, including cinematography, agriculture, and construction, survey and mapping among others.',
  },
  {
    image: images.training.radTel,
    leftSection: IconAntenna,
    linkDesc:
      'Master Radio Telephony skills to effectively communicate with air traffic control.',
    title: 'Radio Telephony',
    desc: 'The Radio Telephony License course, offered in partnership with the Nairobi Flight Academy, is designed for Remote Pilot License (RPL) holders seeking to operate drones in controlled airspace and conduct Beyond Visual Line of Sight (BVLOS) operations. This comprehensive training equips participants with the necessary skills in radio telephony procedures and communication protocols. Upon passing the exam administered by the Kenya Civil Aviation Authority (KCAA), successful participants are granted a Radio Telephony Operator License valid for two years, renewable upon expiration.',
  },
  {
    image: images.training.insRat,
    leftSection: IconStar,
    linkDesc:
      'Become a certified instructor and empower others with drone operation knowledge.',
    title: 'Instructor Rating',
    desc: 'The Instructor Rating course is designed for individuals who already hold an RPL and are interested in becoming certified drone instructors. This course is ideal for RPL holders who have a passion for teaching and want to share their knowledge and experience with others. By completing this course, students will learn how to effectively instruct RPL students, create course materials, and design training programs. Upon completion, students will receive an instructor rating from the Kenya Civil Aviation Authority (KCAA), which will enable them to train and certify future RPL holders.',
  },
  {
    image: images.training.mapSur,
    leftSection: IconMapQuestion,
    linkDesc:
      'Hands-on training in advanced geospatial and imaging techniques.',
    title: 'Drone Mapping and Survey',
    desc: 'The Drone Mapping and Survey course is a 5-day course designed for RPL holders who want to learn how to use drones for mapping and surveying purposes. This course is suitable for engineers, surveyors, environmental scientists, among others. It is also ideal for individuals interested in starting a drone mapping and surveying business. By completing this course, students will acquire practical skills in drone operation, surveying techniques, and data analysis. They will also learn how to process and interpret data obtained from drone surveys to generate accurate maps and 3D models. ',
  },
  {
    image: images.training.thermography,
    leftSection: IconTemperatureCelsius,
    linkDesc:
      'ITC Level I training, ideal for applications in inspection, safety, and more.',
    title: 'Thermography (ITC - Level I)',
    desc: 'The Level I Thermography Certification course is designed for professionals who want to develop practical skills in using thermography for inspections and diagnostics. This course is suitable for individuals working in industries such as electrical, mechanical, and building inspections, as well as professionals involved in research and development.',
  },
  {
    image: images.training.agriSpray,
    leftSection: IconLeaf2,
    linkDesc: 'A comprehensive 8-day Agricultural Spraying Course.',
    title: 'Agricultural Spraying',
    desc: `Drone Space Kenya offers a comprehensive 8-day Agricultural Spraying Course combining 3 days of theory and 5 days of practical training. The course equips participants with the skills to operate agricultural drones safely and effectively for precision spraying.`,
  },
  {
    image: images.training.bvlos,
    leftSection: IconPlaneTilt,
    linkDesc:
      'Designed for certified Remote Pilots seeking to operate drones beyond visual range',
    title: 'Beyond Visual Line of Sight',
    desc: 'Drone Space Kenya’s Beyond Visual Line of Sight (BVLOS) Training Program is designed for certified Remote Pilots seeking to safely and effectively operate drones beyond visual range.',
  },
];
