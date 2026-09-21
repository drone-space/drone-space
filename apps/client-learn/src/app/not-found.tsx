import React from 'react';
import Error404 from '@repo/ui/partial/errors/404';
import ProviderMantine from '@repo/ui/provider/mantine';
import { mantine } from '@/data/styles';

export default function NotFound() {
  return (
    <ProviderMantine appThemeProps={{ styleSheets: { ...mantine } }}>
      <Error404 />
    </ProviderMantine>
  );
}
