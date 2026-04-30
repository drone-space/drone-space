'use client';

import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  Divider,
  List,
  ListItem,
  Modal,
  ScrollArea,
  ScrollAreaAutosize,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import LayoutModal from '@repo/components/layout/modal';
import NextLink from '@repo/components/common/anchor/next-link';

export default function Requirements({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        size={'lg'}
      >
        <LayoutModal props={{ close }}>
          <ScrollAreaAutosize mah={520} type="auto">
            <Stack>
              <Stack gap={'xs'}>
                <Title order={2} fz={'md'}>
                  Requirements to Enroll in the RPL Course
                </Title>

                <List>
                  <ListItem>
                    Applicants must be <strong>18 years of age or older</strong>
                    .
                  </ListItem>

                  <ListItem>
                    A <strong>Class III medical certificate</strong> is
                    required.
                  </ListItem>

                  <ListItem>
                    <strong>50% deposit or full payment</strong> must be made
                    before classes commence.
                  </ListItem>
                </List>

                <Text>
                  <strong>Note</strong>: No prior educational certificates are
                  required.
                </Text>
              </Stack>

              <Divider />

              <Stack gap={'xs'}>
                <Title order={2} fz={'md'}>
                  Training Format
                </Title>

                <List>
                  <ListItem>
                    We offer <strong>online classes</strong> conducted in the
                    evening from{' '}
                    <strong>5:30 PM to 8:30 PM, seven days a week</strong>.
                  </ListItem>

                  <ListItem>
                    All <strong>training materials and drones</strong> for
                    practical sessions are provided by the institution.
                  </ListItem>
                </List>
              </Stack>

              <Divider />

              <Stack gap={'xs'}>
                <Title order={2} fz={'md'}>
                  Requirements for Advanced Courses
                </Title>

                <List>
                  <ListItem>
                    All advanced courses are intended for individuals who{' '}
                    <strong>
                      already hold a valid Remote Pilot License (RPL)
                    </strong>
                    .
                  </ListItem>
                </List>
              </Stack>

              <Divider />

              <Stack gap={'xs'}>
                <NextLink
                  href="/blog/kcaa-updates-to-rpl-training-in-kenya-2026-what-you-need-to-know-56ce1258-32f8-42fd-98c2-25c8fd7074d1"
                  underline="always"
                >
                  See recent KCAA updates regarding the RPL course
                </NextLink>
              </Stack>
            </Stack>
          </ScrollAreaAutosize>
        </LayoutModal>
      </Modal>

      <span onClick={open}>{children}</span>
    </>
  );
}
