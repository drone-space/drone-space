import React from 'react';

import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Anchor,
  List,
  ListItem,
  Text,
} from '@mantine/core';

import classes from './faq.module.scss';
import { isFirstItem } from '@/utilities/helpers/array';

export default function Faq({ section }: { section?: 'training' | 'shop' }) {
  const selection = () => {
    switch (section) {
      case 'training':
        return faqs.training;
      case 'shop':
        return faqs.shop;
      default:
        return faqs.general;
    }
  };

  const items = selection().map((item) => (
    <AccordionItem
      key={item.q}
      value={item.q}
      mt={isFirstItem(selection(), item) ? undefined : 'md'}
    >
      <AccordionControl>{item.q}</AccordionControl>
      <AccordionPanel>{item.a}</AccordionPanel>
    </AccordionItem>
  ));

  return (
    <Accordion defaultValue={selection()[0].q} classNames={classes}>
      {items}
    </Accordion>
  );
}

const faqs = {
  training: [
    {
      q: 'How long do courses take?',
      a: (
        <Text fz={'sm'}>
          The average completion time for the RPL courses is just under 2 weeks
          depending on personal schedule.
        </Text>
      ),
    },
    {
      q: 'Who should attend these courses?',
      a: (
        <List size="sm" pr={'md'}>
          <ListItem>
            This course is suitable for 18 years and above and requires a
            generic overview of UAS training and operations
          </ListItem>
          <ListItem>Anyone intending to fly BVLOS unmanned aircraft</ListItem>
          <ListItem>
            RPAS crews, pilots, ground control operators and maintainers
            Regulators
          </ListItem>
          <ListItem>
            Multi-agency teams, company managers, procurement officers or Safety
            System Managers
          </ListItem>
          <ListItem>
            Persons interested in mitigating RPAS human factors in BVLOS
            operations
          </ListItem>
        </List>
      ),
    },
    {
      q: 'Can I bring my own drone to train with?',
      a: (
        <Text fz={'sm'}>
          The aircraft needs to be registered with the KCAA under our training
          organisation in order for flight time to be logged, therefore it is
          not necessary to bring your own drone for training purposes.
        </Text>
      ),
    },
    {
      q: 'Why choose dronespace for BVLOS operations training?',
      a: (
        <List size="sm" pr={'md'}>
          <ListItem>
            Hands-on training and mission loading on an actual Drone Space VTOL
            Aircraft
          </ListItem>
          <ListItem>
            Drone Space Instructors have the most experience in both Manned
            aviation and BVLOS Operations
          </ListItem>
          <ListItem>
            Drone Space provides a solid foundation for those looking to
            undertake UAS BVLOS Operations
          </ListItem>
          <ListItem>
            Drone Space is practical and gives you tools to operate and get
            experience while developing a compelling safety case
          </ListItem>
        </List>
      ),
    },
  ],
  shop: [],
  general: [
    {
      q: 'Does an RPL qualify me to operate commercially?',
      a: (
        <Text fz={'sm'}>
          The RPL license forms part of the RPAS Operators Certification.
          However, an RPL alone would not qualify you to run a legal commercial
          operation. We may assist with the ROC consultation process.
        </Text>
      ),
    },
    {
      q: 'Where am I allowed to fly my drone?',
      a: (
        <List size="sm" pr={'md'}>
          <ListItem>
            The drone shall be operated no less than 50m from a road, people or
            property
          </ListItem>
          <ListItem>
            The drone shall not be flown within a 10km radius of any airport or
            aerodrome
          </ListItem>
          <ListItem>
            The drone shall not be flown higher than 400ft above ground level
            and 500 metres in distance – Visual Line of Sight (VLOS)
          </ListItem>
        </List>
      ),
    },
    {
      q: 'How can I insure my drone while it is in flight?',
      a: (
        <Text fz={'sm'}>
          Drone insurance requires the pilot to hold an RPL, the drone to be
          registered with KCAA and the flight to be conducted under an ROC.
        </Text>
      ),
    },
    {
      q: 'Who issues RPL licenses?',
      a: (
        <Text>
          All Licenses are issued by the regulator who is{' '}
          <Anchor href="https://kcaa.or.ke" target="_blank" title="KCAA">
            Kenya Civil Aviation Authority (KCAA)
          </Anchor>
          .
        </Text>
      ),
    },
    {
      q: 'Who are the KCAA aproved doctors?',
      a: (
        <List size="sm" pr={'md'}>
          <ListItem>
            Dr. Wanjohi: (0722 833 492, wambakiwanjohi@gmail.com)
          </ListItem>
          <ListItem>Dr. Phenny: (0722 302 086, kphenny123@gmail.com)</ListItem>
        </List>
      ),
    },
  ],
};
