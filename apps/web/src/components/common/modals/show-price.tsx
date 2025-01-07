'use client';

import React from 'react';

import {
  Card,
  Grid,
  GridCol,
  List,
  ListItem,
  Modal,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import shows from '@/data/shows';

export default function ShowPrice({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        size={'xl'}
        title={
          <Text component="span" inherit fw={'bold'} c={'pri'}>
            What to Expect
          </Text>
        }
        closeButtonProps={{ 'aria-label': 'Close modal' }}
      >
        <Grid>
          {shows.guide.map((item) => (
            <GridCol key={item.title} span={{ base: 12, xs: 6, md: 4 }}>
              <Card shadow="xs" withBorder h={'100%'}>
                <Stack gap={'xs'}>
                  <Title order={2} fz={'sm'} fw={'bold'}>
                    {item.title}
                  </Title>

                  <List size="xs" spacing={4}>
                    {item.list.map((li) => (
                      <ListItem key={li.id}>{li.desc}</ListItem>
                    ))}
                  </List>
                </Stack>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Modal>

      <div onClick={open}>{children}</div>
    </>
  );
}
