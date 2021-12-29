import React from 'react';
import styled from 'styled-components';
import BaseColorButton from '../BaseColorButton';

import BaseShadowButton from '../BaseShadowButton';

const ButtonBase = styled.a`
  font-size: ${props => props.small ? '16px' : '22px'};
  display: inline-block;
  margin: 4px;
  cursor: pointer;
  border-radius: 4px;
`

function Button({ text, type, href, small }) {
  return (
    <BaseShadowButton>
      <ButtonBase type={type} href={href} small={small}>
        <BaseColorButton>
          {text}
        </BaseColorButton>
      </ButtonBase>
    </BaseShadowButton>
  );
}

export default Button;