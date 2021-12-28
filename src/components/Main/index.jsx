import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';

// Icons
import { BsFacebook, BsGithub, BsTelegram, BsInstagram, BsMailbox } from 'react-icons/bs';

// Images
import HeroImage from '../../assets/img/hero.jpg';

const MainSection = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Nav = styled.nav`
  position: absolute;
  top: 2rem;
  width: calc(100vw - 4rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.h1`
  font-size: 40px;
`

const Bar = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`

const Line = styled.span`
  width: 100%;
  height: 4px;
  background: ${props => props.theme.text};

  &:nth-child(2) {
    width: 50%;
  }

  &:nth-child(3) {
    width: 10%;
  }
`

const Hero = styled.div`
  position: relative;
  tranform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  padding: 40px;

  &:after {
    position: absolute;
    content: '';
    width: 4px;
    height: 100px;
    background: ${props => props.theme.text};
    top: 0;
    left: 0;
  }

  &:before {
    position: absolute;
    content: '';
    width: 300px;
    height: 4px;
    background: ${props => props.theme.text};
    top: 0;
    left: 0;
  }

  div {
    margin: 0 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`

const HeroImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: 0.5s;

    &:hover {
      transform: scale(1.05);
    }
  }
`

const HeroIntro = styled.div`
  span {
    color: var(--primary-color);
  }

  p {
    font-style: italic;
  }

  &:after {
    position: absolute;
    content: '';
    width: 4px;
    height: 100px;
    background: ${props => props.theme.text};
    bottom: 0;
    right: 0;
  }

  &:before {
    position: absolute;
    content: '';
    width: 300px;
    height: 4px;
    background: ${props => props.theme.text};
    bottom: 0;
    right: 0;
  }
`

const Contact = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 0;
  display: flex;
  width: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  svg {
    margin: 10px 0;
    cursor: pointer;
    transition: 1s;

    &:hover {
      transform: translateX(20px);
    }
  }

  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    left: 0;
    font-size: 30px;

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

function Main(props) {
  return (
    <MainSection>
      {/* Nav */}
      <Nav>
        <Logo>Hieu</Logo>
        <Bar>
          <Line />
          <Line />
          <Line />
        </Bar>
      </Nav>

      {/* Intro */}
      <Hero>
        <HeroImg>
          <img src={HeroImage} alt="" />
        </HeroImg>
        <HeroIntro>
          <h1><span>Hi,</span> I'm HieuNgocHoang</h1>

          <Typical
            steps={["I'm a Frontend Developer ", 5000, "I'm a Copy - Paste Developer", 5000]}
            loop={Infinity}
          />
        </HeroIntro>
      </Hero>

      {/* Contact */}
      <Contact>
        <ContactLine />

        <BsMailbox title='Mail' />
        <BsInstagram title='Instagram' />
        <BsTelegram title='Telegram' />
        <BsGithub title='Github' />
        <BsFacebook title='Facebook' />

        <ContactLine />
      </Contact>
    </MainSection>
  );
}

export default Main;