import React from 'react';

import {
  Anchor,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import NextImage from 'next/image';
import LayoutSection from '@/components/layout/section';
import classes from './main.module.scss';
import appData from '@/data/app';
import { IconCircleFilled, IconPhone } from '@tabler/icons-react';
import Link from 'next/link';
import { images } from '@/assets/images';

export default function Main() {
  return (
    <>
      <LayoutSection
        id="layout-header-main"
        padded="xs"
        shadowed
        bg={'var(--mantine-color-pri-9)'}
        c={'var(--mantine-color-white)'}
      >
        <Flex
          direction={{ base: 'column', xs: 'row' }}
          align={'center'}
          gap={'xs'}
          justify="space-between"
        >
          <Group>
            <Text inherit fz={{ base: 'xs', lg: 'sm' }} fw={500} c={'white'}>
              {location}
            </Text>
          </Group>

          <Group gap={'xs'}>
            {data.left.map((item) => (
              <>
                <Button
                  key={item.link}
                  size="xs"
                  variant="transparent"
                  color="white"
                  px={0}
                  component={'a'}
                  href={item.link}
                  leftSection={<item.icon size={16} stroke={1.5} />}
                >
                  {item.label}
                </Button>

                {data.left.indexOf(item) != data.left.length - 1 && (
                  <IconCircleFilled size={4} />
                )}
              </>
            ))}
          </Group>
        </Flex>
      </LayoutSection>

      <LayoutSection
        id="layout-header-main-tablet"
        visibleFrom="xs"
        padded="xs"
        bg={'var(--mantine-color-sec-light)'}
        shadowed
        className={classes.header}
      >
        <Grid align="center" gutter={0}>
          <GridCol span={{ base: 12, xs: 6, sm: 4 }}>
            <Anchor
              href={`mailto:${email}`}
              fz={{ base: 'xs', lg: 'sm' }}
              fw={500}
            >
              {email}
            </Anchor>
          </GridCol>
          <GridCol span={{ base: 12, sm: 4 }} visibleFrom="sm">
            <Group justify="center">
              <Anchor component={Link} href={'/'}>
                <Stack w={240}>
                  <Image
                    src={images.brand.droneSpace.logo.landscape.default}
                    alt="Drone Space"
                    component={NextImage}
                    width={6161}
                    height={1034}
                    priority
                  />
                </Stack>
              </Anchor>
            </Group>
          </GridCol>
          <GridCol span={{ base: 12, xs: 6, sm: 4 }}>
            <Group justify="end" gap={'xs'}>
              <Group gap={0}>
                {socials.map((social) => (
                  <Anchor key={social.link} href={social.link} target="_blank">
                    <Stack>
                      <Image
                        src={social.image}
                        alt={social.title}
                        title={social.title}
                        component={NextImage}
                        height={24}
                        width={24}
                        priority
                      />
                    </Stack>
                  </Anchor>
                ))}
              </Group>
            </Group>
          </GridCol>
        </Grid>
      </LayoutSection>
    </>
  );
}

const email = appData.emails.info;
const phone1 = appData.phones.main;
const phone2 = appData.phones.other;
const location = appData.locations.main.location;

const data = {
  left: [
    { icon: IconPhone, label: phone1, link: `tel:${phone1}` },
    { icon: IconPhone, label: phone2, link: `tel:${phone2}` },
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
