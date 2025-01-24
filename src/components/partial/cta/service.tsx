import React from 'react';
import { Stack, Group, Text, Button, Title } from '@mantine/core';
import { IconFileDownload, IconPhoneCall } from '@tabler/icons-react';
import LayoutSection from '@/components/layout/section';
import ModalContactCallback from '@/components/common/modals/contact/callback';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import ModalDownloadProfile from '@/components/common/modals/download/profile';

export default function Service() {
  return (
    <LayoutSection
      id="cta-service"
      shadowed
      padded
      containerized={'responsive'}
      bg={
        'light-dark(var(--mantine-color-pri-light), var(--mantine-color-pri-light))'
      }
    >
      <Stack gap={'xl'} align="center">
        <Title ta={'center'} order={2}>
          Request A Callback Today
        </Title>

        <Stack gap={'sm'} align="center">
          <Text ta={'center'} w={{ md: '80%' }}>
            Find out more about our services. Get in touch with us and one of
            our representatives will get back to you within 24 hours.
          </Text>
        </Stack>

        <Group justify="center">
          <ModalDownloadProfile>
            <Button
              leftSection={
                <IconFileDownload size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
            >
              Company Profile
            </Button>
          </ModalDownloadProfile>

          <ModalContactCallback>
            <Button
              leftSection={
                <IconPhoneCall size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
              variant="light"
            >
              Request Callback
            </Button>
          </ModalContactCallback>
        </Group>
      </Stack>
    </LayoutSection>
  );
}
