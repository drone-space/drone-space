'use client';

import React, { useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useFormAi } from '@/hooks/form/ai';
import HeaderModalAI from '@/components/layout/headers/modal/ai';
import LayoutBodyAI from '@/components/layout/bodies/ai';
import FooterModalAI from '@/components/layout/footers/modal/ai';
import LayoutSection from '@repo/components/layout/section';
import FormAi from '@/components/form/ai';
import { useTTS } from '@/hooks/tts';
import { useSTT } from '@/hooks/stt';
import OverlayAIVoice from '@/components/overlays/ai-voice';

export default function AI({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [updated, setUpdated] = useState(false);
  const [voiceMode, setVoiceMode] = useState(false);
  const [listening, setListening] = useState(false);
  const { form, submitted, handleSubmit, resetConversation, liveReply } =
    useFormAi();
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
      <Modal
        opened={opened}
        onClose={handleClose}
        withCloseButton={false}
        size={'lg'}
        centered
        styles={{
          root: { position: 'relative', overflow: 'hidden' },
          content: { padding: 0 },
        }}
      >
        <HeaderModalAI onClose={handleClose} />

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

        <FooterModalAI resetConversation={resetConversation} />

        <OverlayAIVoice
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
      </Modal>

      <div onClick={open} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    </>
  );
}
