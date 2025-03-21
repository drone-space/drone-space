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
} from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import { images } from '@/assets/images';
import classes from './main.module.scss';
import appData from '@/data/app';
import { socials } from '../headers/main';
import NextImage from 'next/image';
import { SECTION_SPACING } from '@/data/constants';
import { IconCircleFilled } from '@tabler/icons-react';
import ImageDefault from '@/components/common/images/default';

export default function Main() {
  return (
    <LayoutSection
      id={'partial-footer-main'}
      padded={'lg'}
      className={classes.footer}
    >
      <Grid mt={SECTION_SPACING / 2} gutter={{ base: 'xl', md: 'md' }}>
        <GridCol span={{ base: 12, md: 6 }}>
          <Stack gap={'xl'}>
            <Flex align={'center'} justify={{ base: 'center', md: 'start' }}>
              <Anchor component={Link} href={'/'}>
                <ImageDefault
                  src={images.brand.droneSpace.logo.landscape.default}
                  alt={appData.name.app}
                  height={{ base: 40 }}
                  width={{ base: 200 }}
                  fit="contain"
                  mode="grid"
                />
              </Anchor>
            </Flex>

            <Text
              maw={{ md: '75%', lg: '66%' }}
              ta={{ base: 'center', md: 'start' }}
              fz={'sm'}
            >
              {appData.name.app} is approved and certified by KCAA to offer RPL
              courses in multi-rotor and fixed wing, RPL instructor rating and
              soon Beyond Visual Line of Sight (BVLOS) rating. The Academy
              provides Kenya&apos;s highest quality drone training with a simple
              yet comprehensive model for corporate clients, government
              agencies, public safety departments, and individuals.
            </Text>

            <Flex gap={'xs'} justify={{ base: 'center', md: 'start' }}>
              {socials.map((social, index) => (
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

        <GridCol span={{ base: 12, md: 6 }} visibleFrom="sm">
          <Grid>
            {linkSets.map((linkSet, index) => (
              <GridCol key={index} span={{ sm: 6 }}>
                <Flex
                  direction={'column'}
                  align={{ base: 'center', md: 'start' }}
                  gap={'xl'}
                >
                  <Title order={4} fw={'bold'}>
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
                          fz={'sm'}
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

      <Divider
        mt={SECTION_SPACING / 2}
        mb={'lg'}
        color="var(--mantine-color-default-border)"
      />

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
            © {new Date().getFullYear()} {appData.name.app}. All Rights
            Reserved.
          </Text>
        </Flex>
      </Stack>
    </LayoutSection>
  );
}

const email = {
  info: appData.emails.info,
  training: appData.emails.training,
};
const phone = {
  pri: appData.phones.main,
  sec: appData.phones.other,
};

const linkSets = [
  {
    title: 'Useful Links',
    links: [
      {
        label: 'About Drone Space',
        link: '/about',
      },
      {
        label: 'Our Drone Solutions',
        link: '/drone-solutions',
      },
      {
        label: 'Drone Training',
        link: '/drone-training',
      },
      {
        label: 'Drone Shop',
        link: '/shop',
      },
      {
        label: 'Get in Touch',
        link: '/about/contact',
      },
    ],
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
