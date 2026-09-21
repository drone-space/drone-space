import React from 'react';
import { LOCATIONS } from '@repo/constants/app';
import { Box } from '@mantine/core';

export default function Contact({
  props,
}: {
  props?: { src?: string; height?: any };
}) {
  return (
    <Box
      component="iframe"
      src={props?.src || LOCATIONS.MAIN.LOCATION}
      title={LOCATIONS.MAIN.LOCATION}
      style={{ border: 0, margin: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen={true}
      w={'100%'}
      h={props?.height || 400}
    ></Box>
  );
}
