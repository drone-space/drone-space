'use client';

import React from 'react';
import Error500 from '@/components/partials/errors/500';
import ProviderMantine from '@/components/providers/mantine';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <Error500 reset={reset} />
        <ProviderMantine>
          <Error500 reset={reset} />
        </ProviderMantine>
      </body>
    </html>
  );
}
