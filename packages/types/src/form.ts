/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

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
  type: '' as InquiryType,
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
