import { UseFormReturnType } from '@mantine/form';

export type InquiryType = 'training' | 'service' | 'shop' | 'general';

/**
 * Inquiry
 */
export const formValuesInitialInquiry = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  company: '',
  kit: '',
  subject: '',
  message: '',
  APP_NAME: '',
  type: '' as InquiryType,
  appName: '',
};

export type FormValuesInquiry = typeof formValuesInitialInquiry;

export type FormInquiry = UseFormReturnType<
  FormValuesInquiry,
  (values: FormValuesInquiry) => FormValuesInquiry
>;

/**
 * Blog
 */
export const formValuesInitialComRep = {
  name: '',
  email: '',
  content: '',
};

export type FormValuesComRep = typeof formValuesInitialComRep;

export type FormComRep = UseFormReturnType<
  FormValuesComRep,
  (values: FormValuesComRep) => FormValuesComRep
>;
