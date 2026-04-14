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
      // mt={isFirstItem(selection(), item) ? undefined : 'md'}
    >
      <AccordionControl>{item.q}</AccordionControl>
      <AccordionPanel fz={'sm'}>{item.a}</AccordionPanel>
    </AccordionItem>
  ));

  return (
    <Accordion
      defaultValue={selection()[0].q}
      classNames={classes}
      variant="contained"
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
        q: 'Can I specialize in a specific area, such as drone photography or mapping?',
        a: 'Yes, we offer specialized courses focusing on areas like aerial photography, mapping, inspection, and agricultural applications.',
      },
      {
        q: 'Does holding an RPL qualify me to operate drones commercially?',
        a: 'While a Remote Pilot License (RPL) is an essential component of the RPAS Operator Certification (ROC), it alone does not authorize you to conduct legal commercial drone operations. To operate commercially, you must obtain an ROC. We can assist you with the consultation process to meet the necessary regulatory requirements.',
      },
      {
        q: 'Where am I permitted to operate my drone?',
        a: 'Drones must be operated in compliance with aviation regulations. Maintain a minimum distance of 50 meters from roads, people, or property. Avoid flying within a 10-kilometer radius of airports or aerodromes. Operate no higher than 400 feet above ground level and ensure VLOS (Visual Line of Sight) compliance.',
      },
      {
        q: 'How can I insure my drone during flight?',
        a: 'Drone insurance requires a valid RPL, drone registration with KCAA, and operations under an RPAS Operator Certification (ROC).',
      },
      {
        q: 'Who issues Remote Pilot Licenses (RPLs)?',
        a: 'All Remote Pilot Licenses are issued by the Kenya Civil Aviation Authority (KCAA).',
      },

      // NEW GENERAL FAQs
      {
        q: 'How do I book a consultation or training session?',
        a: 'You can book a consultation or training session through our website, by phone, or by emailing our support team. We will guide you through available schedules and requirements.',
      },
      {
        q: 'Do you provide support after purchase or training?',
        a: 'Yes, we provide guidance and basic support after training or purchase. Extended technical support services are being developed.',
      },
      {
        q: 'What documents do I need to start the ROC certification process?',
        a: 'You typically need a valid RPL, medical certificate, and drone registration details. We assist clients in preparing and submitting these requirements.',
      },
    ],
  },

  shop: {
    title: 'Drone Purchases & Reselling',
    desc: [
      {
        q: 'What types of drones do you sell?',
        a: 'We offer consumer drones, professional-grade drones, and specialized industrial drones for agriculture, surveying, and cinematography.',
      },
      {
        q: 'Do you offer both consumer and professional-grade drones?',
        a: 'Yes, we cater to both recreational users and commercial operators.',
      },
      {
        q: 'What brands of drones do you carry?',
        a: 'We carry brands such as DJI, Autel Robotics, Huida, and other reputable manufacturers.',
      },
      {
        q: 'How do I choose the right drone for my needs?',
        a: 'Selection depends on your purpose, camera quality needs, flight time, payload capacity, and industry use case. We provide guidance to help you choose.',
      },
      {
        q: 'Do your drones come with warranties?',
        a: 'Yes, warranties typically range from 6 months to 2 years depending on the model and manufacturer.',
      },
      {
        q: 'Can I upgrade or customize the drones you sell?',
        a: 'Yes, some drones support upgrades and limited customization depending on the model.',
      },
      {
        q: 'What accessories are available for the drones you offer?',
        a: 'We offer batteries, propellers, cases, filters, chargers, and specialized sensors like thermal or agricultural payloads.',
      },
      {
        q: 'Do you offer payment plans for drone purchases?',
        a: 'No, we currently do not offer installment plans.',
      },
      {
        q: 'Are there any discounts for bulk purchases or corporate clients?',
        a: 'Not currently, but we plan to introduce corporate and bulk purchase discounts soon.',
      },
      {
        q: 'Do your prices include taxes and shipping fees?',
        a: 'Yes, prices are inclusive unless otherwise stated.',
      },
      {
        q: 'Do you provide technical support for the drones you sell?',
        a: 'Basic guidance is available, with expanded support services under development.',
      },
      {
        q: 'What is your return or exchange policy?',
        a: 'We are currently finalizing a structured return and exchange policy.',
      },
      {
        q: 'Can I purchase drone insurance through your store?',
        a: 'Not yet, but we are working on insurance partnerships.',
      },
      {
        q: 'Do you offer training or guidance for drones you sell?',
        a: 'Yes, we offer RPL training and operational guidance.',
      },
      {
        q: 'Are your drones compliant with aviation regulations?',
        a: 'Yes, all drones comply with applicable aviation standards.',
      },
      {
        q: 'Can you assist with drone registration?',
        a: 'Yes, we can guide or assist with registration processes.',
      },
      {
        q: 'Do you sell drones for commercial use?',
        a: 'Yes, we supply drones suitable for commercial operations.',
      },
      {
        q: 'Do you offer repair services?',
        a: 'Not currently, but repair services are planned for the future.',
      },
      {
        q: 'Can I buy spare parts?',
        a: 'Not yet, but spare parts supply is in development.',
      },
      {
        q: 'How often should I service my drone?',
        a: 'We recommend regular inspections depending on usage; formal maintenance services are coming soon.',
      },
    ],
  },

  training: {
    title: 'Training Logistics',
    desc: [
      {
        q: 'What is drone training, and why is it important?',
        a: 'Drone training equips operators with knowledge of safe operations, regulations, and technical skills.',
      },
      {
        q: 'Who can enroll in your drone training programs?',
        a: 'Anyone over 18, including beginners, professionals, and industry teams.',
      },
      {
        q: 'Do I need prior experience?',
        a: 'No prior experience is required.',
      },
      {
        q: 'Is drone training mandatory?',
        a: 'Yes, for commercial operations in most jurisdictions.',
      },
      {
        q: 'What industries benefit from drone training?',
        a: 'Agriculture, construction, media, surveying, and emergency services.',
      },
      {
        q: 'How can I enroll?',
        a: 'Via website, phone, or email registration.',
      },
      {
        q: 'How long does training take?',
        a: 'RPL training typically takes under 2 weeks.',
      },
      {
        q: 'What are the costs?',
        a: 'Costs vary by course; contact us for details.',
      },
      {
        q: 'Do you provide training equipment?',
        a: 'Yes, all training equipment is provided.',
      },
      {
        q: 'Will I learn practical skills?',
        a: 'Yes, including flight operations and mission planning.',
      },
      {
        q: 'Do you offer online training?',
        a: 'Yes, we offer hybrid learning models.',
      },
      {
        q: 'What should I bring?',
        a: 'Valid ID, passport photos, and medical certificate (later stage).',
      },
      {
        q: 'What drones are used in training?',
        a: 'Primarily multirotor drones.',
      },
      {
        q: 'What safety measures are covered?',
        a: 'Risk assessment, emergency procedures, and compliance.',
      },
      {
        q: 'What certification do I receive?',
        a: 'RPL from KCAA and certificate of completion.',
      },
      {
        q: 'Can I operate commercially after RPL?',
        a: 'You also need an ROC for commercial operations.',
      },
      {
        q: 'Do you help with job placement?',
        a: 'We provide networking opportunities but not guaranteed placement.',
      },
      {
        q: 'Who are the KCAA-approved doctors?',
        a: 'We provide a list of approved medical examiners.',
      },
    ],
  },

  considerations: {
    title: 'Important Considerations & Risks',
    desc: [
      {
        q: 'Warranty Voiding',
        a: 'Unauthorized modifications may void warranty.',
      },
      {
        q: 'Regulatory Compliance',
        a: 'Modifications may violate aviation laws.',
      },
      {
        q: 'Flight Safety',
        a: 'Unapproved changes can increase crash risk.',
      },
    ],
  },

  solutions: {
    title: 'Drone Services',
    desc: [],
  },
};
