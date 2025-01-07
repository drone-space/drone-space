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
// import SegmentedControlTheme from '@/components/common/segmented-control/theme';
import { IconCircleFilled } from '@tabler/icons-react';
import FormNewsletter from '@/components/form/newsletter';
import ImageDefault from '@/components/common/images/default';

export default function Main() {
  return (
    <LayoutSection
      id={'partial-footer-main'}
      padded
      pb={SECTION_SPACING * 1.5}
      className={classes.footer}
    >
      <Stack gap={SECTION_SPACING}>
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

        <Grid gutter={{ base: 'xl', md: 'md' }}>
          {linkSets.map((linkSet) => (
            <GridCol key={linkSet.title} span={{ base: 6, sm: 3 }}>
              <Flex
                direction={'column'}
                align={{ base: 'center', md: 'start' }}
                gap={'xl'}
              >
                <Title order={4} fw={'bold'}>
                  {linkSet.title}
                </Title>

                <List listStyleType="none" spacing={'md'}>
                  {linkSet.links.map((link) => (
                    <ListItem key={link.link} className={classes.listItem}>
                      <Anchor
                        component={Link}
                        href={link.link}
                        title={link.label}
                        className={classes.link}
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

        <Flex
          direction={{ base: 'column', sm: 'row' }}
          align={{ base: 'center', sm: 'end' }}
          justify={{ sm: 'space-between' }}
          gap={'lg'}
        >
          <Flex
            direction={'column'}
            align={{ base: 'center', sm: 'start' }}
            gap={'lg'}
          >
            <Stack gap={'xs'}>
              <Title order={3} fz={'lg'} ta={{ base: 'center', sm: 'start' }}>
                Subscribe to our newsletter
              </Title>
              <Text c={'dimmed'} ta={{ base: 'center', sm: 'start' }}>
                The latest drone industry news, helpful tips, and exclusive
                offers monthly.
              </Text>
            </Stack>

            <FormNewsletter />
          </Flex>

          <Group gap={0} wrap="nowrap">
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
        </Flex>
      </Stack>

      <Divider
        mt={SECTION_SPACING}
        mb={SECTION_SPACING / 2}
        color="var(--mantine-color-default-border)"
      />

      <Stack gap={'lg'} fz={'sm'} ta={{ base: 'center', md: 'start' }} lh={1}>
        <Flex
          align={'center'}
          justify={{ sm: 'space-between' }}
          direction={{ base: 'column', sm: 'row' }}
          gap={'md'}
        >
          <Text component="span" inherit>
            © {new Date().getFullYear()} {appData.name.app}. All Rights
            Reserved.
          </Text>

          <Group gap={'xs'}>
            <Anchor
              component={Link}
              inherit
              href="/privacy-policy"
              className={classes.link}
            >
              Terms and Conditions
            </Anchor>

            <IconCircleFilled size={4} />

            <Anchor
              component={Link}
              inherit
              href="/terms-conditions"
              className={classes.link}
            >
              Privacy Policy
            </Anchor>
          </Group>
        </Flex>

        {/* <Flex justify={{ base: 'center', sm: 'start' }}>
          <SegmentedControlTheme />
        </Flex> */}
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
    title: 'Drone Shop',
    links: [
      {
        label: 'Camera Drones',
        link: '/shop/drones/camera',
      },
      {
        label: 'Enterprise Drones',
        link: '/shop/drones/enterprise',
      },
      {
        label: 'Agriculture Drones',
        link: '/shop/drones/agriculture',
      },
      {
        label: 'Drone Accessories',
        link: '/shop/accessories',
      },
    ],
  },
  {
    title: 'Useful Links',
    links: [
      {
        label: 'About Drone Space',
        link: '/about',
      },
      {
        label: 'Our Drone Solutions',
        link: '/services',
      },
      {
        label: 'Basic Training (RPL)',
        link: '/training/basic',
      },
      {
        label: 'Advanced Training',
        link: '/training/advanced',
      },
      {
        label: 'Drone Shop',
        link: '/shop',
      },
    ],
  },
  {
    title: 'Drone Solutions',
    links: [
      {
        label: 'Consultancy & Resale',
        link: '/services/drone-consultancy-and-resale',
      },
      {
        label: 'Mapping & Survey',
        link: '/services/drone-mapping-and-survey',
      },
      {
        label: 'Aerial Cinematography',
        link: '/services/aerial-cinematography',
      },
      {
        label: 'Solar Inspection',
        link: '/services/solar-inspection',
      },
      {
        label: 'Drone Seeding',
        link: '/services/drone-seeding',
      },
      {
        label: 'ROC Support',
        link: '/services/roc-support',
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
