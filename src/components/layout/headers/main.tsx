import React from 'react';

import { Anchor, Flex, Group, Text } from '@mantine/core';
import LayoutSection from '@/components/layout/section';

import { IconCircleFilled } from '@tabler/icons-react';
import { emails, locations, phones } from '@/data/app';

export default function Main() {
  return (
    <LayoutSection
      id="layout-header-main"
      padded={'xs'}
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

        <Group gap={'xs'}>
          {data.left.map((item, index) => (
            <React.Fragment key={index}>
              <Anchor
                inherit
                component={'a'}
                href={item.link}
                fz={{ base: 'xs' }}
                c={'white'}
                underline="hover"
              >
                {item.label}
              </Anchor>

              {data.left.indexOf(item) != data.left.length - 1 && (
                <IconCircleFilled size={4} />
              )}
            </React.Fragment>
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
    { label: phone1, link: `tel:${phone1}` },
    { label: phone2, link: `tel:${phone2}` },
  ],
};
