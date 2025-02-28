import { capitalizeWord } from '@/utilities/formatters/string';
import { Avatar, Card, Grid, GridCol, Group, Text, Title } from '@mantine/core';
import { initialize } from '@/utilities/formatters/string';
import React from 'react';

export default function Collaborator({ props }: { props: any }) {
  return (
    <Card padding={0}>
      <Grid columns={20}>
        <GridCol span={{ md: 2 }}>
          <Avatar src={props.avatar} color="initials">
            {initialize(props.name)}
          </Avatar>
        </GridCol>

        <GridCol span={{ md: 18 }}>
          <Group justify="space-between">
            <div>
              <Title order={3} fz={'md'} c={'var(--mantine-color-text)'}>
                {props.name}
              </Title>

              <Text c={'dimmed'} fz={'sm'}>
                {props.email}
              </Text>
            </div>

            <Group>
              <Text fz={'sm'}>{capitalizeWord(props.role)}</Text>
            </Group>
          </Group>
        </GridCol>
      </Grid>
    </Card>
  );
}
