import {
  ActionIcon,
  Box,
  Center,
  Group,
  Stack,
  Tooltip,
  Transition,
} from '@mantine/core';
import React from 'react';
import IndicatorAudio from '../common/indicators/audio';
import { IconX } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import AvatarAI from '../common/avatars/ai';

export default function AIVoice({
  props,
}: {
  props: {
    listening: boolean;
    volumeRef: React.MutableRefObject<number>;
    stopListening: (input: { submit?: boolean }) => Promise<void>;
  };
}) {
  return (
    <Transition
      mounted={props.listening}
      // mounted={true}
      transition="fade"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => (
        <div style={styles}>
          <Box
            pos={'absolute'}
            top={0}
            right={0}
            bottom={0}
            left={0}
            bg={'var(--mantine-color-body)'}
          >
            <Center h={'100%'}>
              <Stack align="center" gap={SECTION_SPACING / 3}>
                <AvatarAI props={{ size: 160 }} />

                <IndicatorAudio
                  props={{
                    volumeRef: props.volumeRef,
                    size: { height: 56, width: 4 },
                  }}
                />

                <Group justify="center">
                  <Tooltip label={'End'} fz={'xs'} color="pri" withArrow>
                    <ActionIcon
                      size={ICON_WRAPPER_SIZE * 2}
                      radius={'50%'}
                      variant="light"
                      onClick={async () =>
                        await props.stopListening({ submit: true })
                      }
                    >
                      <IconX
                        size={ICON_SIZE * 1}
                        stroke={ICON_STROKE_WIDTH * 2}
                      />
                    </ActionIcon>
                  </Tooltip>
                </Group>
              </Stack>
            </Center>
          </Box>
        </div>
      )}
    </Transition>
  );
}
