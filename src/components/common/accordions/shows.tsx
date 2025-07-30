import React from 'react';

import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  List,
  ListItem,
  Text,
} from '@mantine/core';

import classes from './shows.module.scss';
import { IconHelpCircle, IconReportMoney } from '@tabler/icons-react';

export default function Shows({
  variant,
}: {
  variant?: 'default' | 'factors';
}) {
  const data = {
    faq: {
      icon: IconHelpCircle,
      data: [
        {
          q: 'What is a Drone Light Show?',
          a: (
            <Text inherit>
              A drone light show is a coordinated display of drones equipped
              with LED lights, programmed to perform intricate and synchronized
              movements to create dynamic visual patterns and effects in the
              sky. These shows can be designed to form various shapes, images,
              animations, and colors, often synchronized with music, narration,
              or other multimedia elements to enhance the overall experience.
            </Text>
          ),
        },
        {
          q: 'How Drone Light Shows Work?',
          a: (
            <List size="sm" pr={'md'}>
              <ListItem>
                <Text component="span" inherit fw={500}>
                  Planning and Design
                </Text>
                : The show begins with detailed planning and design, where the
                desired patterns, shapes, and movements are mapped out.
                Specialized software is used to create a flight plan for each
                drone.
              </ListItem>
              <ListItem>
                <Text component="span" inherit fw={500}>
                  Programming
                </Text>
                : Each drone is programmed with specific flight paths and
                lighting sequences. This programming ensures that all drones
                move in perfect synchronization to create the desired visual
                effects.
              </ListItem>
              <ListItem>
                <Text component="span" inherit fw={500}>
                  Rehearsals
                </Text>
                : Rehearsals are conducted to fine-tune the choreography and
                ensure the show runs smoothly. Adjustments may be made based on
                rehearsal feedback.
              </ListItem>
              <ListItem>
                <Text component="span" inherit fw={500}>
                  Performance
                </Text>
                : During the actual show, the drones take off and follow their
                pre-programmed paths, creating a stunning light display in the
                sky.
              </ListItem>
              <ListItem>
                <Text component="span" inherit fw={500}>
                  Post-Show Analysis
                </Text>{' '}
                After the show, data from the drones is analyzed to assess
                performance and identify any areas for improvement.
              </ListItem>
            </List>
          ),
        },
        {
          q: 'How much does a drone light show cost?',
          a: (
            <Text inherit>
              The cost of a drone light show can vary widely depending on
              several factors, including the complexity of the show, the number
              of drones used, the duration of the performance, and any
              additional customization or special requirements.
            </Text>
          ),
        },
      ],
    },
    factors: {
      icon: IconReportMoney,
      data: [
        {
          q: 'Number of Drones',
          a: (
            <List size="sm" pr={'md'}>
              <ListItem>
                <Text component="span" inherit fw={500}>
                  Small Shows (50-99 drones)
                </Text>
                : Typically used for smaller events or private celebrations.
              </ListItem>
              <ListItem>
                <Text component="span" inherit fw={500}>
                  Medium Shows (100-299 drones) Programming
                </Text>
                : Suitable for corporate events, festivals, and public
                celebrations.
              </ListItem>
              <ListItem>
                <Text component="span" inherit fw={500}>
                  Large Shows (300 – 500 drones)
                </Text>
                : Ideal for large-scale events such as major holidays, sporting
                events, and significant public displays.
              </ListItem>
            </List>
          ),
        },
        {
          q: 'Show Complexity',
          a: (
            <List size="sm" pr={'md'}>
              <ListItem>
                <Text component="span" inherit fw={500}>
                  Simple Shows
                </Text>
                : Basic patterns and movements, shorter duration.
              </ListItem>
              <ListItem>
                <Text component="span" inherit fw={500}>
                  Intermediate Shows
                </Text>
                : More complex choreography, integration with music or other
                multimedia elements.
              </ListItem>
              <ListItem>
                <Text component="span" inherit fw={500}>
                  Advanced Shows
                </Text>
                : Highly intricate patterns, animations, extensive
                customization, and longer duration.
              </ListItem>
            </List>
          ),
        },
        {
          q: 'Customization',
          a: (
            <List size="sm" pr={'md'}>
              <ListItem>Personalized designs, logos, and messages.</ListItem>
              <ListItem>
                Synchronization with live music, narrations, or other
                multimedia.
              </ListItem>
              <ListItem>Specific themes or special effects.</ListItem>
            </List>
          ),
        },
        {
          q: 'Location and Logistics',
          a: (
            <List size="sm" pr={'md'}>
              <ListItem>
                Travel and transportation costs for the drone fleet and crew.
              </ListItem>
              <ListItem>
                Permits and regulatory compliance costs (catered for by Drone
                Space).
              </ListItem>
              <ListItem>On-site setup and rehearsal requirements.</ListItem>
            </List>
          ),
        },
      ],
    },
  };

  const selection = () => {
    switch (variant) {
      case 'factors':
        return data.factors;
      default:
        return data.faq;
    }
  };

  const items = selection()?.data.map((item, index) => (
    <AccordionItem key={index} value={item.q} mt={'md'}>
      <AccordionControl
        icon={
          variant == 'factors' ? (
            <data.factors.icon size={16} />
          ) : (
            <data.faq.icon size={16} />
          )
        }
      >
        {item.q}
      </AccordionControl>
      <AccordionPanel fz={'sm'}>{item.a}</AccordionPanel>
    </AccordionItem>
  ));

  return (
    <Accordion
      classNames={{
        control: classes.control,
        label: classes.label,
        item: classes.item,
        icon: classes.icon,
        content: classes.content,
      }}
      defaultValue={selection().data[0].q}
    >
      {items}
    </Accordion>
  );
}
