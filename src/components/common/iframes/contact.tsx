import { locations } from '@/data/app';
import { AspectRatio } from '@mantine/core';
import React from 'react';

export default function Contact({ props }: { props?: { src?: string } }) {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src={props?.src || locations.main.pin}
        title={locations.main.location}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen={true}
        height={400}
      ></iframe>
    </AspectRatio>
  );
}
