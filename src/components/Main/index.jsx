import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';

// Images
import HeroImage from '../../assets/img/hero.jpg';

// Routes
import Button from '../Button';
import BaseShadowButton from '../BaseShadowButton';

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

const HeroImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--primary-color);
  padding: 10px;
  transition: 1s;
  box-shadow: inset 3px 3px 3px var(--primary-color), inset -3px -3px 3px ${props => props.theme.text};

  &:hover {
    box-shadow: inset 3px 3px 3px ${props => props.theme.text}, inset -3px -3px 3px var(--primary-color);
  }

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
        <BaseShadowButton isRadius>
          <HeroImg>
            <img src={HeroImage} alt="" />
          </HeroImg>
        </BaseShadowButton>
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
    </MainSection>
  );
}

export default Main;