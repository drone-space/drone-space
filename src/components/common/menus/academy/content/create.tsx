import React from 'react';
import {
  Menu,
  MenuTarget,
  MenuDropdown,
  MenuItem,
  Grid,
  GridCol,
} from '@mantine/core';
import {
  IconFile,
  IconFileCheck,
  IconFilePencil,
  IconSchool,
} from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Create({ children }: { children: React.ReactNode }) {
  return (
    <Menu shadow="md" width={360} trigger="click" position="bottom-end">
      <MenuTarget>
        <div>{children}</div>
      </MenuTarget>

      <MenuDropdown p={'md'}>
        <Grid>
          <GridCol span={{ md: 6 }}>
            <MenuItem
              p={'xs'}
              leftSection={
                <IconSchool
                  size={ICON_SIZE * 1.5}
                  stroke={ICON_STROKE_WIDTH}
                  color="var(--mantine-color-pri-9)"
                />
              }
            >
              Course
            </MenuItem>
          </GridCol>

          <GridCol span={{ md: 6 }}>
            <MenuItem
              p={'xs'}
              leftSection={
                <IconFile
                  size={ICON_SIZE * 1.5}
                  stroke={ICON_STROKE_WIDTH}
                  color="var(--mantine-color-pri-9)"
                />
              }
            >
              Page
            </MenuItem>
          </GridCol>

          <GridCol span={{ md: 6 }}>
            <MenuItem
              p={'xs'}
              leftSection={
                <IconFileCheck
                  size={ICON_SIZE * 1.5}
                  stroke={ICON_STROKE_WIDTH}
                  color="var(--mantine-color-pri-9)"
                />
              }
            >
              Quiz
            </MenuItem>
          </GridCol>

          <GridCol span={{ md: 6 }}>
            <MenuItem
              p={'xs'}
              leftSection={
                <IconFilePencil
                  size={ICON_SIZE * 1.5}
                  stroke={ICON_STROKE_WIDTH}
                  color="var(--mantine-color-pri-9)"
                />
              }
            >
              Assignment
            </MenuItem>
          </GridCol>
        </Grid>
      </MenuDropdown>
    </Menu>
  );
}
