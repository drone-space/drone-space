'use client';

import {
  Group,
  NumberFormatter,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  TextInput,
} from '@mantine/core';
import React, { useEffect, useState } from 'react';
import LayoutSection from '@/components/layout/section';
import { getUrlParam, setUrlParam } from '@/utilities/helpers/url';
import { useRouter } from 'next/navigation';
import classes from './courses.module.scss';
import { IconSearch } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import CardAcademyCourseMain from '../../cards/academy/course/main';
import { courses } from '@/data/academy/courses';
import PlaceholderEmpty from '@/components/placeholders/empty';

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
            <TabsTab
              rightSection={
                <Text component="span" inherit>
                  (
                  <NumberFormatter
                    value={courses.completed.length}
                    thousandSeparator
                  />
                  )
                </Text>
              }
              value="enrolled"
            >
              Enrolled
            </TabsTab>
            <TabsTab
              rightSection={
                <Text component="span" inherit>
                  (
                  <NumberFormatter
                    value={courses.completed.length}
                    thousandSeparator
                  />
                  )
                </Text>
              }
              value="completed"
            >
              Completed
            </TabsTab>
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

      <TabsPanel value="enrolled">
        <LayoutSection id="academy-courses-tab-enrolled" padded={'lg'}>
          {courses.enrolled.length ? (
            <Stack gap={'lg'}>
              {courses.enrolled.map((c, i) => (
                <CardAcademyCourseMain key={i} props={c} />
              ))}
            </Stack>
          ) : (
            <PlaceholderEmpty
              props={{ text: `You haven't enrolled for any courses` }}
            />
          )}
        </LayoutSection>
      </TabsPanel>

      <TabsPanel value="completed">
        <LayoutSection id="academy-courses-tab-completed" padded={'lg'}>
          {courses.completed.length ? (
            <Stack gap={'lg'}>
              {courses.completed.map((c, i) => (
                <CardAcademyCourseMain key={i} props={c} />
              ))}
            </Stack>
          ) : (
            <PlaceholderEmpty
              props={{ text: `You don't have any completed courses` }}
            />
          )}
        </LayoutSection>
      </TabsPanel>
    </Tabs>
  );
}
