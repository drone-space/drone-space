'use client';

import React from 'react';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import LayoutMainAcademy from '@/components/layout/main/academy';
import AsideAcademyContent from '@/components/layout/asides/academy/content';
import {
  ActionIcon,
  Button,
  Group,
  Stack,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { IconDots, IconPlus, IconUpload } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import ModalAcademyCollaborator from '@/components/common/modals/academy/collaborator';
import ModalAcademyProject from '@/components/common/modals/academy/project';
import MenuAcademyContentCreate from '@/components/common/menus/academy/content/create';
import AvatarGroup from '@/components/common/avatars/group';
import TableAcademyContent from '@/components/common/table/academy/content';
import { useAppSelector } from '@/hooks/redux';
import { Role } from '@prisma/client';
import { useHydrate } from '@/hooks/hydration';

// import { Metadata } from 'next';
// import appData from '@/data/app';
// import { HOSTED_BASE_URL } from '@/data/constants';
// import { images } from '@/assets/images';

// const metaTitle = `Privacy Policy - How ${appData.name.app} Protects Your Data`;
// const metaDesc = `Learn how ${appData.name.app} collects, uses, and protects your personal information. Your privacy is our priority.`;

// export const metadata: Metadata = {
//   title: metaTitle,
//   description: metaDesc,
//   openGraph: {
//     title: metaTitle,
//     description: metaDesc,
//     url: `${HOSTED_BASE_URL.DRONE_SPACE}/legal/policy`,
//     type: 'website',
//     images: [
//       {
//         url: images.brand.droneSpace.logo.potrait.meta,
//         width: 1200,
//         height: 1200,
//         alt: appData.name.company,
//       },
//     ],
//   },
// };

export default function Project({ params }: { params: { projectId: string } }) {
  const project = useAppSelector((state) =>
    state.projects.value?.find((p) => p.id == params.projectId)
  );
  const profiles = project?.profiles;
  const instructors = profiles?.filter((p) => p.role == Role.INSTRUCTOR);
  const admins = profiles?.filter((p) => p.role == Role.ADMINISTRATOR);
  const collaborators = instructors?.concat(admins || []);

  const { hydrated } = useHydrate();

  return (
    <LayoutPage>
      <LayoutSection id="project" containerized={false}>
        <LayoutMainAcademy
          props={{
            navigation: <AsideAcademyContent />,
          }}
        >
          <Stack>
            <Group justify="space-between" mih={36}>
              <TextInput
                defaultValue={project?.title}
                placeholder="Project Title"
                variant="unstyled"
                styles={{
                  input: { fontSize: '1.5rem', fontWeight: '500', width: 480 },
                }}
              />

              <Group gap={'xs'}>
                <Button
                  variant="light"
                  color="gray"
                  leftSection={
                    <IconUpload size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                  }
                >
                  Upload
                </Button>

                <MenuAcademyContentCreate>
                  <Button
                    leftSection={
                      <IconPlus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                    }
                  >
                    Create
                  </Button>
                </MenuAcademyContentCreate>
              </Group>
            </Group>

            <Group gap={'xs'}>
              {!hydrated ? (
                placeholderCollab
              ) : !collaborators?.length ? null : (
                <AvatarGroup props={collaborators} />
              )}

              <ModalAcademyCollaborator>
                <Tooltip label="Add Collaborator" withArrow>
                  <Group>
                    <ActionIcon size={ICON_WRAPPER_SIZE} radius={'xl'}>
                      <IconPlus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                    </ActionIcon>
                  </Group>
                </Tooltip>
              </ModalAcademyCollaborator>

              {!project ? null : (
                <ModalAcademyProject props={{ project }}>
                  <Tooltip label="Manage Project" withArrow>
                    <Group>
                      <ActionIcon size={ICON_WRAPPER_SIZE} variant="subtle">
                        <IconDots size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                      </ActionIcon>
                    </Group>
                  </Tooltip>
                </ModalAcademyProject>
              )}
            </Group>

            <TableAcademyContent />
          </Stack>
        </LayoutMainAcademy>
      </LayoutSection>
    </LayoutPage>
  );
}

const placeholderCollab = <>loading</>;
