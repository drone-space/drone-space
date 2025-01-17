import React from 'react';
import {
  Stack,
  Group,
  Text,
  ThemeIcon,
  Button,
  Flex,
  Title,
} from '@mantine/core';
import { IconCheck, IconExternalLink, IconSchool } from '@tabler/icons-react';
import LayoutSection from '@/components/layout/section';
import ModalContactTraining from '@/components/common/modals/contact/training';
import documents from '@/assets/documents';
import courses from '@/data/courses';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export default function Training({
  data,
}: {
  data: { type: 'junior' | 'basic' | 'advanced' };
}) {
  let title;
  let process;

  switch (data.type) {
    case 'junior':
      title = 'Junior Holiday Camp';
      process = null;
      break;
    case 'basic':
      title = courses.basic.title.short;
      process = courses.basic.process;
      break;
    case 'advanced':
      title = courses.advanced.title.short;
      process = courses.advanced.process;
      break;
    default:
      break;
  }

  return (
    <LayoutSection
      id="cta-training"
      shadowed
      padded
      containerized={'responsive'}
      bg={
        'light-dark(var(--mantine-color-pri-light), var(--mantine-color-pri-light))'
      }
    >
      <Stack gap={'xl'} align="center">
        <Title ta={'center'} order={2}>
          Enroll for {title} Training Today
        </Title>

        <Stack gap={'sm'} align="center">
          <Text ta={'center'} w={{ md: '80%' }}>
            Gain knowledge and an understanding of the evolving regulations and
            how they apply to training of Remote Pilots as well as add drone
            operation skills to your CV.
          </Text>

          {process && (
            <Flex
              direction={{ base: 'column', sm: 'row' }}
              align={'center'}
              gap={{ base: 'xs', md: 'lg' }}
            >
              {process.map((item) => (
                <Group gap={'xs'} key={item.title} fw={500}>
                  <ThemeIcon
                    size={ICON_WRAPPER_SIZE / 1.5}
                    color="green.6"
                    c={'white'}
                    radius={'xl'}
                  >
                    <IconCheck
                      size={ICON_SIZE / 1.5}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  </ThemeIcon>

                  <span>{item.title}</span>
                </Group>
              ))}
            </Flex>
          )}
        </Stack>

        <Group justify="center">
          <Button
            component="a"
            href={documents.droneSpace.brochure}
            target="_blank"
            leftSection={
              <IconExternalLink size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            }
          >
            Get the Brochure
          </Button>
          <ModalContactTraining>
            <Button
              leftSection={
                <IconSchool size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
              variant="light"
            >
              Join the next Class
            </Button>
          </ModalContactTraining>
        </Group>
      </Stack>
    </LayoutSection>
  );
}
