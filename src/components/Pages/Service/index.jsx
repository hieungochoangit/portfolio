import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'react-tabs/style/react-tabs.css';
import CommonLayout from '../../Layouts/CommonLayout';
import BaseShadowButton from '../../BaseShadowButton';

import { BsFillPhoneFill, BsFillLaptopFill, BsCodeSlash, BsFillBellFill, BsFillMouse2Fill, BsFillLockFill } from 'react-icons/bs';

const Content = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
`

const BoxWidth = styled.div`
  width: 33.333%;
  margin: 0 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 20px 0;
  }
`

const Box = styled.div`
  text-align: center;
  padding: 50px;

  &:hover svg {
    fill: var(--primary-color);
  }

  svg {
    transition: 0.5s;
    font-size: 30px;
  }
`

const TitleBox = styled.h3`
  margin: 10px 0;
`

function Service(props) {

  useEffect(() => {
    document.title = 'Service - hieuhn'
  }, []);

  return (
    <CommonLayout subTitle='Services' title='What I do'>
      <Content>
        <BoxWidth>
          <BaseShadowButton isBlock>
            <Box>
              <BsFillPhoneFill />
              <TitleBox>Responsive Design</TitleBox>
            </Box>
          </BaseShadowButton>
        </BoxWidth>
        <BoxWidth>
          <BaseShadowButton isBlock>
            <Box>
              <BsFillLaptopFill />
              <TitleBox>Clean Code</TitleBox>
            </Box>
          </BaseShadowButton>
        </BoxWidth>
        <BoxWidth>
          <BaseShadowButton isBlock>
            <Box>
              <BsCodeSlash />
              <TitleBox>Web Development</TitleBox>
            </Box>
          </BaseShadowButton>
        </BoxWidth>
      </Content>
      <Content>
        <BoxWidth>
          <BaseShadowButton isBlock>
            <Box>
              <BsFillBellFill />
              <TitleBox>Great Support</TitleBox>
            </Box>
          </BaseShadowButton>
        </BoxWidth>
        <BoxWidth>
          <BaseShadowButton isBlock>
            <Box>
              <BsFillMouse2Fill />
              <TitleBox>Fast</TitleBox>
            </Box>
          </BaseShadowButton>
        </BoxWidth>
        <BoxWidth>
          <BaseShadowButton isBlock>
            <Box>
              <BsFillLockFill />
              <TitleBox>Security</TitleBox>
            </Box>
          </BaseShadowButton>
        </BoxWidth>
      </Content>
    </CommonLayout>
  );
}

export default Service;