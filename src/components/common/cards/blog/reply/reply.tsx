import React from 'react';

import { initialize } from '@/utilities/formatters/string';
import { getRegionalDate } from '@/utilities/formatters/date';
import { Avatar, Card, Group, Text, Title } from '@mantine/core';
import { ReplyRelations } from '@/types/models/reply';

export default function Reply({ props }: { props: ReplyRelations }) {
  const usersName =
    `${props.profile?.firstName || ''} ${props.profile?.lastName || ''}`.trim();
  const name = usersName || props.name || 'Anonymous';

  return (
    <Card bg={'transparent'} padding={0}>
      <Group gap={'xs'}>
        <Avatar size={40} src={props.profile?.avatar}>
          {initialize(name)}
        </Avatar>

        <Title order={3} fz={'md'} mt={'md'}>
          {name}
        </Title>

        <Text fz={'sm'} c={'dimmed'}>
          <Text inherit component="span">
            {getRegionalDate(props.createdAt).date}
          </Text>{' '}
          at{' '}
          <Text inherit component="span">
            {getRegionalDate(props.createdAt).time.toUpperCase()}
          </Text>
        </Text>
      </Group>

      <Text fw={'normal'} mt={'xs'}>
        {props.content}
      </Text>
    </Card>
  );
}
