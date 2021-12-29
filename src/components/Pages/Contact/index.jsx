import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 150px 10% 150px 10%;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding: 150px 5% 150px 5%;
  }
`

function Contact(props) {
  return (
    <Wrapper>
      contact
    </Wrapper>
  );
}

export default Contact;