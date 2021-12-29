import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';

// Routes
import BaseButton from '../BaseButton';
import MainHero from '../MainHero';
import { Link } from 'react-router-dom';

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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`

const HeroIntro = styled.div`
  margin: 10px 20px 0 20px;

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

function Main(props) {
  useEffect(() => {
    document.title = 'Hoàng Ngọc Hiếu - hieuhn'
  }, []);

  return (
    <MainSection>

      {/* Intro */}
      <Hero>
        <MainHero />
        <HeroIntro>
          <h1><span>Hi,</span> I'm HieuNgocHoang</h1>

          <Typical
            steps={["I'm a Frontend Developer ", 7000, "I'm a Copy - Paste Developer", 5000]}
            loop={Infinity}
          />

          <Center>
            <Link to='/about'>
              <BaseButton text='More About Me' />
            </Link>
          </Center>
        </HeroIntro>
      </Hero>
    </MainSection>
  );
}

export default Main;