'use client';

import React from 'react';
import Error500 from '@repo/ui/partial/errors/500';
import ProviderMantine from '@repo/ui/provider/mantine';
import { mantine } from '@/data/styles';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <ProviderMantine appThemeProps={{ styleSheets: { ...mantine } }}>
          <Error500 reset={reset} />
        </ProviderMantine>
      </body>
    </html>
  );
}
