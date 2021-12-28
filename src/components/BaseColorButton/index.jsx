import React from 'react';
import styled from 'styled-components';

const BaseColor = styled.span`
  padding: 6px 20px;
  transition: 1s;
  background: -webkit-linear-gradient(left, var(--primary-color) , ${props => props.theme.text});
  background: linear-gradient(to right, var(--primary-color) , ${props => props.theme.text}); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    background: -webkit-linear-gradient(left, ${props => props.theme.text} , var(--primary-color));
    background: linear-gradient(to right, ${props => props.theme.text}, var(--primary-color)); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

function BaseColorButton({ children }) {
  return (
    <BaseColor>
      {children}
    </BaseColor>
  );
}

export default BaseColorButton;