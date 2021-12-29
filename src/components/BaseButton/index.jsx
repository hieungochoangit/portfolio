import React from 'react';
import styled from 'styled-components';
import BaseColorButton from '../BaseColorButton';

import BaseShadowButton from '../BaseShadowButton';

const ButtonBase = styled.button`
  font-size: ${props => props.small ? '16px' : '22px'};
  display: inline-block;
  margin: 4px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  outline: none;
`

function BaseButton({ text, small }) {
  return (
    <BaseShadowButton>
      <ButtonBase small={small}>
        <BaseColorButton>
          {text}
        </BaseColorButton>
      </ButtonBase>
    </BaseShadowButton>
  );
}

export default BaseButton;