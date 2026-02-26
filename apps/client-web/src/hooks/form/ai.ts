import { useState } from 'react';
import { useForm, UseFormReturnType } from '@mantine/form';
import { getClaudeResponse } from '@repo/handlers/requests/ai';
import { useNotification } from '@repo/hooks/notification';
import { LOCAL_STORAGE_NAME } from '@repo/constants/names';
import { useNetwork } from '@mantine/hooks';
import { saveToLocalStorage } from '@repo/utilities/storage';
import { Variant } from '@repo/types/enums';
import { parseSSEStream } from '@/libraries/wrappers/text';
import { useStoreConversation } from '@/libraries/zustand/stores/conversation';

export type FormAIType = UseFormReturnType<
  { content: string },
  (values: { content: string }) => { content: string }
>;

export const useFormAi = (params?: {
  defaultValues?: Partial<FormAIType['values']>;
}) => {
  const [submitted, setSubmitted] = useState(false);
  const { conversation, setConversation } = useStoreConversation();
  const networkStatus = useNetwork();

  const { showNotification } = useNotification();

  const [liveReply, setLiveReply] = useState('');

  const form = useForm({
    initialValues: { content: params?.defaultValues?.content || '' },
    validate: { content: (value) => value.trim().length < 1 },
  });

  const parseValues = () => form.values.content.trim();

  const handleSubmit = async (submitedValue?: any) => {
    if (!networkStatus.online) {
      showNotification({
        variant: Variant.WARNING,
        title: 'Network Error',
        desc: 'Please check your internet connection.',
      });

      return;
    }

    let content = parseValues();

    if (submitedValue) {
      content =
        typeof submitedValue === 'string'
          ? submitedValue
          : submitedValue?.content;
    }

    // Always sync the form for consistency
    form.setValues({ content });

    if (!form.isValid()) return;

    try {
      setSubmitted(true);

      const response = await getClaudeResponse({
        content,
        conversation,
      });

      let assistantReply = '';
      setLiveReply(''); // clear previous content

      await parseSSEStream(
        response,
        (data) => {
          const delta = data.content || '';
          assistantReply += delta;
          setLiveReply((prev) => prev + delta);
        },
        () => {
          const updatedConversation = [
            ...conversation,
            { role: 'user', content },
            { role: 'assistant', content: assistantReply },
          ];

          setConversation(updatedConversation);
          saveToLocalStorage(LOCAL_STORAGE_NAME.AI, updatedConversation);
          setLiveReply(''); // clear temporary once persisted
          form.reset();
        }
      );

      return assistantReply;
    } catch (error) {
      showNotification({
        variant: Variant.FAILED,
        title: 'Prompt Failed',
        desc: 'Could not generate response.',
      });

      console.error('---> hook error (send prompt):', error);
    } finally {
      setSubmitted(false);
    }
  };

  const resetConversation = async () => {
    try {
      setSubmitted(true);
      form.reset();
      setConversation([]);
      saveToLocalStorage(LOCAL_STORAGE_NAME.AI, []);
    } catch (error) {
      showNotification({
        variant: Variant.FAILED,
        title: 'Reset Failed',
        desc: 'Could not reset conversation.',
      });

      console.error('---> hook error (reset conversation):', error);
    } finally {
      setSubmitted(false);
    }
  };

  return { form, submitted, handleSubmit, resetConversation, liveReply };
};
