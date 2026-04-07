import React from 'react';
import { Anchor, Flex, Group, Stack, Text } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import { IconCircleFilled, IconMail, IconPhone } from '@tabler/icons-react';
import { EMAILS, LOCATIONS, PHONES } from '@repo/constants/app';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import NextLink from '@repo/components/common/anchor/next-link';
import { socialLinks } from '@/data/links';
import ImageDefault from '@repo/components/common/images/default';

export default function Main() {
  return (
    <LayoutSection
      id="layout-header-main"
      padded={7}
      shadowed
      bg={'var(--mantine-color-pri-8)'}
      c={'var(--mantine-color-white)'}
      visibleFrom="sm"
    >
      <Flex
        direction={{ base: 'column', xs: 'row' }}
        align={'center'}
        gap={'xs'}
        justify="space-between"
        fz={{ base: 'xs', md: 'sm' }}
        fw={500}
        c={'white'}
      >
        <Group gap={'xs'} fw={500}>
          {data.left.map((item, i) => (
            <Group gap={'xs'} key={item.link}>
              {i > 0 && <IconCircleFilled size={4} />}

              <Anchor
                inherit
                component={'a'}
                href={item.link}
                c={'white'}
                underline="hover"
              >
                <Group gap={5}>
                  <item.icon size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />

                  {item.label}
                </Group>
              </Anchor>
            </Group>
          ))}
        </Group>

        <Group gap={'xs'} fw={500}>
          {data.right.map((item, i) => (
            <Group gap={'xs'} key={item.link}>
              {i > 0 && <IconCircleFilled size={4} />}

              <NextLink inherit href={item.link} c={'white'} underline="hover">
                {item.label}
              </NextLink>
            </Group>
          ))}

          <IconCircleFilled size={4} />

          <Group gap={5}>
            {socialLinks.map((social, index) => (
              <Anchor key={index} href={social.link} target="_blank">
                <ImageDefault
                  src={social.image}
                  alt={social.title}
                  title={social.title}
                  height={ICON_SIZE + 4}
                  width={ICON_SIZE + 4}
                  fit={'contain'}
                  radius={0}
                />
              </Anchor>
            ))}
          </Group>
        </Group>
      </Flex>
    </LayoutSection>
  );
}

const email = EMAILS.INFO;
const phone1 = PHONES.MAIN;

const data = {
  left: [
    { icon: IconPhone, label: phone1, link: `tel:${phone1}` },
    { icon: IconMail, label: email, link: `mailto:${email}` },
  ],
  right: [
    { label: 'FAQs', link: `/faq` },
    { label: 'Contact Us', link: `/contact` },
  ],
};
