import React from 'react';
import styled from 'styled-components';
import BaseColorButton from '../BaseColorButton';

import BaseShadowButton from '../BaseShadowButton';

const ButtonBase = styled.a`
  font-size: 22px;
  display: inline-block;
  margin: 4px;
  cursor: pointer;
  border-radius: 4px;
`

function Button({ text, type, href }) {
  return (
    <BaseShadowButton>
      <ButtonBase type={type} href={href}>
        <BaseColorButton>
          {text}
        </BaseColorButton>
      </ButtonBase>
    </BaseShadowButton>
  );
}

export default Button;