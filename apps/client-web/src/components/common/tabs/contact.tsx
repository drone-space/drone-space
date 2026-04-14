'use client';

import React, { useState } from 'react';
import IntroSection from '@repo/components/layout/intros/section';
import {
  Anchor,
  BackgroundImage,
  Box,
  Card,
  Grid,
  GridCol,
  Group,
  Overlay,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  Title,
} from '@mantine/core';
import {
  ICON_SIZE,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import FormContact from '@repo/components/form/contact';
import NextLink from '@repo/components/common/anchor/next-link';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@repo/constants/images';
import { EMAILS, LOCATIONS, PHONES } from '@repo/constants/app';
import { socialLinks } from '@/data/links';
import IframeContact from '@repo/components/common/iframes/contact';

export type TabContact = {
  image: string;
  emails: string[];
  phones: string[];
  locations: any[];
  activeTab: string | null;
  title: string;
  desc: string;
};

export default function Contact() {
  const [activeTab, setActiveTab] =
    useState<TabContact['activeTab']>('General');

  let tabProps: TabContact = {
    image: '',
    emails: [],
    phones: [],
    locations: [],
    activeTab: activeTab,
    title: '',
    desc: '',
  };

  switch (activeTab) {
    case 'General':
      tabProps = {
        ...tabProps,
        image: images.gallery.innovation.jamuhuri.yr2020.image9,
        emails: [EMAILS.INFO || ''],
        phones: [PHONES.MAIN],
        locations: [LOCATIONS.MAIN],
        title: 'Thanks for your interest. How can we help?',
        desc: `Please let us know if you have a question about our enterprise, have an offering or proposal, want to leave a comment or would like further information.`,
      };
      break;
    case 'Training':
      tabProps = {
        ...tabProps,
        image: images.gallery.airfield.image1,
        emails: [EMAILS.TRAINING || ''],
        phones: [PHONES.MAIN],
        locations: [LOCATIONS.AIRFIELD],
        title: 'Interested in our training programs?',
        desc: `Let us know if you have questions about our courses, certification requirements, schedules, or enrollment. We're here to guide you every step of the way.`,
      };
      break;
    case 'Solutions':
      tabProps = {
        ...tabProps,
        image:
          'https://images.unsplash.com/photo-1713952152768-5f28b8093166?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        emails: [EMAILS.INFO || ''],
        phones: [PHONES.MAIN],
        locations: [LOCATIONS.MAIN],
        title: 'Looking for the right drone solution?',
        desc: `Tell us about your needs, project, or industry. Our team will help you find the best drone solutions tailored to your goals.`,
      };
      break;
    case 'Purchase':
      tabProps = {
        ...tabProps,
        image:
          'https://images.unsplash.com/photo-1633835094045-ecb27b9b1ee5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        emails: [EMAILS.INFO || ''],
        phones: [PHONES.MAIN],
        locations: [LOCATIONS.MAIN],
        title: 'Ready to purchase a drone?',
        desc: `Reach out for help choosing the right drone, pricing details, or product availability. We're here to help you make the right choice.`,
      };
      break;

    default:
      break;
  }

  return (
    <Tabs
      value={activeTab}
      onChange={setActiveTab}
      variant="pills"
      keepMounted={false}
      styles={{
        tab: { border: `2px solid var(--mantine-color-gray-4)` },
        panel: { paddingTop: 'var(--mantine-spacing-xl)' },
      }}
    >
      <TabsList>
        <TabsTab value="General">General</TabsTab>
        <TabsTab value="Training">Training</TabsTab>
        <TabsTab value="Solutions">Solutions</TabsTab>
        <TabsTab value="Purchase">Purchase</TabsTab>
      </TabsList>

      <TabsPanel value="General">
        <PartialContact props={tabProps} />
      </TabsPanel>

      <TabsPanel value="Training">
        <PartialContact props={tabProps} />
      </TabsPanel>

      <TabsPanel value="Solutions">
        <PartialContact props={tabProps} />
      </TabsPanel>

      <TabsPanel value="Purchase">
        <PartialContact props={tabProps} />
      </TabsPanel>
    </Tabs>
  );
}

function PartialContact({ props }: { props: TabContact }) {
  return (
    <div>
      <Card bg={'var(--mantine-color-gray-1)'} p={0}>
        <Grid gutter={0}>
          <GridCol span={{ base: 12, md: 6 }}>
            <Card padding={0}>
              <BackgroundImage
                src={props.image}
                c={'var(--mantine-color-white)'}
                radius="md"
                h={{ base: '100%', md: 680 }}
              >
                <Overlay backgroundOpacity={0.5} style={{ zIndex: 0 }} />

                <Box
                  style={{ zIndex: 1, position: 'relative' }}
                  p={{
                    base: 'md',
                    xs: 'xl',
                    sm: SECTION_SPACING / 3,
                    md: SECTION_SPACING / 2,
                  }}
                >
                  <IntroSection
                    props={{
                      subTitle: 'Inquire With Us',
                      title: props.title,
                      desc: props.desc,
                    }}
                    options={{
                      spacing: true,
                      alignment: 'start',
                      c: 'inherit',
                    }}
                  />

                  <Stack gap={'xl'}>
                    <Stack gap={0}>
                      <Title order={3} fz={'lg'} c={'sec.3'}>
                        Email Us
                      </Title>

                      <Stack gap={'xs'}>
                        {props.emails.map((ei) => (
                          <Anchor
                            key={ei}
                            inherit
                            href={`mailto:${ei}`}
                            underline="hover"
                            c={'inherit'}
                          >
                            {ei}
                          </Anchor>
                        ))}
                      </Stack>
                    </Stack>

                    <Stack gap={0}>
                      <Title order={3} fz={'lg'} c={'sec.3'}>
                        Call Us
                      </Title>

                      <Stack gap={'xs'}>
                        {props.phones.map((ph) => (
                          <Anchor
                            key={ph}
                            inherit
                            href={`tel:${ph}`}
                            underline="hover"
                            c={'inherit'}
                          >
                            {ph}
                          </Anchor>
                        ))}
                      </Stack>
                    </Stack>

                    <Stack gap={0}>
                      <Title order={3} fz={'lg'} c={'sec.3'}>
                        Find Us
                      </Title>

                      <Stack gap={'xs'}>
                        {props.locations.map((lo) => (
                          <Anchor
                            key={lo.PIN}
                            inherit
                            href={lo.PIN}
                            underline="hover"
                            c={'inherit'}
                            target="_blank"
                          >
                            {lo.LOCATION}
                          </Anchor>
                        ))}
                      </Stack>
                    </Stack>

                    <Stack gap={'xs'}>
                      <Title order={3} fz={'lg'} c={'sec.3'}>
                        Connect With Us
                      </Title>

                      <Group gap={5}>
                        {socialLinks.map((social, index) => (
                          <Anchor
                            key={index}
                            href={social.link}
                            target="_blank"
                          >
                            <ImageDefault
                              src={social.image}
                              alt={social.title}
                              title={social.title}
                              height={ICON_WRAPPER_SIZE + 4}
                              width={ICON_WRAPPER_SIZE + 4}
                              fit={'contain'}
                              radius={0}
                            />
                          </Anchor>
                        ))}
                      </Group>
                    </Stack>
                  </Stack>
                </Box>
              </BackgroundImage>
            </Card>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }}>
            <Card
              bg={'transparent'}
              radius={0}
              padding={0}
              p={{
                base: 'md',
                xs: 'xl',
                sm: SECTION_SPACING / 3,
                md: SECTION_SPACING / 2,
              }}
            >
              <Stack gap={'xl'}>
                <Card padding={0} bg={'transparent'}>
                  <IframeContact
                    props={{
                      src: props.locations[0].IFRAME,
                      height: { base: 240 },
                    }}
                  />
                </Card>

                <FormContact props={{ subject: props.activeTab || '' }} />
              </Stack>
            </Card>
          </GridCol>
        </Grid>
      </Card>

      <Text ta={'center'} mt={'xl'} c={'dimmed'}>
        Please consult the{' '}
        <NextLink inherit fw={500} href="/faq">
          FAQ&apos;s
        </NextLink>{' '}
        first.
      </Text>
    </div>
  );
}
