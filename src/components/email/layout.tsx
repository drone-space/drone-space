/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Heading,
} from '@react-email/components';
import appData from '@/data/app';

const baseUrl = `https://xnaswiiqkdfkeirriwxj.supabase.co/storage/v1/object/public/images`;

export const Email = ({
  props,
  options = { withHeader: true, withFooter: true },
  children,
}: {
  props: { preview: string; title?: string };
  options?: { withHeader?: boolean; withFooter?: boolean };
  children: React.ReactNode;
}) => {
  return (
    <>
      <Html lang="en">
        <Head />

        <Preview>{props.preview || 'Preview'}</Preview>

        <Body>
          <Container style={content}>
            {options.withHeader && (
              <Section style={{ textAlign: 'center' }}>
                <a href="https://dronespace.co.ke">
                  <img
                    src={`${baseUrl}/brand/logo/landscape/default.png`}
                    width={180}
                    height={'auto'}
                    alt={appData.name.company}
                  />
                </a>

                {props.title && (
                  <Heading style={{ marginTop: '2rem', color: colors.pri }}>
                    {props.title}
                  </Heading>
                )}
              </Section>
            )}

            <Section style={{ marginTop: '2rem' }}>
              <Container>{children}</Container>
            </Section>

            {options.withFooter && (
              <Section>
                <Container>
                  <Text style={{ ...dimmedText, textAlign: 'center' }}>
                    Copyright © {new Date().getFullYear()},{' '}
                    <Link
                      href="https://dronespace.co.ke"
                      style={{
                        color: colors.pri,
                        textDecorationLine: 'underline',
                      }}
                    >
                      {appData.name.company}
                    </Link>
                    . All rights reserved.
                  </Text>
                </Container>
              </Section>
            )}
          </Container>
        </Body>
      </Html>
    </>
  );
};

export const content = {
  maxWidth: '560px',
  margin: '0 auto',
  border: '1px solid #e4e6ed',
  borderRadius: '0.25rem',
  padding: '3rem',
  fontFamily: "'Calibri', Arial, sans-serif",
};

export const text = {
  margin: 0,
};

export const dimmedText = { ...text, fontSize: 'small', color: 'gray' };

export const link = {
  margin: 0,
  fontWeight: 'bold',
  color: 'black',
};

export const colors = {
  pri: '#13259a',
  priLight: '#edeffd',
};
