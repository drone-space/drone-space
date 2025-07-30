'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { Button, Group, Stack, Textarea } from '@mantine/core';
import { IconBrandTelegram } from '@tabler/icons-react';
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
  // const showSendButton =
  //   props.form.values.content.length > 0 && !props.listening;
  // const showVoiceModeButton =
  //   !props.listening &&
  //   !props.voiceMode &&
  //   props.form.values.content.length === 0;
  // const showResetButton = props.listening && props.transcript.trim();
  // const showStopButton = props.listening;
  // const showDictateButton = !props.listening;

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
            {/* {showSendButton && ( */}
            <Button
              size={'xs'}
              type="submit"
              loading={props.submitted}
              disabled={props.form.values.content.length == 0}
              rightSection={
                <IconBrandTelegram
                  size={ICON_SIZE / 1.2}
                  stroke={ICON_STROKE_WIDTH}
                />
              }
            >
              Send
            </Button>
            {/* )} */}

            {/* {showVoiceModeButton && (
              <Button
                size={'xs'}
                onClick={() => props.setVoiceMode(true)}
                leftSection={
                  <IconSteam
                    size={ICON_SIZE / 1.2}
                    stroke={ICON_STROKE_WIDTH}
                  />
                }
              >
                Voice Mode
              </Button>
            )} */}

            {/* {showResetButton && (
              <Button
                size={'xs'}
                variant="light"
                onClick={props.resetTranscript}
                color="red"
                leftSection={
                  <IconRestore
                    size={ICON_SIZE / 1.2}
                    stroke={ICON_STROKE_WIDTH}
                  />
                }
              >
                Reset Transcript
              </Button>
            )} */}

            {/* {showStopButton && (
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
            )} */}

            {/* {showDictateButton && (
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
            )} */}
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
