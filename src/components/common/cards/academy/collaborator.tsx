import { capitalizeWord } from '@/utilities/formatters/string';
import { Avatar, Card, Grid, GridCol, Group, Text, Title } from '@mantine/core';
import { initialize } from '@/utilities/formatters/string';
import React from 'react';
import { ProfileGet } from '@/types/models/profile';

export default function Collaborator({ props }: { props: ProfileGet }) {
  const fullName = `${props.firstName} ${props.lastName}`;

  return (
    <Card padding={0} py={'md'}>
      <Grid columns={20}>
        <GridCol span={{ md: 2 }}>
          <Avatar src={props.avatar} color="initials">
            {initialize(fullName)}
          </Avatar>
        </GridCol>

        <GridCol span={{ md: 18 }}>
          <Group justify="space-between">
            <div>
              <Title order={3} fz={'md'} c={'var(--mantine-color-text)'}>
                {fullName}
              </Title>

              <Text c={'dimmed'} fz={'sm'}>
                {props.userName}
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
