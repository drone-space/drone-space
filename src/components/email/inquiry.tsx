import * as React from 'react';
import { Hr, Section, Text } from '@react-email/components';
import appData from '@/data/app';
import { dimmedText, Email as LayoutEmail, text } from './layout';
import sample from '@/data/sample';

export const Inquiry = (props: {
  userName: string;
  userMessage: string;
  userPhone: string;
}) => {
  return (
    <LayoutEmail
      props={{ preview: props.userMessage }}
      options={{ withHeader: true, withFooter: false }}
    >
      <Section style={{ marginTop: '2rem' }}>
        <Text>{appData.name.company},</Text>

        <Text style={text}>
          {props.userMessage || sample.text.prose} <br />
          <br />
          Regards, <br />
          {props.userName || 'John Doe'}
          {props.userPhone && (
            <>
              <br />
              {props.userPhone}
            </>
          )}
        </Text>
      </Section>

      <Section style={{ marginTop: '2rem' }}>
        <Hr />
      </Section>

      <Section style={{ marginTop: '2rem' }}>
        <Text style={{ ...dimmedText, textAlign: 'center', fontSize: 11 }}>
          Sent from the {appData.name.company} website.
        </Text>

        <Text style={{ ...dimmedText, textAlign: 'center', fontSize: 11 }}>
          You can reply to this email directly to respond to the inquiry.
        </Text>
      </Section>
    </LayoutEmail>
  );
};

export default Inquiry;
