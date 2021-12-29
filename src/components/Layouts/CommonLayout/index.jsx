import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 150px 10% 150px 10%;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding: 150px 5% 150px 5%;
  }
`

const SubTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  color: var(--primary-color);
`

const Title = styled(SubTitle)`
  font-size: 30px;
  color: ${props => props.theme.text};
  margin-bottom: 50px;
`

function CommonLayout({ children, title, subTitle }) {
  return (
    <Wrapper>
      <SubTitle>{subTitle}</SubTitle>
      <Title>{title}</Title>

      {children}
    </Wrapper>
  );
}

export default CommonLayout;