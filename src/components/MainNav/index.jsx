import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsArrowBarRight } from 'react-icons/bs';

const Nav = styled.nav`
  position: absolute;
  top: 2rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  padding: 0 2rem;
`

const Logo = styled.h1`
  font-size: 40px;
  color: var(--primary-color);
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

function MainNav(props) {
  
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <Nav>
        <Logo>Hieu</Logo>
        <Bar onClick={handleToggleMenu}>
          <Line />
          <Line />
          <Line />
        </Bar>
      </Nav>

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
    </>
  );
}

export default MainNav;