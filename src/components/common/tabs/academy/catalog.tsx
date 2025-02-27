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
import classes from './catalog.module.scss';
import { IconSearch } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Catalog() {
  const router = useRouter();
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    setValue(getUrlParam('tab').length > 1 ? getUrlParam('tab') : 'courses');
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
      <LayoutSection id="academy-catalog-tab-list" bg={'gray.1'} padded={'md'}>
        <TabsList>
          <Group gap={'xs'}>
            <TabsTab value="courses">Courses</TabsTab>
            <TabsTab value="questions">Questions</TabsTab>
          </Group>

          <div style={{ justifySelf: 'end' }}>
            <TextInput
              placeholder="Search..."
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

      <TabsPanel value="courses">
        <LayoutSection id="academy-catalog-tab-courses" padded={'md'}>
          Courses tab content
        </LayoutSection>
      </TabsPanel>

      <TabsPanel value="questions">
        <LayoutSection id="academy-catalog-tab-questions" padded={'md'}>
          Questions tab content
        </LayoutSection>
      </TabsPanel>
    </Tabs>
  );
}
