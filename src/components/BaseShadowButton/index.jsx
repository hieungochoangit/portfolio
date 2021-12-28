import React from 'react';
import styled from 'styled-components';

const BaseShadow = styled.div`
  display: inline-block;
  transition: 1s;
  border-radius: 4px;
  box-shadow: var(--primary-color) 3px 3px 0px 0px, ${props => props.theme.text} calc(-3px) calc(-3px) 0px 0px;

  &:hover {
    box-shadow: ${props => props.theme.text} 3px 3px 0px 0px, var(--primary-color) calc(-3px) calc(-3px) 0px 0px;
  }
`

function BaseShadowButton({ children }) {
  return (
    <BaseShadow>
      {children}
    </BaseShadow>
  );
}

export default BaseShadowButton;