import React from 'react';
import styled from 'styled-components';
import Content from '../elements/Content';
import Inner from '../elements/Inner';
import { Title } from '../elements/Titles';

const ContactText = styled.p`
  font-size: 1.875rem;
  color: lightgrey;
`;

const Contact = () => (
  <Content id="contact">
    <Inner>
      <Title>Get in touch</Title>
      <ContactText>
        Send me an <a href="mailto:naveen.sujal666@gmail.com">E-Mail</a> or say Hi to me
        on{' '}
        <a rel="noreferrer" href="https://facebook.com/naveenshaw1998">
          Facebook
        </a>
      </ContactText>
    </Inner>
  </Content>
);

export default Contact;
