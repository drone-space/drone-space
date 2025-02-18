import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux';
import { useForm, UseFormReturnType } from '@mantine/form';
import { sendPrompt } from '@/services/api/claude';
import { showNotification } from '@/utilities/notifications';
import { updateConversation } from '@/libraries/redux/slices/claude';
import { Variant } from '@/enums/notification';
import { saveToLocalStorage } from '@/utilities/helpers/storage';
import { LOCAL_STORAGE_NAME } from '@/data/constants';

export type FormClaudeType = UseFormReturnType<
  {
    content: string;
  },
  (values: { content: string }) => {
    content: string;
  }
>;

export const useFormClaude = () => {
  const [submitted, setSubmitted] = useState(false);
  const conversation = useAppSelector((state) => state.claude.value);
  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: { content: '' },
    validate: { content: (value) => value.trim().length < 1 },
  });

  const parseValues = () => {
    return form.values.content.trim();
  };

  const handleSubmit = async (submitedValue?: any, noValidate?: boolean) => {
    if (!noValidate && !form.isValid()) return;

    try {
      setSubmitted(true);

      const result = await sendPrompt({
        content: submitedValue.content || submitedValue || parseValues(),
        conversation,
      });

      if (!result) {
        showNotification({
          variant: Variant.FAILED,
          title: 'Server Unavailable',
          desc: `There was no response from the server.`,
        });
      } else {
        const newConversation = [
          ...conversation,
          {
            role: 'user',
            content: submitedValue.content || submitedValue || parseValues(),
          },
          { role: result.role, content: result.content[0].text },
        ];

        // add latest exchange to context
        dispatch(updateConversation(newConversation));
        // add latest exchange to local storage
        saveToLocalStorage(LOCAL_STORAGE_NAME.CLAUDE, newConversation);

        form.reset();
      }
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

      await form.reset();
      await dispatch(updateConversation([]));
      await saveToLocalStorage(LOCAL_STORAGE_NAME.CLAUDE, []);
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

  return { form, submitted, handleSubmit, resetConversation };
};
