import React from 'react';
import Link from 'next/link';
import {
  Flex,
  Grid,
  Text,
  Title,
  List,
  Anchor,
  Divider,
  Group,
  GridCol,
  ListItem,
  Stack,
  Image,
  Button,
} from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import { images } from '@/assets/images';
import classes from './main.module.scss';
import { serviceLinks, socialLinks, trainingLinks } from '@/data/links';
import NextImage from 'next/image';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@/data/constants';
import { IconCircleFilled, IconMail, IconTicket } from '@tabler/icons-react';
import ImageDefault from '@/components/common/images/default';
import { appName, emails, phones } from '@/data/app';
import ModalNewsletter from '@/components/common/modals/newsletter';
import ModalConference from '@/components/common/modals/conference';

export default function Main() {
  return (
    <LayoutSection
      id={'partial-footer-main'}
      padded={'xl'}
      className={classes.footer}
    >
      <Grid mt={SECTION_SPACING / 2} gutter={{ base: 'xl', md: 0 }}>
        <GridCol span={{ base: 12, md: 4.5 }}>
          <Stack gap={'xl'}>
            <Flex align={'center'} justify={{ base: 'center', md: 'start' }}>
              <Anchor component={Link} href={'/'}>
                <ImageDefault
                  src={images.brand.droneSpace.logo.landscape.default}
                  alt={appName}
                  height={{ base: 40 }}
                  width={{ base: 200 }}
                  fit="contain"
                  mode="grid"
                />
              </Anchor>
            </Flex>

            <Text
              maw={{ md: '90%', lg: '80%' }}
              ta={{ base: 'center', md: 'start' }}
              fz={'sm'}
            >
              {appName} is approved and certified by KCAA to offer RPL courses
              in multi-rotor and fixed wing, RPL instructor rating and soon
              Beyond Visual Line of Sight (BVLOS) rating. The Academy provides
              Kenya&apos;s highest quality drone training with a simple yet
              comprehensive model for corporate clients, government agencies,
              public safety departments, and individuals.
            </Text>

            <Flex gap={'xs'} justify={{ base: 'center', md: 'start' }}>
              {socialLinks.map((social, index) => (
                <Anchor key={index} href={social.link} target="_blank">
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
            </Flex>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, md: 7.5 }} visibleFrom="sm">
          <Grid gutter={{ md: 'md', lg: 0 }}>
            {linkSets.map((linkSet, index) => (
              <GridCol key={index} span={{ sm: 4 }}>
                <Flex
                  direction={'column'}
                  align={{ base: 'center', md: 'start' }}
                  gap={'xl'}
                >
                  <Title order={4} fz={'md'} fw={700}>
                    {linkSet.title}
                  </Title>

                  <List listStyleType="none" spacing={'sm'}>
                    {linkSet.links.map((link, index) => (
                      <ListItem key={index} className={classes.listItem}>
                        <Anchor
                          component={Link}
                          href={link.link}
                          title={link.label}
                          className={classes.link}
                          fz={{ base: 'sm', md: 'xs', lg: 'sm' }}
                        >
                          {link.label}
                        </Anchor>
                      </ListItem>
                    ))}
                  </List>
                </Flex>
              </GridCol>
            ))}
          </Grid>
        </GridCol>
      </Grid>

      <Flex
        align={'center'}
        gap={'xs'}
        justify={{ base: 'center', md: 'start' }}
        mt={SECTION_SPACING / 2}
        mb={'xl'}
      >
        <ModalNewsletter options={{ auto: false }}>
          <Button
            size={'xs'}
            leftSection={
              <IconMail size={ICON_SIZE - 2} stroke={ICON_STROKE_WIDTH} />
            }
          >
            Newsletter
          </Button>
        </ModalNewsletter>

        <ModalConference>
          <Button
            size={'xs'}
            color="sec.3"
            leftSection={
              <IconTicket size={ICON_SIZE - 2} stroke={ICON_STROKE_WIDTH} />
            }
          >
            AI Conference
          </Button>
        </ModalConference>
      </Flex>

      <Divider mb={'xl'} color="var(--mantine-color-default-border)" />

      <Stack fz={'sm'} ta={{ base: 'center', md: 'start' }} lh={1}>
        <Flex
          align={'center'}
          justify={{ sm: 'space-between' }}
          direction={{ base: 'column', sm: 'row' }}
          gap={'md'}
        >
          <Group gap={'xs'} fz={'xs'}>
            <Anchor
              component={Link}
              inherit
              href="/legal/terms"
              className={classes.link}
            >
              Terms and Conditions
            </Anchor>

            <IconCircleFilled size={4} />

            <Anchor
              component={Link}
              inherit
              href="/legal/policy"
              className={classes.link}
            >
              Privacy Policy
            </Anchor>
          </Group>

          <Text component="span" inherit>
            {appName} © {new Date().getFullYear()}, All Rights Reserved.
          </Text>
        </Flex>
      </Stack>
    </LayoutSection>
  );
}

const email = {
  info: emails.info,
  training: emails.training,
};
const phone = {
  pri: phones.main,
  sec: phones.other,
};

const linkSets = [
  {
    title: 'Drone Courses',
    links: trainingLinks,
  },
  {
    title: 'Drone Solutions',
    links: serviceLinks,
  },
  {
    title: 'Contact',
    links: [
      {
        label: 'Prosperity House, Westlands',
        link: 'https://www.google.com/maps/place/Prosperity+House,+Nairobi/@-1.2723743,36.8091986,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17307ceb423b:0x2b6f26cf176c4f6f!8m2!3d-1.2723743!4d36.8117789!16s%2Fg%2F12hlt4d1k?entry=ttu',
      },
      {
        label: email.training,
        link: `mailto:${email.training}`,
      },
      {
        label: email.info,
        link: `mailto:${email.info}`,
      },
      {
        label: phone.pri,
        link: `tel:${phone.pri}`,
      },
      {
        label: phone.sec,
        link: `tel:${phone.sec}`,
      },
    ],
  },
];
