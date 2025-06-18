import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux';
import { useForm, UseFormReturnType } from '@mantine/form';
import { sendPrompt } from '@/handlers/requests/claude';
import { showNotification } from '@/utilities/notifications';
import { updateConversation } from '@/libraries/redux/slices/claude';
import { Variant } from '@/enums/notification';
import { saveToLocalStorage } from '@/utilities/helpers/storage';
import { LOCAL_STORAGE_NAME } from '@/data/constants';
import { parseSSEStream } from '@/libraries/wrappers/text';

export type FormClaudeType = UseFormReturnType<
  { content: string },
  (values: { content: string }) => { content: string }
>;

export const useFormClaude = (params?: {
  defaultValues?: Partial<FormClaudeType['values']>;
}) => {
  const [submitted, setSubmitted] = useState(false);
  const conversation = useAppSelector((state) => state.claude.value);
  const dispatch = useAppDispatch();

  const [liveReply, setLiveReply] = useState('');

  const form = useForm({
    initialValues: { content: params?.defaultValues?.content || '' },
    validate: { content: (value) => value.trim().length < 1 },
  });

  const parseValues = () => form.values.content.trim();

  const handleSubmit = async (submitedValue?: any) => {
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

      const response = await sendPrompt({
        content,
        conversation,
      });

      let assistantReply = '';
      setLiveReply(''); // clear previous content

      await parseSSEStream(
        response,
        (data) => {
          const delta = data.delta?.text || '';
          assistantReply += delta;
          setLiveReply((prev) => prev + delta);
        },
        () => {
          const updatedConversation = [
            ...conversation,
            { role: 'user', content },
            { role: 'assistant', content: assistantReply },
          ];

          dispatch(updateConversation(updatedConversation));
          saveToLocalStorage(LOCAL_STORAGE_NAME.CLAUDE, updatedConversation);
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
      dispatch(updateConversation([]));
      saveToLocalStorage(LOCAL_STORAGE_NAME.CLAUDE, []);
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
