'use client';

import {
  Button,
  Divider,
  Grid,
  GridCol,
  Group,
  Modal,
  ScrollArea,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import LayoutModalAcademy from '@/components/layout/modal/academy';
import { IconSearch } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH, SCROLLBAR_SIZE } from '@/data/constants';
import CardAcademyCollaborator from '../../cards/academy/collaborator';
import { useAppSelector } from '@/hooks/redux';
import { Role } from '@prisma/client';
import { useHydrate } from '@/hooks/hydration';

export default function Collaborator({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const profiles = useAppSelector((state) => state.profiles.value);
  const collaborators = profiles?.filter(
    (p) => p.role == (Role.INSTRUCTOR || Role.ADMINISTRATOR)
  );

  const { hydrated } = useHydrate();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        padding={0}
        size={'lg'}
      >
        <LayoutModalAcademy
          props={{
            title: 'Add Collaborator',
            closeFunction: close,
            footer: (
              <Group justify="end">
                <Button size="sm" variant="light" color="gray" onClick={close}>
                  Cancel
                </Button>

                <Button size="sm">Add</Button>
              </Group>
            ),
          }}
        >
          <Stack>
            <Grid gutter={'xl'}>
              <GridCol span={{ md: 9 }}>
                <Text>
                  Members will get access to all materials and folders in the
                  project
                </Text>
              </GridCol>

              <GridCol span={{ md: 3 }}>
                <Select
                  data={[
                    {
                      value: 'view',
                      label: 'Can view',
                    },
                    {
                      value: 'edit',
                      label: 'Can edit',
                    },
                  ]}
                  defaultValue={'view'}
                  allowDeselect={false}
                  withCheckIcon={false}
                  variant="unstyled"
                  size="md"
                  styles={{
                    input: {
                      backgroundColor: 'transparent',
                      padding: 'var(--mantine-spacing-xs)',
                      color: 'var(--mantine-color-pri-9)',
                    },
                  }}
                />
              </GridCol>
            </Grid>

            <TextInput
              placeholder="Search by name or email"
              leftSection={
                <IconSearch size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
              variant="unstyled"
              styles={{
                input: {
                  borderBottom: '2px solid var(--mantine-color-default-border)',
                  borderRadius: 0,
                },
              }}
            />

            <ScrollArea h={240} scrollbarSize={SCROLLBAR_SIZE} mt={'md'}>
              <Stack gap={'sm'}>
                {!hydrated
                  ? collaboratorPlaceholder
                  : collaborators?.map((collaborator, index) => (
                      <>
                        {index > 0 && <Divider />}

                        <CardAcademyCollaborator props={collaborator} />
                      </>
                    ))}
              </Stack>
            </ScrollArea>
          </Stack>
        </LayoutModalAcademy>
      </Modal>

      <div onClick={open}>{children}</div>
    </>
  );
}

const notFound = (
  <Stack h={200} justify="center">
    <Text ta={'center'} c={'dimmed'}>
      No results found
    </Text>
  </Stack>
);

const collaboratorPlaceholder = <>loading</>;
