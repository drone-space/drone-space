import React from 'react';

import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
} from '@mantine/core';

import classes from './faq.module.scss';
import { isFirstItem } from '@repo/utilities/array';

export default function Faq({
  section,
}: {
  section?: 'training' | 'shop' | 'considerations';
}) {
  const selection = () => {
    switch (section) {
      case 'training':
        return faqs.training.desc;
      case 'shop':
        return faqs.shop.desc;
      case 'considerations':
        return faqs.considerations.desc;
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
    <Accordion
      multiple
      defaultValue={selection().map((i) => i.q)}
      classNames={classes}
    >
      {items}
    </Accordion>
  );
}

export const faqs = {
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
    title: 'Drone Purchases & Reselling',
    desc: [
      {
        q: 'What types of drones do you sell?',
        a: 'We offer a wide range of drones, including consumer drones for recreational use, professional-grade drones for commercial applications, and specialty drones for industries like agriculture, surveying, and cinematography.',
      },
      {
        q: 'Do you offer both consumer and professional-grade drones?',
        a: 'Yes, we cater to both markets, providing high-quality consumer drones as well as advanced professional drones designed for specialized tasks.',
      },
      {
        q: 'What brands of drones do you carry?',
        a: 'We carry top brands such as DJI, Autel Robotics, Huida, and other reputable manufacturers known for their reliability and innovation.',
      },
      {
        q: 'How do I choose the right drone for my needs?',
        a: 'Choosing the right drone depends on your purpose. For casual use, a lightweight consumer drone with basic features may suffice. For professional tasks, consider factors like camera quality, flight time, payload capacity, and compatibility with your specific industry requirements. Our team can guide you through this process.',
      },
      {
        q: 'Do your drones come with warranties? If so, how long are they valid?',
        a: 'Yes, all our drones come with manufacturer warranties, typically ranging from 6 months to 2 years, depending on the brand and model.',
      },
      {
        q: 'Can I upgrade or customize the drones you sell?',
        a: 'Yes, many of our drones support upgrades and customizations, but with limitations.',
      },
      {
        q: 'What accessories are available for the drones you offer?',
        a: 'We provide a variety of accessories, including spare batteries, propellers, carrying cases, filters, gimbals, and chargers. Specialized accessories like thermal cameras and agricultural sensors are also available for certain models.',
      },
      {
        q: 'Do you offer payment plans for drone purchases?',
        a: "No, we don't offer installment plans. Contact us for details about payment grounds and processes.",
      },
      {
        q: 'Are there any discounts for bulk purchases or corporate clients?',
        a: "Not at the moment, but we're planning to introduce discounts for bulk purchases and corporate clients soon. Let us know your requirements, and we’ll notify you once the program is available.",
      },
      {
        q: 'Do your prices include taxes and shipping fees?',
        a: 'Our prices are inclusive of taxes and shipping fees unless otherwise stated. During checkout, you’ll see a breakdown of all costs.',
      },
      {
        q: 'Do you provide technical support for the drones you sell?',
        a: 'We don’t currently offer dedicated technical support, but we’re working on establishing a support service to help with setup, operation, and troubleshooting.',
      },
      {
        q: 'What is your return or exchange policy for drones?',
        a: 'We’re in the process of finalizing a return or exchange policy, which will allow returns or exchanges within a specified period. Stay tuned for updates.',
      },
      {
        q: 'Can I purchase drone insurance through your store?',
        a: 'Not yet, but we’re working on partnering with reputable insurance providers to offer drone insurance options soon.',
      },
      {
        q: 'Do you offer training or guidance for using the drones I purchase?',
        a: 'We offer the Remote Pilot License (RPL) training course, the foundational entry-level program recognized by the Kenya Civil Aviation Authority (KCAA) for drone operation and certification.',
      },
      {
        q: 'Are your drones compliant with local aviation regulations?',
        a: 'Yes, all our drones comply with local aviation laws and safety requirements. We also stay updated on regulatory changes to ensure compliance.',
      },
      {
        q: 'Can you assist with registering my drone with the relevant authorities?',
        a: 'Yes, we can guide you through the drone registration process or handle it on your behalf, depending on your requirements.',
      },
      {
        q: 'Do you sell drones that meet requirements for commercial use?',
        a: 'Yes, we offer drones specifically designed for commercial use, meeting the necessary certifications and specifications for professional applications.',
      },
      {
        q: 'Do you offer repair services for drones purchased from your store?',
        a: 'We don’t currently provide repair services, but we plan to introduce professional repair options in the near future.',
      },
      {
        q: 'Can I buy spare parts for my drone through your shop?',
        a: 'Not yet, but we’re working on offering a wide range of spare parts, including propellers, motors, batteries, and cameras, for the brands we carry in the near future.',
      },
      {
        q: 'How often should I service my drone, and do you provide maintenance services?',
        a: 'We’re not offering maintenance services at the moment, but we’re developing plans to introduce them soon, including firmware updates, part replacements, and inspections.',
      },
    ],
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
        a: 'Only a valid ID will be required at first. 3 passport photos (1 regular sized and 2 small ones, 2cm by 2.5cm) and a copy of the medical certificate will be needed after.',
      },
      {
        q: 'What types of drones will I learn to operate during training?',
        a: "Training primarily covers multirotor drones. Fixed-wing drones aren't currently included.",
      },
      {
        q: 'What safety measures are covered in the training?',
        a: 'We emphasize drone safety, including pre-flight checks, risk assessment, emergency procedures, and compliance with safety regulations.',
      },
      {
        q: 'What certifications do I receive after completing the training?',
        a: "Upon successfully passing the Skills Test conducted by a Designated Flight Examiner (DFE) appointed by KCAA, candidates receive a Certificate of Completion from Drone Space and a Remote Pilot's License issued by KCAA.",
      },
      {
        q: 'Does holding an RPL qualify me to operate drones commercially?',
        a: 'While a Remote Pilot License (RPL) is an essential component of the RPAS Operator Certification (ROC), it alone does not authorize you to conduct legal commercial drone operations. To operate commercially, you must obtain an ROC. We can assist you with the consultation process to meet the necessary regulatory requirements.',
      },
    ],
  },
  considerations: {
    title: 'Important Considerations & Risks',
    desc: [
      {
        q: 'Warranty Voiding',
        a: 'Unauthorized hardware modifications or firmware hacking may void warranty. Use official DJI channels for software integrations.',
      },
      {
        q: 'Regulatory Compliance',
        a: 'Certain modifications (e.g., removing geofencing, boosting signal range) may violate aviation laws. Always check with your Civil Aviation Authority.',
      },
      {
        q: 'Flight Safety',
        a: 'Unapproved changes can affect stability, battery performance, and reliability, increasing the risk of malfunctions or crashes.',
      },
    ],
  },
};
