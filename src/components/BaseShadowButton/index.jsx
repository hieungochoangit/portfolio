import React from 'react';
import styled from 'styled-components';

const BaseShadow = styled.div`
  display: ${props => props.isBlock ? 'block' : 'inline-block'};
  transition: 1s;
  border-radius: ${props => props.isRadius ? '50%' : '4px'};
  box-shadow: var(--primary-color) 3px 3px 0px 0px, ${props => props.theme.text} calc(-3px) calc(-3px) 0px 0px;

  &:hover {
    box-shadow: ${props => props.theme.text} 3px 3px 0px 0px, var(--primary-color) calc(-3px) calc(-3px) 0px 0px;
  }
`

function BaseShadowButton({ children, isRadius, isBlock }) {
  return (
    <BaseShadow isRadius={isRadius} isBlock={isBlock}>
      {children}
    </BaseShadow>
  );
}

export default BaseShadowButton;