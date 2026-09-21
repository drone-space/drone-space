import { Center, Stack } from '@mantine/core';
import LayoutSection from '@repo/ui/layout/section';
import LoaderMain from '@repo/ui/common/loaders/main';
import ImageDefault from '@repo/ui/common/images/default';
import { images } from '@repo/constants/images';

export default function Main() {
  return (
    <LayoutSection id={'loading-main'}>
      <Center mih={'100vh'}>
        <Stack align="center">
          <LoaderMain />
        </Stack>
      </Center>
    </LayoutSection>
  );
}
