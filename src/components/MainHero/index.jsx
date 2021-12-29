import React from 'react';
import BaseShadowButton from '../BaseShadowButton';
import HeroImage from '../../assets/img/hero.jpg';
import styled from 'styled-components';

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

function MainHero(props) {
  return (
    <BaseShadowButton isRadius>
      <HeroImg>
        <img src={HeroImage} alt="" />
      </HeroImg>
    </BaseShadowButton>
  );
}

export default MainHero;