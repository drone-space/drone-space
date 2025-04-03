'use client';

import {
  Button,
  Center,
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
import { Role } from '@prisma/client';
import { useHydrate } from '@/hooks/hydration';
import { ProjectRelations } from '@/types/models/project';

export default function Project({
  props,
  children,
}: {
  props?: { project?: ProjectRelations };
  children: React.ReactNode;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const profiles = props?.project?.profiles;
  const instructors = profiles?.filter((p) => p.role == Role.INSTRUCTOR);
  const admins = profiles?.filter((p) => p.role == Role.ADMINISTRATOR);
  const collaborators = instructors?.concat(admins || []);

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
            title: `${props?.project ? 'Manage' : 'Add'} Project`,
            closeFunction: close,
            footer: (
              <Group justify={props?.project ? 'space-between' : 'end'}>
                {props?.project && (
                  <ModalDeleteProject>
                    <Button size="sm" variant="light" color="gray">
                      Delete Project
                    </Button>
                  </ModalDeleteProject>
                )}

                <Button size="sm">{props?.project ? 'Done' : 'Add'}</Button>
              </Group>
            ),
          }}
        >
          <Stack gap={'xl'}>
            <TextInput
              label={'Project Name'}
              placeholder="Enter project name"
              defaultValue={props?.project?.title || 'New Project'}
              styles={{ label: { marginBottom: 'var(--mantine-spacing-md)' } }}
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
          </Stack>

          <Divider mt={'xl'} />

          <ScrollArea h={240} scrollbarSize={SCROLLBAR_SIZE}>
            <Stack gap={0}>
              {!hydrated ? (
                collaboratorPlaceholder
              ) : !collaborators?.length ? (
                <Center h={80}>
                  <Text ta={'center'} c={'dimmed'}>
                    No collaborators selected
                  </Text>
                </Center>
              ) : (
                collaborators?.map((collaborator, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <Divider key={`divider-${index}`} />}

                    <CardAcademyCollaborator key={index} props={collaborator} />
                  </React.Fragment>
                ))
              )}
            </Stack>
          </ScrollArea>
        </LayoutModalAcademy>
      </Modal>

      <div onClick={open}>{children}</div>
    </>
  );
}

const NotFound = (
  <Stack h={200} justify="center">
    <Text ta={'center'} c={'dimmed'}>
      No results found
    </Text>
  </Stack>
);

const collaboratorPlaceholder = <>loading</>;
