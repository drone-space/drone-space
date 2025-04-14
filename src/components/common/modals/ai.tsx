'use client';

import React, { useState } from 'react';
import { Modal } from '@mantine/core';
import { useFormClaude } from '@/hooks/form/claude';
import { useAppSelector } from '@/hooks/redux';
import { useDisclosure } from '@mantine/hooks';
import HeaderModalAI from '@/components/layout/headers/modal/ai';
import LayoutBodyAI from '@/components/layout/bodies/ai';
import FooterModalAI from '@/components/layout/footers/modal/ai';
import LayoutSection from '@/components/layout/section';
import FormClaude from '@/components/form/claude';
import { useTTS } from '@/hooks/tts';
import { useSTT } from '@/hooks/stt';

export default function AI({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [updated, setUpdated] = useState(false);
  const { form, submitted, handleSubmit, resetConversation } = useFormClaude();
  const conversation = useAppSelector((state) => state.claude.value);

  const { fetching, streamSpeech } = useTTS();
  const { listening, volumeRef, startListening, stopListening } = useSTT({
    form: form,
    handleSubmit: handleSubmit,
    streamSpeech,
  });

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
        padding={0}
        size={'lg'}
        centered
      >
        <HeaderModalAI onClose={handleClose} />

        <LayoutBodyAI
          opened={opened}
          conversation={conversation}
          form={form}
          submitted={submitted}
          handleSubmit={handleSubmit}
          updated={updated}
          setUpdated={setUpdated}
          fetchingSpeech={fetching}
          streamSpeech={streamSpeech}
        />

        <LayoutSection
          id="input"
          containerized={false}
          bordered
          bg={'var(--mantine-color-gray-1)'}
          px={'xs'}
          padded={'xs'}
        >
          <FormClaude
            props={{
              form,
              submitted,
              handleSubmit,
              fetchingSpeech: fetching,
              streamSpeech,
              startListening,
              stopListening,
              listening,
              volumeRef,
            }}
          />
        </LayoutSection>

        <FooterModalAI
          resetConversation={resetConversation}
          hasConversation={conversation.length > 0}
        />
      </Modal>

      <div onClick={open} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    </>
  );
}
