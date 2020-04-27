import React from 'react';
import styled from 'styled-components';
import Content from '../elements/Content';
import { BigTitle, Subtitle } from '../elements/Titles';
import avatar from '../images/avatar.jpg';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 128px;
`;

const Hero = () => (
  <Content id="hero">
    <Wrapper>
      <BigTitle>
        Hello, <br /> I'm Naveen.
      </BigTitle>
      <Avatar src={avatar} alt="Naveen Shaw" />
      <Subtitle>
        I'm a passionate{' '}
        <a rel="noreferrer" href="https://github.com/mikebarkmin">
          developer
        </a>{' '}
        and{' '}
        <a rel="noreferrer" href="https://snuniv.ac.in">
          student
        </a>{' '}
        at the Sister Nivedita University in Computer Science
        Education.
      </Subtitle>
    </Wrapper>
  </Content>
);

export default Hero;
