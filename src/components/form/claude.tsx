'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { Button, Group, Stack, Textarea } from '@mantine/core';
import {
  IconBrandTelegram,
  IconMicrophone,
  IconMicrophoneOff,
  IconSteam,
} from '@tabler/icons-react';
import appData from '@/data/app';
import classes from './claude.module.scss';
import { getHotkeyHandler } from '@mantine/hooks';
import { FormClaudeType } from '@/hooks/form/claude';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Claude({
  props,
}: {
  props: {
    form: FormClaudeType;
    submitted: boolean;
    handleSubmit: () => void;
    voiceMode: boolean;
    setVoiceMode: Dispatch<SetStateAction<boolean>>;
    listening: boolean;
    startListening: () => void;
    stopListening: () => void;
    transcript: string;
    resetTranscript: () => void;
  };
}) {
  return (
    <form onSubmit={props.form.onSubmit(props.handleSubmit)} noValidate>
      <Stack gap={'xs'}>
        <Textarea
          required
          placeholder={`Ask Hekima about ${appData.name.company}`}
          autosize
          minRows={2}
          maxRows={4}
          {...props.form.getInputProps('content')}
          onKeyDown={getHotkeyHandler([
            [
              'shift + Enter',
              () =>
                props.form.setFieldValue(
                  'content',
                  props.form.values.content + '\n'
                ),
            ],
            ['Enter', props.form.onSubmit(props.handleSubmit)],
          ])}
          data-autofocus={true}
          classNames={classes}
          w={'100%'}
          disabled={props.submitted}
        />

        <Group justify="end">
          <Group gap={'xs'}>
            {props.form.values.content.length > 0 && !props.listening ? (
              <Button
                size={'xs'}
                type="submit"
                loading={props.submitted}
                rightSection={
                  <IconBrandTelegram
                    size={ICON_SIZE / 1.2}
                    stroke={ICON_STROKE_WIDTH}
                  />
                }
              >
                Send
              </Button>
            ) : (
              <>
                {!(props.listening == true && props.voiceMode == false) && (
                  <Button
                    size={'xs'}
                    onClick={() => {
                      props.startListening();
                      props.setVoiceMode(true);
                    }}
                    leftSection={
                      <IconSteam
                        size={ICON_SIZE / 1.2}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    }
                  >
                    Voice Mode
                  </Button>
                )}

                {props.listening == true ? (
                  <Button
                    size={'xs'}
                    variant="light"
                    onClick={props.stopListening}
                    leftSection={
                      <IconMicrophoneOff
                        size={ICON_SIZE / 1.2}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    }
                  >
                    Stop
                  </Button>
                ) : (
                  <Button
                    size={'xs'}
                    variant="light"
                    onClick={props.startListening}
                    leftSection={
                      <IconMicrophone
                        size={ICON_SIZE / 1.2}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    }
                  >
                    Dictate
                  </Button>
                )}
              </>
            )}
          </Group>
        </Group>
      </Stack>
    </form>
  );
}

{
  /* <Tooltip label="Stop voice mode" color="pri" withArrow fz={'xs'}>
                <ActionIcon
                  size={ICON_WRAPPER_SIZE}
                  variant="light"
                  onClick={() => stopListening()}
                  radius={'xl'}
                  style={{ borderWidth: ICON_STROKE_WIDTH }}
                >
                  <IconSquareFilled
                    size={ICON_SIZE / 1.7}
                    stroke={ICON_STROKE_WIDTH}
                  />
                </ActionIcon>
              </Tooltip> */
}
