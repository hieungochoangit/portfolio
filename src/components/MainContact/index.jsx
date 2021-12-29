import React from 'react';
import styled from 'styled-components';
import { BsFacebook, BsGithub, BsTelegram, BsLinkedin } from 'react-icons/bs';

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
    display: inline-flex;
    margin: 10px 0;
    padding: 4px;

    &:first-of-type {
      margin-top: 24px;
    }

    &:last-of-type {
      margin-bottom: 24px;
    }

    @media (max-width: 500px) {
      &:first-of-type {
        margin-top: 10px;
      }
  
      &:last-of-type {
        margin-bottom: 10px;
      }
    }
  }

  svg {
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      fill: var(--primary-color);
    }
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
      <a href="https://web.telegram.org" target='_blank' rel="noreferrer">
        <BsTelegram title='Telegram' />
      </a>
      <a href="https://www.linkedin.com" target='_blank' rel="noreferrer">
        <BsLinkedin title='Linkedin' />
      </a>
      <a href="https://github.com" target='_blank' rel="noreferrer">
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