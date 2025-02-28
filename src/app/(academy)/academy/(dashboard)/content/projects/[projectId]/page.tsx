import React from 'react';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import LayoutMainAcademy from '@/components/layout/main/academy';
import AsideAcademyContent from '@/components/layout/asides/academy/content';
import {
  ActionIcon,
  Avatar,
  AvatarGroup,
  Button,
  Group,
  Stack,
  TextInput,
  Tooltip,
  TooltipGroup,
} from '@mantine/core';
import { IconDots, IconPlus, IconUpload } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { initialize } from '@/utilities/formatters/string';
import ModalAcademyCollaborator from '@/components/common/modals/academy/collaborator';
import ModalAcademyProject from '@/components/common/modals/academy/project';

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

export default async function Project() {
  return (
    <LayoutPage>
      <LayoutSection id="project" containerized={false}>
        <LayoutMainAcademy props={{ navigation: <AsideAcademyContent /> }}>
          <Stack>
            <Group justify="space-between">
              <TextInput
                defaultValue={'New Project (xevac jarars)'}
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

                <Button
                  leftSection={
                    <IconPlus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                  }
                >
                  Create
                </Button>
              </Group>
            </Group>

            <Group gap={'xs'}>
              <TooltipGroup openDelay={100} closeDelay={100}>
                <AvatarGroup>
                  {collaborators.map((collaborator, index) => (
                    <Tooltip key={index} label={collaborator.name} withArrow>
                      <Avatar
                        src={collaborator.avatar}
                        alt={collaborator.name}
                        color="initials"
                        size={ICON_WRAPPER_SIZE * 1.25}
                      >
                        {initialize(collaborator.name)}
                      </Avatar>
                    </Tooltip>
                  ))}
                </AvatarGroup>
              </TooltipGroup>

              <ModalAcademyCollaborator>
                <Tooltip label="Add Collaborator" withArrow>
                  <Group>
                    <ActionIcon size={ICON_WRAPPER_SIZE} radius={'xl'}>
                      <IconPlus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                    </ActionIcon>
                  </Group>
                </Tooltip>
              </ModalAcademyCollaborator>

              <ModalAcademyProject>
                <Tooltip label="Manage Project" withArrow>
                  <Group>
                    <ActionIcon size={ICON_WRAPPER_SIZE} variant="subtle">
                      <IconDots size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                    </ActionIcon>
                  </Group>
                </Tooltip>
              </ModalAcademyProject>
            </Group>
          </Stack>
        </LayoutMainAcademy>
      </LayoutSection>
    </LayoutPage>
  );
}

const collaborators = [
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Harriette Spoonlicker',
    email: 'jane@example.com',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    name: 'Michael Bay',
    email: 'mike@example.com',
  },
  {
    avatar: null,
    name: 'John Doe',
    email: 'mike@example.com',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Emma Darcy',
    email: 'emma@example.com',
  },
];
