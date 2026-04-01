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
import { IconMicrophone, IconMicrophoneOff, IconX } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import AvatarAI from '../common/avatars/ai';

export default function AIVoice({
  props,
}: {
  props: {
    listening: boolean;
    voiceMode: boolean;
    volumeSTT: React.MutableRefObject<number>;
    volumeTTS: React.MutableRefObject<number>;
    startListening: () => Promise<void>;
    stopListening: (input?: { submit?: boolean }) => Promise<void>;
    setVoiceMode: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) {
  const listeningProps = {
    label: props.listening ? 'Stop' : 'Start',
    icon: props.listening ? IconMicrophoneOff : IconMicrophone,
    action: props.listening
      ? async () => {
          await props.stopListening({ submit: false });
        }
      : async () => {
          await props.startListening();
        },
  };

  return (
    <Transition
      mounted={props.voiceMode}
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
            style={{ zIndex: 100 }}
          >
            <Center h={'100%'}>
              <Stack align="center" gap={SECTION_SPACING / 3}>
                <AvatarAI
                  props={{
                    size: 160,
                    volumeRef: props.volumeTTS,
                  }}
                />

                <IndicatorAudio
                  props={{
                    volumeRef: props.listening
                      ? props.volumeSTT
                      : props.volumeTTS,
                    size: { height: 56, width: 3 },
                  }}
                />

                <Group justify="center">
                  <Tooltip
                    label={listeningProps.label}
                    fz={'xs'}
                    color="pri"
                    withArrow
                  >
                    <ActionIcon
                      size={ICON_WRAPPER_SIZE * 2}
                      variant="light"
                      disabled={props.listening}
                      onClick={listeningProps.action}
                    >
                      <listeningProps.icon
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH * 1.5}
                      />
                    </ActionIcon>
                  </Tooltip>

                  <Tooltip label={'End'} fz={'xs'} color="pri" withArrow>
                    <ActionIcon
                      size={ICON_WRAPPER_SIZE * 2}
                      variant="light"
                      onClick={() => props.setVoiceMode(false)}
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
