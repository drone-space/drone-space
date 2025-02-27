import { APPSHELL, SCROLLBAR_SIZE } from '@/data/constants';
import { Box, Grid, GridCol, Paper, ScrollArea } from '@mantine/core';
import React from 'react';

export default function Academy({
  props,
  children,
}: {
  props: { navigation: React.ReactNode };
  children: React.ReactNode;
}) {
  return (
    <Grid gutter={0}>
      <GridCol span={{ md: 2.5, xl: 2 }}>
        <ScrollArea
          h={APPSHELL.BODY_HEIGHT}
          type="hover"
          scrollbarSize={SCROLLBAR_SIZE}
          scrollbars={'y'}
        >
          <Paper p={'xs'} bg={'transparent'}>
            {props.navigation}
          </Paper>
        </ScrollArea>
      </GridCol>

      <GridCol span={{ md: 9.5, xl: 10 }}>
        <ScrollArea
          h={APPSHELL.BODY_HEIGHT}
          type="always"
          offsetScrollbars
          scrollbarSize={SCROLLBAR_SIZE}
          scrollbars={'y'}
        >
          <Box p={'xs'}>
            <Paper bg={'var(--mantine-color-body)'} shadow="xs" p={'lg'}>
              <Box h={'120vh'}>{children}</Box>
            </Paper>
          </Box>
        </ScrollArea>
      </GridCol>
    </Grid>
  );
}
