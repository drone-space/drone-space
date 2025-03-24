'use client';

import {
  Button,
  Divider,
  Group,
  Modal,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import LayoutModalAcademy from '@/components/layout/modal/academy';
import { IconUserPlus } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH, SCROLLBAR_SIZE } from '@/data/constants';
import CardAcademyCollaborator from '../../cards/academy/collaborator';
import ModalAcademyCollaborator from './collaborator';
import ModalDeleteProject from '../delete/project';
import { collaborators } from '@/data/sample';

export default function Project({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

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
            title: 'Manage Project',
            closeFunction: close,
            footer: (
              <Group justify="space-between">
                <ModalDeleteProject>
                  <Button size="sm" variant="light" color="gray">
                    Delete Project
                  </Button>
                </ModalDeleteProject>

                <Button size="sm">Done</Button>
              </Group>
            ),
          }}
        >
          <Stack gap={'xl'}>
            <TextInput
              label={'Project Name'}
              placeholder="Search by name or email"
              value={'New Project (xevac jarars)'}
              styles={{
                label: { marginBottom: 'var(--mantine-spacing-md)' },
              }}
            />

            <Group justify="space-between">
              <Title
                order={2}
                c={'var(--mantine-color-text)'}
                fw={500}
                fz={'xl'}
              >
                Project Collaborators
              </Title>

              <ModalAcademyCollaborator>
                <Button
                  variant="outline"
                  leftSection={
                    <IconUserPlus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                  }
                >
                  Add Collaborators
                </Button>
              </ModalAcademyCollaborator>
            </Group>

            <Divider />

            <ScrollArea h={240} scrollbarSize={SCROLLBAR_SIZE}>
              <Stack gap={'sm'}>
                {collaborators ? (
                  collaborators.map((collaborator, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <Divider key={`divider-${index}`} />}

                      <CardAcademyCollaborator
                        key={index}
                        props={collaborator}
                      />
                    </React.Fragment>
                  ))
                ) : (
                  <Stack h={200} justify="center">
                    <Text ta={'center'} c={'dimmed'}>
                      No results found
                    </Text>
                  </Stack>
                )}
              </Stack>
            </ScrollArea>
          </Stack>
        </LayoutModalAcademy>
      </Modal>

      <div onClick={open}>{children}</div>
    </>
  );
}
