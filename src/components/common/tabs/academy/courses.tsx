'use client';

import {
  Group,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  TextInput,
} from '@mantine/core';
import React, { useEffect, useState } from 'react';
import LayoutSection from '@/components/layout/section';
import { getUrlParam, setUrlParam } from '@/utilities/helpers/url';
import { useRouter } from 'next/navigation';
import classes from './courses.module.scss';
import { IconSearch } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Courses() {
  const router = useRouter();
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    setValue(getUrlParam('tab').length > 1 ? getUrlParam('tab') : 'enrolled');
  }, []);

  useEffect(() => {
    if (value) router.push(setUrlParam('tab', value));
  }, [value]);

  return (
    <Tabs
      classNames={classes}
      value={value}
      onChange={(val) => setValue(val)}
      variant="pills"
    >
      <LayoutSection id="academy-courses-tab-list" bg={'gray.1'} padded={'md'}>
        <TabsList>
          <Group gap={'xs'}>
            <TabsTab value="enrolled">Enrolled</TabsTab>
            <TabsTab value="completed">Completed</TabsTab>
          </Group>

          <div style={{ justifySelf: 'end' }}>
            <TextInput
              placeholder="Search course"
              variant="filled"
              leftSection={
                <IconSearch size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
              }
              styles={{
                input: {
                  backgroundColor: 'var(--mantine-color-white)',
                },
              }}
            />
          </div>
        </TabsList>
      </LayoutSection>

      <TabsPanel value="enrolled">
        <LayoutSection id="academy-courses-tab-enrolled" padded={'md'}>
          Enrolled tab content
        </LayoutSection>
      </TabsPanel>

      <TabsPanel value="completed">
        <LayoutSection id="academy-courses-tab-completed" padded={'md'}>
          Completed tab content
        </LayoutSection>
      </TabsPanel>
    </Tabs>
  );
}
