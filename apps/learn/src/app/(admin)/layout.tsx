import React from 'react';
import { LayoutMain } from '@repo/ui';
import AppshellAdmin from '@learn/ui/layout/appshell/admin';
import { Metadata } from 'next';
import { APP_NAME, getApiUrl } from '@repo/constants';
import { Box, Stack, Text, Title } from '@mantine/core';
import { SECTION_SPACING } from '@repo/constants';
import { LayoutSection } from '@repo/ui';
import { createClientcloudbaseServer } from '@repo/cloudbase';
import { ProviderInitialize } from '@learn/ui/provider/initialize';
import { ProviderSync } from '@learn/ui/provider/sync';

export const metadata: Metadata = {
  title: {
    default: 'Dashboard',
    template: `%s - Admin - ${APP_NAME.LEARN}`,
  },
};

export default async function LayoutAdmin({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClientcloudbaseServer();
  const { data: session } = await supabase.auth.getUser();

  return (
    <LayoutMain>
      <Box hiddenFrom="md">
        <LayoutSection id={'layout-admin'} containerized>
          <Stack py={SECTION_SPACING} align="center" justify="center" ta={'center'} mih={'100vh'}>
            <Title order={1}>Coming Soon</Title>
            <Text>
              Only the desktop version is currenly available. The mobile version will be rolled out
              soon.
            </Text>
          </Stack>
        </LayoutSection>
      </Box>

      <ProviderInitialize props={{ baseUrl: await getApiUrl(), sessionUser: session.user }}>
        <ProviderSync>
          <Box visibleFrom="md">
            <AppshellAdmin>{children}</AppshellAdmin>
          </Box>
        </ProviderSync>
      </ProviderInitialize>
    </LayoutMain>
  );
}
