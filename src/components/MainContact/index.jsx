import React from 'react';
import styled from 'styled-components';
import { BsFacebook, BsGithub, BsTelegram, BsInstagram, BsMailbox, BsLinkedin } from 'react-icons/bs';

const Contact = styled.div`
  position: fixed;
  left: 2rem;
  bottom: 0;
  display: flex;
  width: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  a {
    display: inline-block;
    margin: 4px 0;
  }

  svg {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    left: 0;
    font-size: 30px;
    position: fixed;
    bottom: 0;
    width: 100%;

    svg {
      &:hover {
        transform: translateX(0);
      }
    }
  }
`

const ContactLine = styled.div`
  width: 4px;
  height: 100px;
  background: ${props => props.theme.text}
`

function MainContact(props) {
  return (
    <Contact>
      <ContactLine />
      <a href="https://github.com/hieungochoangit" target='_blank' rel="noreferrer">
        <BsMailbox title='Mail' />
      </a>
      <a href="https://github.com/hieungochoangit" target='_blank' rel="noreferrer">
        <BsInstagram title='Instagram' />
      </a>
      <a href="https://github.com/hieungochoangit" target='_blank' rel="noreferrer">
        <BsTelegram title='Telegram' />
      </a>
      <a href="https://www.linkedin.com/in/hieungochoang/" target='_blank' rel="noreferrer">
        <BsLinkedin title='Linkedin' />
      </a>
      <a href="https://github.com/hieungochoangit" target='_blank' rel="noreferrer">
        <BsGithub title='Github' />
      </a>
      <a href="https://www.facebook.com/hoangngochieu97/" target='_blank' rel="noreferrer">
        <BsFacebook title='Facebook' />
      </a>

      <ContactLine />
    </Contact>
  );
}

export default MainContact;