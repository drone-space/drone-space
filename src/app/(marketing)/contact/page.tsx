import React from 'react';

import { Metadata } from 'next';

import {
  Anchor,
  Avatar,
  Card,
  Flex,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
} from '@mantine/core';

import ModalContactTraining from '@/components/common/modals/contact/training';
import ModalContactTechnical from '@/components/common/modals/contact/technical';
import ModalContactShop from '@/components/common/modals/contact/shop';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import FormContact from '@/components/form/contact';
// import IntroPage from '@/components/layout/intro/page';
import Link from 'next/link';
import {
  IconHeadset,
  IconHelpCircle,
  IconSchool,
  IconShoppingBag,
} from '@tabler/icons-react';
import { images } from '@/assets/images';
import TooltipWhatsApp from '@/components/common/tooltips/whatsapp';
import appData from '@/data/app';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export const metadata: Metadata = { title: 'Contact' };

export default async function Contact() {
  return (
    <LayoutPage>
      {/* <IntroPage
        props={{
          path: 'Reach Out',
          title: 'Contact Us',
          desc: 'Please reach out to us if you have questions about our enterprise offerings, or anything else.',
        }}
      /> */}

      <LayoutSection id="page-contact" padded containerized={'responsive'}>
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 6, lg: 5 }} order={{ base: 2, md: 1 }}>
            <Stack align="center">
              <Card
                withBorder
                bg={'white'}
                shadow="xs"
                w={{ sm: '66%', md: '100%' }}
              >
                <FormContact />
              </Card>

              <Text ta={'center'} fz={'sm'}>
                Please consult the{' '}
                <Anchor component={Link} inherit fw={500} href="/resources/faq">
                  FAQ
                </Anchor>
                &apos;s first.
              </Text>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 7 }} order={{ base: 1, md: 2 }}>
            <Stack gap={'xl'}>
              <Stack>
                <Title
                  order={2}
                  fz={'xl'}
                  fw={'bold'}
                  ta={{ base: 'center', md: 'start' }}
                >
                  Thanks for your interest. How can we help?
                </Title>
                <Text ta={{ base: 'center', md: 'start' }}>
                  Please let us know if you have a question about our
                  enterprise, have an offering or proposal, want to leave a
                  comment or would like further information.
                </Text>
              </Stack>

              <Grid gutter={'xl'}>
                {options.map((option) => (
                  <GridCol
                    key={option.title}
                    span={{ base: 12, xs: 6, sm: 6, md: 6 }}
                  >
                    <Flex
                      direction={'column'}
                      align={{ base: 'center', md: 'start' }}
                      ta={{ base: 'center', md: 'start' }}
                      gap={'md'}
                    >
                      <ThemeIcon
                        size={ICON_WRAPPER_SIZE}
                        variant="light"
                        // display={{ base: undefined, sm: "none", md: "inherit" }}
                      >
                        <option.icon
                          size={ICON_SIZE}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Title order={3} fz={'md'} fw={'bold'}>
                          {option.title}
                        </Title>
                        {option.description}
                      </Stack>
                    </Flex>
                  </GridCol>
                ))}
              </Grid>
            </Stack>
          </GridCol>
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}

const options = [
  {
    title: 'Training Inquiries',
    description: (
      <Text inherit fz={{ base: 'xs', lg: 'sm' }}>
        For course details please visit our training section, for course prices
        go to{' '}
        <Anchor component={Link} href="/training/pricing" inherit fw={500}>
          pricing
        </Anchor>{' '}
        and for any other training inquiries, please send us a{' '}
        <ModalContactTraining>
          <Anchor inherit fw={500}>
            training inquiry
          </Anchor>
        </ModalContactTraining>
        .
      </Text>
    ),
    icon: IconSchool,
  },
  {
    title: 'Product Inquiries',
    description: (
      <Text inherit fz={{ base: 'xs', lg: 'sm' }}>
        To see available drones and drone prices please visit our{' '}
        <Anchor component={Link} href="/shop" inherit fw={500}>
          shop section
        </Anchor>
        , for drone importation or other drone purchase inquiries, please send
        us a{' '}
        <ModalContactShop>
          <Anchor inherit fw={500}>
            product/purchase inquiry
          </Anchor>
        </ModalContactShop>
        .
      </Text>
    ),
    icon: IconShoppingBag,
  },
  {
    title: 'Technical Inquiries',
    description: (
      <Stack gap={'xs'}>
        <Text inherit fz={{ base: 'xs', lg: 'sm' }}>
          Found a persistent bug to report? Have a new feature to suggest or any
          other technical issue to address? Please{' '}
          <ModalContactTechnical>
            <Tooltip
              color="pri"
              withArrow
              // position="bottom"
              py={4}
              pl={4}
              label={
                <Group gap={'xs'}>
                  <Avatar src={images.team.kevon} radius={'xl'} />
                  <Stack gap={4}>
                    <Text inherit fz={'xs'} fw={500} lh={1.1}>
                      Kevon Kibochi
                    </Text>
                    <Text inherit fz={10} fw={500} lh={1}>
                      Software Developer
                    </Text>
                  </Stack>
                </Group>
              }
            >
              <Anchor inherit fw={500}>
                contact our developer
              </Anchor>
            </Tooltip>
            .
          </ModalContactTechnical>
        </Text>
      </Stack>
    ),
    icon: IconHeadset,
  },
  {
    title: 'General Inquiries',
    description: (
      <Text inherit fz={{ base: 'xs', lg: 'sm' }}>
        For any inquiry that doesn&apos;t fit in the other three brackets, fill
        in the form on this page or{' '}
        <TooltipWhatsApp>
          <Anchor
            inherit
            fw={500}
            href={`${appData.socials.whatsapp.link}`}
            target="_blank"
          >
            start a chat with us
          </Anchor>
        </TooltipWhatsApp>
        .
      </Text>
    ),
    icon: IconHelpCircle,
  },
];
