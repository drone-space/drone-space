import React from 'react';

import { Anchor, Flex, Group, Text } from '@mantine/core';
import LayoutSection from '@/components/layout/section';

import { IconCircleFilled, IconPhone } from '@tabler/icons-react';
import { emails, locations, phones } from '@/data/app';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Main() {
  return (
    <LayoutSection
      id="layout-header-main"
      padded={7}
      shadowed
      bg={'var(--mantine-color-pri-8)'}
      c={'var(--mantine-color-white)'}
      visibleFrom="sm"
    >
      <Flex
        direction={{ base: 'column', xs: 'row' }}
        align={'center'}
        gap={'xs'}
        justify="space-between"
        fz={{ base: 'xs' }}
        fw={500}
        c={'white'}
      >
        <Group gap={'xs'}>
          <Anchor
            inherit
            href={`mailto:${email}`}
            fz={{ base: 'xs' }}
            c={'white'}
            underline="hover"
          >
            {email}
          </Anchor>

          <IconCircleFilled size={4} />

          <Text inherit>{location}</Text>
        </Group>

        <Group gap={'md'} fw={500} fz={{ base: 'xs' }}>
          {data.left.map((item, i) => (
            <Anchor
              key={i}
              inherit
              component={'a'}
              href={item.link}
              c={'white'}
              underline="hover"
            >
              <Group gap={5}>
                <item.icon size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />

                {item.label}
              </Group>
            </Anchor>
          ))}
        </Group>
      </Flex>
    </LayoutSection>
  );
}

const email = emails.info;
const phone1 = phones.main;
const phone2 = phones.other;
const location = locations.main.location;

const data = {
  left: [
    { icon: IconPhone, label: phone1, link: `tel:${phone1}` },
    { icon: IconPhone, label: phone2, link: `tel:${phone2}` },
  ],
};
