import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AdvertisingInquiryEmailProps {
  name: string;
  email: string;
  company: string;
  message: string;
  plan: string;
}

export const AdvertisingInquiryEmail = ({
  name,
  email,
  company,
  message,
  plan,
}: AdvertisingInquiryEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Advertising Inquiry from {company}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Advertising Inquiry</Heading>
          <Section style={section}>
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Company:</strong> {company}
            </Text>
            <Text style={text}>
              <strong>Selected Plan:</strong> {plan} days
            </Text>
            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            <Text style={text}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const section = {
  padding: "0 48px",
};

const h1 = {
  color: "#1a1a1a",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.3",
  padding: "17px 0 0",
};

const text = {
  color: "#1a1a1a",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "16px 0",
};

export default AdvertisingInquiryEmail; 