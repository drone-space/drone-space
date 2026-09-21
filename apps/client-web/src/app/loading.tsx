import React from 'react';
import LoadingMain from '@repo/ui/partial/loading/main';
import ProviderMantine from '@repo/ui/provider/mantine';
import { mantine } from '@/data/styles';

export default function Loading() {
  return (
    <ProviderMantine appThemeProps={{ styleSheets: { ...mantine } }}>
      <LoadingMain />
    </ProviderMantine>
  );
}
