'use client';

import { Flex, Stack, Title, Text, Group, Button, Container } from '@mantine/core';
import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants';
import { WrapperActionSignOut } from '@repo/ui';
import { getUrlParam } from '@repo/utils';
import { config } from '@repo/store';
import { AUTH_URLS } from '@repo/constants';
import { useRouter } from 'next/navigation';

type NotifySectionProps = {
  id: string;
  title: string;
  message?: string;
  subtitle?: string;
  actions?: ReactNode;
  padded?: boolean;
  containerized?: boolean;
  margined?: boolean;
  titleBold?: boolean;
  baseUrl?: string;
};

export const PartialPageNotifyError = ({ props }: { props?: { baseUrl?: string } }) => {
  const [error, setError] = useState<undefined | null | string>(undefined);
  const [message, setMessage] = useState<undefined | null | string>(undefined);

  useEffect(() => {
    const paramError = getUrlParam('error');
    setError((paramError as string) ?? null);
    const paramErrorMessage = getUrlParam('message');
    setMessage((paramErrorMessage as string) ?? null);
  }, []);

  return (
    <PartialPageNotifySection
      id="page-notify-error"
      containerized={false}
      margined
      title={(error as string) ?? 'Authentication Error'}
      subtitle="An authentication error has occured."
      message={(message as string) ?? ''}
      baseUrl={props?.baseUrl}
    />
  );
};

export const PartialPageNotifySignOut = ({ props }: { props: { baseUrl: string } }) => {
  return (
    <PartialPageNotifySection
      id="page-notify-sign-out"
      containerized={false}
      margined
      title="Sign Out"
      titleBold
      subtitle="Are you sure you want to sign out?"
      actions={
        <>
          <WrapperActionSignOut
            props={{
              baseUrl: props.baseUrl,
              dbConfig: config,
              options: { clearDB: true },
            }}
          >
            <Button>Sign Out</Button>
          </WrapperActionSignOut>

          <Button
            component={Link}
            href="/"
            color="gray"
            variant="light"
            rightSection={<IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
          >
            Go Home
          </Button>
        </>
      }
    />
  );
};

export const PartialPageNotifySignedOut = () => {
  return (
    <PartialPageNotifySection
      id="page-notify-signed-out"
      containerized={false}
      margined
      title="Signed Out"
      titleBold
      subtitle="You’ve been signed out successfully."
      actions={
        <>
          <Button
            component={Link}
            href={AUTH_URLS.SIGN_IN}
            color="pri"
            // variant="light"
            leftSection={<IconArrowLeft size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
          >
            Sign Back In
          </Button>
        </>
      }
    />
  );
};

export function PartialPageNotifySection({
  id,
  title,
  message,
  subtitle,
  actions,
  padded,
  containerized = false,
  margined,
  titleBold = false,
  baseUrl,
}: NotifySectionProps) {
  const router = useRouter();

  return (
    <Container>
      <Flex direction="column" align={{ base: 'center', md: 'start' }} gap="xl">
        <Stack gap="xs">
          <Title ta={{ base: 'center', md: 'start' }} order={1} fw={titleBold ? 'bold' : undefined}>
            {title}
          </Title>

          <Flex
            direction="column"
            align={{ base: 'center', md: 'start' }}
            gap={'md'}
            mih={24.8 * 2}
          >
            {subtitle && <Text ta={{ base: 'center', md: 'start' }}>{subtitle}</Text>}

            {message && (
              <Text ta={{ base: 'center', md: 'start' }}>
                {message?.includes('PKCE')
                  ? 'PKCE code verifier mismatch. Try signing in again.'
                  : message}
              </Text>
            )}

            {message?.includes('PKCE') && baseUrl && (
              <Group mt={'md'}>
                <WrapperActionSignOut
                  props={{
                    baseUrl: baseUrl,
                    dbConfig: config,
                    options: { redirectUrl: AUTH_URLS.SIGN_IN },
                  }}
                >
                  <Button>Try Again</Button>
                </WrapperActionSignOut>
              </Group>
            )}

            {message?.includes('expired or is invalid') && (
              <Group mt={'md'}>
                <Button
                  onClick={() => {
                    router.back();
                  }}
                >
                  Try Again
                </Button>
              </Group>
            )}
          </Flex>
        </Stack>

        {actions && <Group>{actions}</Group>}
      </Flex>
    </Container>
  );
}
