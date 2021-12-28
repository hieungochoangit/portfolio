import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.a`
  font-size: 22px;
  display: inline-block;
  padding: 6px 20px;
  margin: 4px;
  cursor: pointer;
  border-radius: 50px;
  transition: 1s;
  box-shadow: inset 3px 3px 3px ${props => props.theme.text}, inset -3px -3px 3px var(--primary-color);
  background: -webkit-linear-gradient(left, var(--primary-color) , ${props => props.theme.text});
  background: linear-gradient(to right, var(--primary-color) , ${props => props.theme.text}); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    box-shadow: inset 3px 3px 3px var(--primary-color), inset -3px -3px 3px ${props => props.theme.text};
    background: -webkit-linear-gradient(left, ${props => props.theme.text} , var(--primary-color));
    background: linear-gradient(to right, ${props => props.theme.text}, var(--primary-color)); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

function Button({ text, type, href }) {
  return (
    <ButtonBase type={type} href={href}>
      {text}
    </ButtonBase>
  );
}

export default Button;