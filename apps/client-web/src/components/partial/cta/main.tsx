'use client';

import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { Button, Flex, Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import classes from './main.module.scss';
import { images } from '@repo/constants/images';
import {
  IconFileDownload,
  IconPhoneCall,
  IconSchool,
} from '@tabler/icons-react';
import ModalContactCallback from '@repo/components/common/modals/contact/callback';
import ModalDownloadDocument from '@repo/components/common/modals/download/document';
import ModalContactTraining from '@repo/components/common/modals/contact/training';
import ModalContactService from '@repo/components/common/modals/contact/service';

export default function Main({
  props,
}: {
  props?: {
    title?: string;
    desc?: string;
    options?: { course?: any; service?: any; callback?: boolean };
  };
}) {
  return (
    <LayoutSection
      id={'partial-cta-newsletter'}
      c={'var(--mantine-color-body)'}
      className={classes.section}
      style={{
        backgroundImage: `url('${images.backgrounds.cta.secondary}')`,
      }}
    >
      <div className={classes.overlay}></div>

      <Grid
        py={SECTION_SPACING * 1.5}
        pos={'relative'}
        align="center"
        fz={'lg'}
        gutter={'xl'}
      >
        <GridCol span={{ base: 12, md: 7 }}>
          <Stack ta={{ base: 'center', md: 'start' }} gap={SECTION_SPACING / 2}>
            <Title order={2} c={'inherit'}>
              {props?.title || 'Empowering Drone Professionals in Kenya'}
            </Title>

            <Text inherit>
              {props?.desc ||
                "Whether you're looking to start a new career or expand your skillset, our Remote Pilot License (RPL) training program is the perfect place to begin your journey. Join us and become a licensed drone operator today!"}
            </Text>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, md: 5 }}>
          <Flex
            direction={{ base: 'column', xs: 'row', md: 'column' }}
            justify={'center'}
            gap={'md'}
            align={{ base: 'center', md: 'end' }}
          >
            {!props?.options?.service && (
              <ModalDownloadDocument props={{ type: 'brochure' }}>
                <Button
                  leftSection={
                    <IconFileDownload
                      size={ICON_SIZE + 6}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  }
                  variant="white"
                  size="xl"
                >
                  Get Brochure
                </Button>
              </ModalDownloadDocument>
            )}

            {props?.options?.service && (
              <ModalDownloadDocument props={{ type: 'profile' }}>
                <Button
                  leftSection={
                    <IconFileDownload
                      size={ICON_SIZE + 6}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  }
                  variant="white"
                  size="xl"
                >
                  Get Company Profile
                </Button>
              </ModalDownloadDocument>
            )}

            {props?.options?.callback && (
              <ModalContactCallback>
                <Button
                  leftSection={
                    <IconPhoneCall
                      size={ICON_SIZE + 6}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  }
                  variant="gradient"
                  size="xl"
                >
                  Request Callback
                </Button>
              </ModalContactCallback>
            )}

            {props?.options?.course && (
              <ModalContactTraining
                props={{
                  initialValues: {
                    subject: `${props.options.course.titleShort || props.options.course.title} Course Inquiry`,
                    message: `I'm interested in enrolling in your ${props.options.course.titleShort || props.options.course.title} drone training program.`,
                  },
                }}
              >
                <Button
                  leftSection={
                    <IconSchool
                      size={ICON_SIZE + 6}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  }
                  variant="gradient"
                  size="xl"
                >
                  Enroll for{' '}
                  {props.options.course.titleShort ||
                    props.options.course.title}
                </Button>
              </ModalContactTraining>
            )}

            {props?.options?.service && (
              <ModalContactService
                props={{
                  initialValues: {
                    subject: `${props.options.service.titleShort || props.options.service.title} Service Inquiry`,
                    message: `I am interested in your ${props.options.service.titleShort || props.options.service.title} service. Please send me a quote.`,
                  },
                }}
              >
                <Button variant="gradient" size="xl">
                  Request Quote
                </Button>
              </ModalContactService>
            )}
          </Flex>
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}
