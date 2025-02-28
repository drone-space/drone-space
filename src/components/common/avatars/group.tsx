import { ICON_WRAPPER_SIZE } from '@/data/constants';
import { initialize } from '@/utilities/formatters/string';
import { Avatar, AvatarGroup, Tooltip, TooltipGroup } from '@mantine/core';
import React from 'react';

export default function Group({ props }: { props: any[] }) {
  return (
    <TooltipGroup openDelay={100} closeDelay={100}>
      <AvatarGroup>
        {props.map((collaborator, index) => (
          <Tooltip key={index} label={collaborator.name} withArrow>
            <Avatar
              src={collaborator.avatar}
              color="initials"
              size={ICON_WRAPPER_SIZE * 1.25}
            >
              {initialize(collaborator.name)}
            </Avatar>
          </Tooltip>
        ))}
      </AvatarGroup>
    </TooltipGroup>
  );
}
