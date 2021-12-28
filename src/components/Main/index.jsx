import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';

// Icons
import { BsFacebook, BsGithub, BsTelegram, BsInstagram, BsMailbox, BsArrowBarRight } from 'react-icons/bs';

// Images
import HeroImage from '../../assets/img/hero.jpg';

// Routes
import { Link } from 'react-router-dom';
import Button from '../Button';

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
    margin-bottom: 14px;
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

const Center = styled.div`
  text-align: center;
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

const Menu = styled.div`
  position: fixed;
  right: 0;
  padding: 20px;
  width: 400px;
  background: ${props => props.theme.body};
  height: 100vh;
  z-index: 10;
  transition: all 1s;
  box-shadow: -10px 0px 10px 0px ${props => props.showMenu ? props.theme.text : props.theme.body};
  transform: translateX(${props => props.showMenu ? '0%' : '100%'});

  @media (max-width: 768px) {
    width: 100%;
    box-shadow: none;
  }

  svg {
    font-size: 24px;
    color: ${props => props.theme.text};
    cursor: pointer;
  }

  a {
    display: block;
    text-align: right;
    padding: 10px;
    font-size: 30px;
    transition: 0.8s;

    @media (max-width: 768px) {
      text-align: center;
    }

    &:hover span {
      color: var(--primary-color);
    }

    &:hover span:after, &:hover span:before {
      width: 50%;
    }

    span {
      position: relative;
      transition: 0.8s;
      font-family: 'Shizuru', cursive;

      &:after {
        position: absolute;
        transition: 1s;
        content: '';
        width: 0%;
        height: 2px;
        background: var(--primary-color);
        bottom: 0;
        right: 0;
      }

      &:before {
        position: absolute;
        transition: 1s;
        content: '';
        width: 0%;
        height: 2px;
        background: var(--primary-color);
        top: 0;
        left: 0;
      }
    }
  }
`

function Main(props) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.title = 'Hoàng Ngọc Hiếu - hieuhn'
  }, []);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <MainSection>
      {/* Nav */}
      <Nav>
        <Logo>Hieu</Logo>
        <Bar onClick={handleToggleMenu}>
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

          <Center>
            <Button text='More About Me' type='link' href='/about' />
          </Center>
        </HeroIntro>
      </Hero>

      {/* Contact */}
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
        <a href="https://github.com/hieungochoangit" target='_blank' rel="noreferrer">
          <BsGithub title='Github' />
        </a>
        <a href="https://www.facebook.com/hoangngochieu97/" target='_blank' rel="noreferrer">
          <BsFacebook title='Facebook' />
        </a>

        <ContactLine />
      </Contact>

      <Menu showMenu={showMenu}>
        <BsArrowBarRight onClick={handleToggleMenu} />

        <Link to='/about'>
          <span>About me</span>
        </Link>
        <Link to='/service'>
          <span>Services</span>
        </Link>
        <Link to='/portfolio'>
          <span>Portfolio</span>
        </Link>
        <Link to='/contact'>
          <span>Contact</span>
        </Link>
      </Menu>
    </MainSection>
  );
}

export default Main;