import React from 'react';

import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
} from '@mantine/core';

import classes from './faq.module.scss';
import { isFirstItem } from '@/utilities/helpers/array';

export default function Faq({ section }: { section?: 'training' | 'shop' }) {
  const selection = () => {
    switch (section) {
      case 'training':
        return faqs.training.desc;
      case 'shop':
        return faqs.shop.desc;
      default:
        return faqs.general.desc;
    }
  };

  const items = selection().map((item, index) => (
    <AccordionItem
      key={index}
      value={item.q}
      mt={isFirstItem(selection(), item) ? undefined : 'md'}
    >
      <AccordionControl>{item.q}</AccordionControl>
      <AccordionPanel fz={'sm'}>{item.a}</AccordionPanel>
    </AccordionItem>
  ));

  return (
    <Accordion defaultValue={selection()[0].q} classNames={classes}>
      {items}
    </Accordion>
  );
}

const faqs = {
  general: {
    title: 'General Inquiries',
    desc: [
      {
        q: 'What is drone training, and why is it important?',
        a: 'Drone training equips individuals with the knowledge and skills to safely operate unmanned aerial systems (UAS). It is essential for understanding regulations, proper handling, and maximizing drone capabilities.',
      },
      {
        q: 'Who can enroll in your drone training programs?',
        a: "Our programs are open to anyone over the age of 18, whether you're a beginner or a seasoned drone operator looking to expand your skills. ie. Anyone intending to fly BVLOS unmanned aircraft, RPAS crews, pilots, ground control operators and maintainers regulators, multi-agency teams, company managers, procurement officers or safety system managers, persons interested in mitigating RPAS human factors in BVLOS operations",
      },
      {
        q: 'Do I need prior experience with drones to join your program?',
        a: 'No prior experience is needed. We offer beginner courses that cover the basics and more advanced courses for experienced operators.',
      },
      {
        q: 'Is drone training mandatory to operate a drone?',
        a: "Yes, if you're using drones for commercial purposes, most countries require operators to have formal training and certifications.",
      },
      {
        q: 'What industries can benefit from drone training?',
        a: 'Our training programs are designed for industries such as agriculture, construction, media production, surveying, search and rescue, and more.',
      },
      {
        q: 'Can I specialize in a specific area, such as drone photography or mapping?',
        a: 'Yes, we offer specialized courses focusing on areas like aerial photography, mapping, inspection, and agricultural applications.',
      },
      {
        q: 'Can I buy drones from your organization after completing training?',
        a: 'Yes, we offer purchase options for a variety of drones to suit your needs. See our shop section for more details.',
      },
      {
        q: 'Do you provide job placement or networking opportunities after training?',
        a: "While we don't guarantee job placement, we connect our graduates with industry opportunities and networks.",
      },
      {
        q: 'Does holding an RPL qualify me to operate drones commercially?',
        a: 'While a Remote Pilot License (RPL) is an essential component of the RPAS Operator Certification (ROC), it alone does not authorize you to conduct legal commercial drone operations. To operate commercially, you must obtain an ROC. We can assist you with the consultation process to meet the necessary regulatory requirements.',
      },
      {
        q: 'Where am I permitted to operate my drone?',
        a: 'Drones must be operated in compliance with aviation regulations. Specifically: Maintain a minimum distance of 50 meters from roads, people, or property. Avoid flying within a 10-kilometer radius of airports or aerodromes. Operate no higher than 400 feet above ground level and ensure the drone remains within 500 meters of the operator, adhering to Visual Line of Sight (VLOS) requirements.',
      },
      {
        q: 'How can I insure my drone during flight?',
        a: 'To obtain drone insurance for in-flight operations, the following conditions must be met: The pilot must hold a valid Remote Pilot License (RPL). The drone must be registered with the Kenya Civil Aviation Authority (KCAA). All flights must be conducted under an RPAS Operator Certification (ROC).',
      },
      {
        q: 'Who issues Remote Pilot Licenses (RPLs)?',
        a: 'All Remote Pilot Licenses (RPLs) are issued by the Kenya Civil Aviation Authority (KCAA), the regulatory body responsible for aviation safety and compliance in Kenya.',
      },
      {
        q: 'Who are the KCAA-approved medical doctors for drone operators?',
        a: 'The following KCAA-approved doctors are authorized to conduct medical evaluations for drone operators: Dr. Wanjohi: Contact at 0722 833 492 or via email at wambakiwanjohi@gmail.com, Dr. Phenny: Contact at 0722 302 086 or via email at kphenny123@gmail.com',
      },
    ],
  },
  shop: {
    title: '',
    desc: [],
  },
  training: {
    title: 'Training Logistics',
    desc: [
      {
        q: 'How can I enroll in a course?',
        a: 'You can enroll by visiting our website, calling our office, or emailing us directly. Payment plans are available for most courses on our drone training section.',
      },
      {
        q: 'How long do the training courses take?',
        a: 'The average completion time for the RPL courses is just under 2 weeks depending on personal schedule.',
      },
      {
        q: 'What are the costs of your drone training programs?',
        a: 'Costs vary depending on the course type. Please contact us for a detailed price list or check our training pricing section.',
      },
      {
        q: 'Do you provide training equipment, or should I bring my own drone?',
        a: 'We provide drones and training equipment for practical sessions. The training aircraft needs to be registered with the KCAA under our training organisation in order for flight time to be logged, therefore it is not necessary to bring your own drone for training purposes.',
      },
      {
        q: 'Will I learn practical skills during the training?',
        a: 'Yes, our training includes hands-on flight sessions, equipment maintenance, mission planning, and troubleshooting.',
      },
      {
        q: 'Do you offer online or hybrid courses?',
        a: 'Yes, we provide online theoretical modules that you can complete at your own pace, followed by in-person practical sessions.',
      },
      {
        q: 'What should I bring on the first day of training?',
        a: "Bring a valid ID, and any personal equipment you'd like to use during training.",
      },
      {
        q: 'What types of drones will I learn to operate during training?',
        a: 'Training covers both multirotor and fixed-wing drones, with a focus on popular models used in industries such as photography, agriculture, surveying, and security.',
      },
      {
        q: 'What safety measures are covered in the training?',
        a: 'We emphasize drone safety, including pre-flight checks, risk assessment, emergency procedures, and compliance with safety regulations.',
      },
      {
        q: 'What certifications do I receive after completing the training?',
        a: 'Graduates will receive a certificate of completion and, where applicable, assistance in obtaining regulatory certifications required by your local aviation authority.',
      },
      {
        q: 'Does holding an RPL qualify me to operate drones commercially?',
        a: 'While a Remote Pilot License (RPL) is an essential component of the RPAS Operator Certification (ROC), it alone does not authorize you to conduct legal commercial drone operations. To operate commercially, you must obtain an ROC. We can assist you with the consultation process to meet the necessary regulatory requirements.',
      },
    ],
  },
};
