import React from 'react';
import { Button, Card, Group, Stack, Text } from '@mantine/core';
import classes from './cookies.module.scss';
import { setCookieClient } from '@repo/utilities/cookie-client';
import { WEEK } from '@repo/constants/sizes';
import { COOKIE_NAME } from '@repo/constants/names';
import NextLink from '@repo/components/common/anchor/next-link';

export default function Cookies({ close }: { close: () => void }) {
  const handleConsentCookie = () => {
    setCookieClient(COOKIE_NAME.CONSENT_COOKIES, true, {
      expiryInSeconds: WEEK,
    });
    close();
  };

  return (
    <Card className={classes.card}>
      <Stack>
        <Text fz={'sm'}>
          This website uses cookies to provide a seamless user experience.
          Accepting our cookies is optional but recommended, as they are
          delicious. See our{' '}
          <NextLink inherit href="/legal/cookie-policy">
            cookie policy
          </NextLink>
          .
        </Text>

        <Group gap={'xs'}>
          <Button size="xs" onClick={handleConsentCookie}>
            Accept All
          </Button>
          <Button size="xs" onClick={close} variant="light">
            Reject All
          </Button>
        </Group>
      </Stack>
    </Card>
  );
}
