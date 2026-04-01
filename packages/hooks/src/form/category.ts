import { hasLength } from '@mantine/form';
import { useCategoryActions } from '../actions/category';
import { useFormBase } from '../form';
import { CategoryGet } from '@repo/types/models/category';

export const useFormCategory = (params?: {
  defaultValues?: Partial<CategoryGet>;
}) => {
  const { categoryCreate, categoryUpdate } = useCategoryActions();

  const { form, submitted, handleSubmit } = useFormBase<Partial<CategoryGet>>(
    {
      title: params?.defaultValues?.title || '',
    },
    {
      title: hasLength(
        { min: 2, max: 48 },
        'Between 2 and 48 characters required'
      ),
    },
    {
      resetOnSuccess: true,
      hideSuccessNotification: true,
      clientOnly: false,

      onSubmit: async (rawValues) => {
        if (!params?.defaultValues?.updated_at) {
          categoryCreate(rawValues);
        } else {
          categoryUpdate({
            ...params?.defaultValues,
            ...rawValues,
          } as CategoryGet);
        }
      },
    }
  );

  return {
    form,
    submitted,
    handleSubmit,
  };
};
