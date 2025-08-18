import { locations } from '@/data/app';
import { Box } from '@mantine/core';
import React from 'react';

export default function Contact({
  props,
}: {
  props?: { src?: string; height?: any };
}) {
  return (
    <Box
      component="iframe"
      src={props?.src || locations.main.pin}
      title={locations.main.location}
      style={{ border: 0, margin: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen={true}
      w={'100%'}
      h={props?.height || 400}
    ></Box>
  );
}
