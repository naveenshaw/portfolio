import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: 1.5rem;
  text-align: center;
  width: 100%;
  color: grey;
`;

function Footer() {
  return (
    <Wrapper>
      &copy;2020 | Made with &#10084;&#65039; Naveen Shaw.{' '}
      <a
        rel="noreferrer"
        href="https://github.com/naveen666/"
      >
        GitHub Repository
      </a>
    </Wrapper>
  );
}

export default Footer;
