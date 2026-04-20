'use client';

import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import {
  Anchor,
  Button,
  Card,
  Group,
  Loader,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { useStorePost } from '@repo/libraries/zustand/stores/post';
import CardBlogSide from '@/components/common/cards/blog/side';
import { sortArray } from '@repo/utilities/array';
import { Order } from '@repo/types/enums';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { SOCIALS } from '@repo/constants/app';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconCircleX,
} from '@tabler/icons-react';
import { extractUuidFromParam } from '@repo/utilities/url';
import { usePathname } from 'next/navigation';

export default function Main() {
  const { posts } = useStorePost();
  const pathname = usePathname();
  const postId = extractUuidFromParam(pathname);
  const filteredPosts = (posts || []).filter((pi) => pi.id != postId);

  return (
    <LayoutSection
      id={'aside-blog-main'}
      containerized={false}
      padded
      pos={'sticky'}
      top={-(SECTION_SPACING / 2)}
    >
      <Stack gap={SECTION_SPACING}>
        <Stack>
          <Title order={2} fz={'lg'}>
            More Posts
          </Title>

          {posts === undefined ? (
            <Stack mih={304} align="center" ta={'center'} py={'xl'}>
              <Loader size={'xs'} />

              <Text inherit fz={'sm'} c={'dimmed'}>
                Fetching posts
              </Text>
            </Stack>
          ) : !posts?.length ? (
            <Stack mih={304} align="center" ta={'center'} py={'xl'}>
              <ThemeIcon
                size={ICON_WRAPPER_SIZE * 1.5}
                variant="light"
                radius={999}
              >
                <IconCircleX size={ICON_SIZE * 1.5} />
              </ThemeIcon>

              <Text inherit fz={'sm'} c={'dimmed'}>
                No posts found
              </Text>
            </Stack>
          ) : (
            <Stack gap={'xl'}>
              {sortArray(
                filteredPosts,
                (i) => i.created_at,
                Order.DESCENDING
              ).map(
                (pi, i) => i < 3 && <CardBlogSide key={pi.id} props={pi} />
              )}
            </Stack>
          )}
        </Stack>

        <Stack>
          <Title order={2} fz={'lg'}>
            Socials
          </Title>

          <Stack gap={'xs'}>
            {socialButtons.map((pi) => (
              <Anchor key={pi.link} href={pi.link} target={'_blank'}>
                <Paper
                  bg={`var(--mantine-color-${pi.color}-light)`}
                  c={`var(--mantine-color-${pi.color}-6)`}
                  fw={'bold'}
                  py={'xs'}
                  px={'xs'}
                >
                  <Group justify="space-between" fz={'sm'}>
                    <Group gap={'xs'}>
                      <pi.icon size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />

                      <Text inherit>{pi.label}</Text>
                    </Group>

                    <Text inherit tt={'uppercase'} fz={'xs'}>
                      Follow
                    </Text>
                  </Group>
                </Paper>
              </Anchor>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </LayoutSection>
  );
}

const socialButtons = [
  {
    label: SOCIALS.FB.label,
    link: SOCIALS.FB.link,
    icon: IconBrandFacebook,
    color: 'blue',
  },
  {
    label: SOCIALS.IG.label,
    link: SOCIALS.IG.link,
    icon: IconBrandInstagram,
    color: 'pink',
  },
  {
    label: SOCIALS.X.label,
    link: SOCIALS.X.link,
    icon: IconBrandX,
    color: 'dark',
  },
  {
    label: SOCIALS.LI.label,
    link: SOCIALS.LI.link,
    icon: IconBrandLinkedin,
    color: 'blue',
  },
  {
    label: SOCIALS.YT.label,
    link: SOCIALS.YT.link,
    icon: IconBrandYoutube,
    color: 'red',
  },
];
