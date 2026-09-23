'use client';

import React, { useEffect, useState } from 'react';
import { Drawer, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useFormAi } from '@repo/hooks';
import { LayoutHeaderModalAi } from '@repo/ui';
import { LayoutBodyAI } from '@repo/ui';
import { LayoutFooterModalAi } from '@repo/ui';
import { LayoutSection } from '@repo/ui';
import { FormAi } from '@repo/ui';
import { useTTS } from '@repo/hooks';
import { useSTT } from '@repo/hooks';
import { OverlayAiVoice } from '@repo/ui';

export function DrawerAi({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [updated, setUpdated] = useState(false);
  const [voiceMode, setVoiceMode] = useState(false);
  const [listening, setListening] = useState(false);
  const { form, submitted, handleSubmit, resetConversation, liveReply } = useFormAi();
  const { fetching, streamSpeech, volumeRef: volumeTTS } = useTTS();
  const {
    volumeRef: volumeSTT,
    startListening,
    stopListening,
    transcript,
    resetTranscript,
  } = useSTT({
    form: form,
    voiceMode,
    handleSubmit: handleSubmit,
    streamSpeech: voiceMode ? streamSpeech : undefined,
    listening,
    setListening,
  });

  useEffect(() => {
    const toogleVoiceMode = async () => {
      if (voiceMode == true) {
        startListening();
      } else {
        await stopListening({ submit: false });
      }
    };

    toogleVoiceMode();
  }, [voiceMode]);

  const handleClose = () => {
    setUpdated(false);
    close();
    form.reset();
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        // size={'lg'}
        position="right"
        padding={0}
      >
        <LayoutHeaderModalAi onClose={handleClose} />

        <LayoutBodyAI
          opened={opened}
          form={form}
          submitted={submitted}
          handleSubmit={handleSubmit}
          updated={updated}
          setUpdated={setUpdated}
          fetchingSpeech={fetching}
          streamSpeech={streamSpeech}
          liveReply={liveReply}
        />

        <LayoutSection
          id="input"
          containerized={false}
          bordered
          bg={'var(--mantine-color-gray-1)'}
          px={'md'}
          padded={'md'}
        >
          <FormAi
            props={{
              form,
              submitted,
              handleSubmit,
              listening,
              startListening,
              stopListening,
              voiceMode,
              setVoiceMode,
              transcript,
              resetTranscript,
            }}
          />
        </LayoutSection>

        <LayoutFooterModalAi resetConversation={resetConversation} />

        <OverlayAiVoice
          props={{
            listening,
            voiceMode,
            volumeSTT,
            startListening,
            stopListening,
            volumeTTS,
            setVoiceMode,
          }}
        />
      </Drawer>

      <div onClick={open} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    </>
  );
}
