import { Container, Stack, Text, Title } from '@mantine/core';

export function LayoutAuth({ title, desc }: { title: string; desc: string }) {
  return (
    <>
      <Container>
        <Stack gap={'xs'}>
          <Title order={1} fz={'lg'} ta={'center'}>
            {title}
          </Title>

          <Text ta={'center'} fz={'sm'}>
            {desc}
          </Text>
        </Stack>
      </Container>
    </>
  );
}
