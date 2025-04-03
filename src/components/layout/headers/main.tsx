import React from 'react';

import { Anchor, Flex, Group, Text } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import appData from '@/data/app';
import { IconCircleFilled } from '@tabler/icons-react';
import { images } from '@/assets/images';

export default function Main() {
  return (
    <LayoutSection
      id="layout-header-main"
      padded={'xs'}
      shadowed
      bg={'var(--mantine-color-pri-9)'}
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
            <>
              <Anchor
                key={index}
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
            </>
          ))}
        </Group>
      </Flex>
    </LayoutSection>
  );
}

const email = appData.emails.info;
const phone1 = appData.phones.main;
const phone2 = appData.phones.other;
const location = appData.locations.main.location;

const data = {
  left: [
    { label: phone1, link: `tel:${phone1}` },
    { label: phone2, link: `tel:${phone2}` },
  ],
};

export const socials = [
  {
    image: images.icons.social.twitterx,
    title: appData.socials.twitter.platform,
    link: appData.socials.twitter.link,
  },
  {
    image: images.icons.social.facebook,
    title: appData.socials.facebook.platform,
    link: appData.socials.facebook.link,
  },
  {
    image: images.icons.social.instagram,
    title: appData.socials.instagram.platform,
    link: appData.socials.instagram.link,
  },
  {
    image: images.icons.social.linkedin,
    title: appData.socials.linkedin.platform,
    link: appData.socials.linkedin.link,
  },
  {
    image: images.icons.social.whatsapp,
    title: appData.socials.whatsapp.platform,
    link: appData.socials.whatsapp.link,
  },
];
