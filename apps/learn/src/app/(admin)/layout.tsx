import React from 'react';
import LayoutMain from '@repo/ui/layout/main';
import AppshellAdmin from '@/components/layout/appshell/admin';
import { Metadata } from 'next';
import { APP_NAME } from '@repo/constants/app';
import { Box, Stack, Text, Title } from '@mantine/core';
import { SECTION_SPACING } from '@repo/constants/sizes';
import LayoutSection from '@repo/ui/layout/section';

export const metadata: Metadata = {
  title: {
    default: 'Dashboard',
    template: `%s - Admin - ${APP_NAME.LMS}`,
  },
};

export default async function LayoutAdmin({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
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

      <Box visibleFrom="md">
        <AppshellAdmin>{children}</AppshellAdmin>
      </Box>
    </LayoutMain>
  );
}
