'use client';

import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Card, Stack, Title, Text, Button } from '@mantine/core';

export default function Project({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        padding={0}
        size={'sm'}
      >
        <Card padding={'xl'}>
          <Stack ta={'center'}>
            <Title order={2} c={'var(--mantine-color-text)'} fz={'xl'}>
              Delete Project
            </Title>

            <Text inherit>
              The project will be permanently deleted, but its contents will be
              moved to Trash and can be restored for up to 30 days.
            </Text>

            <Stack gap={'xs'}>
              <Button color="red">Delete</Button>

              <Button variant="light" color="gray" onClick={close}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Modal>

      <div onClick={open}>{children}</div>
    </>
  );
}
