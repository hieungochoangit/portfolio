import React, { useEffect } from 'react';
import styled from 'styled-components';
import CommonLayout from '../../Layouts/CommonLayout';
import BaseShadowButton from '../../BaseShadowButton';
import { BsFillPhoneVibrateFill, BsMailbox2 } from 'react-icons/bs';
import { IoLocation } from 'react-icons/io5';

const Content = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
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
  padding: 50px;
  text-align: center;

  svg {
    font-size: 30px;
    fill: var(--primary-color);
  }
`

const TitleBox = styled.h3`
  text-align: center;
  margin: 10px 0;
`

const ContentBox = styled.p`
  text-align: center;
`

function Contact(props) {

  useEffect(() => {
    document.title = 'Contact - hieuhn'
  }, []);

  return (
    <CommonLayout subTitle='Contact' title='GET IN TOUCH'>
      <Content>
        <BoxWidth>
          <BaseShadowButton isBlock>
            <Box>
              <BsFillPhoneVibrateFill />
              <TitleBox>Phone</TitleBox>
              <ContentBox>
                0347 4703 96
              </ContentBox>
            </Box>
          </BaseShadowButton>
        </BoxWidth>
        <BoxWidth>
          <BaseShadowButton isBlock>
            <Box>
              <BsMailbox2 />
              <TitleBox>Mail</TitleBox>
              <ContentBox>
                hieungochoangit@gmail.com
              </ContentBox>
            </Box>
          </BaseShadowButton>
        </BoxWidth>
        <BoxWidth>
          <BaseShadowButton isBlock>
            <Box>
              <IoLocation />
              <TitleBox>Address</TitleBox>
              <ContentBox>
                My Dinh, Nam Tu Liem, Ha Noi
              </ContentBox>
            </Box>
          </BaseShadowButton>
        </BoxWidth>
      </Content>
    </CommonLayout>
  );
}

export default Contact;