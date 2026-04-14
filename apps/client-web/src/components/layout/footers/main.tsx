import React from 'react';
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
  Button,
  SimpleGrid,
} from '@mantine/core';
import { images } from '@repo/constants/images';
import classes from './main.module.scss';
import {
  links,
  serviceLinks,
  shopLinks,
  socialLinks,
  trainingLinks,
} from '@/data/links';
import NextImage from 'next/image';
import LayoutSection from '@repo/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { IconCircleFilled, IconTicket } from '@tabler/icons-react';
import ImageDefault from '@repo/components/common/images/default';
import ModalConference from '@repo/components/common/modals/conference';
import NextLink from '@repo/components/common/anchor/next-link';
import { COMPANY_NAME } from '@repo/constants/app';

export default function Main() {
  return (
    <LayoutSection
      id={'partial-footer-main'}
      padded={'xl'}
      className={classes.footer}
      bg={'var(--mantine-color-pri-9)'}
      c={'var(--mantine-color-white)'}
      pt={SECTION_SPACING * 1.5}
    >
      <Flex direction={'row'} justify={{ base: 'start', sm: 'center' }}>
        <NextLink href={'/'}>
          <ImageDefault
            src={images.brand.droneSpace.logo.landscape.white}
            alt={COMPANY_NAME}
            height={{ base: 45, md: 60 }}
            width={{ base: 240, md: 320 }}
            fit="contain"
            mode="grid"
            radius={0}
          />
        </NextLink>
      </Flex>

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={SECTION_SPACING}
        my={SECTION_SPACING * 1.5}
      >
        {links.footer.map((linkSet, index) => (
          <Stack key={index} gap={'md'} align="start">
            <Title
              order={4}
              fz={{ base: 'md', md: 'lg' }}
              fw={600}
              c={'inherit'}
            >
              {linkSet.title}
            </Title>

            <List listStyleType="none" spacing={'xs'}>
              {linkSet.links.map((link, index) => (
                <ListItem key={index} className={classes.listItem}>
                  <NextLink
                    href={link.link}
                    className={classes.link}
                    fz={{ base: 'sm', xs: 'md' }}
                  >
                    {(link as any).labelShort || link.label}
                  </NextLink>
                </ListItem>
              ))}

              {linkSet.cta && <ListItem>{linkSet.cta}</ListItem>}
            </List>
          </Stack>
        ))}
      </SimpleGrid>

      <Flex
        direction={{ base: 'column', sm: 'row' }}
        align={{ base: 'start', sm: 'center' }}
        justify={{ sm: 'space-between' }}
        gap={'md'}
      >
        <Group>
          <ModalConference>
            <Button
              size={'xs'}
              color="yellow.4"
              c="var(--mantine-color-dark-6)"
              leftSection={
                <IconTicket size={ICON_SIZE - 2} stroke={ICON_STROKE_WIDTH} />
              }
            >
              AI Conference
            </Button>
          </ModalConference>

          {/* <ModalNewsletter options={{ auto: false }}>
          <Button
            size={'xs'}
            leftSection={
              <IconMail size={ICON_SIZE - 2} stroke={ICON_STROKE_WIDTH} />
            }
          >
            Newsletter
          </Button>
        </ModalNewsletter> */}
        </Group>

        {socials}
      </Flex>

      <Divider
        mb={'xl'}
        mt={'md'}
        color="var(--mantine-color-gray-5)"
        opacity={0.25}
      />

      <Stack ta={{ base: 'center', md: 'start' }}>
        <Group justify={'center'} gap={'md'} fz={'sm'} fw={500}>
          <Text component="span" inherit>
            <Text component="span" inherit c={'sec.3'}>
              {COMPANY_NAME}
            </Text>{' '}
            © {new Date().getFullYear()}, All Rights Reserved.
          </Text>
        </Group>
      </Stack>
    </LayoutSection>
  );
}

const socials = (
  <Flex gap={'xs'} justify={{ base: 'center', md: 'start' }}>
    {socialLinks.map((social, index) => (
      <Anchor key={index} href={social.link} target="_blank">
        <ImageDefault
          src={social.image}
          alt={social.title}
          title={social.title}
          height={ICON_WRAPPER_SIZE}
          width={ICON_WRAPPER_SIZE}
          fit={'contain'}
          radius={0}
        />
      </Anchor>
    ))}
  </Flex>
);
