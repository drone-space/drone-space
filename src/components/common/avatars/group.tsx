import { ICON_WRAPPER_SIZE } from '@/data/constants';
import { ProfileGet } from '@/types/models/profile';
import { initialize } from '@/utilities/formatters/string';
import { Avatar, AvatarGroup, Tooltip, TooltipGroup } from '@mantine/core';
import React from 'react';

export default function Group({ props }: { props: ProfileGet[] }) {
  return (
    <TooltipGroup openDelay={100} closeDelay={100}>
      <AvatarGroup>
        {props.map((collaborator, index) => {
          const fullName = `${collaborator.firstName} ${collaborator.lastName}`;

          return (
            <Tooltip key={index} label={fullName} withArrow>
              <Avatar
                src={collaborator.avatar}
                color="initials"
                size={ICON_WRAPPER_SIZE * 1.25}
              >
                {initialize(fullName)}
              </Avatar>
            </Tooltip>
          );
        })}
      </AvatarGroup>
    </TooltipGroup>
  );
}
