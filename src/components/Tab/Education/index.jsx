import React from 'react';
import styled from 'styled-components';
import { BsFillBagCheckFill } from 'react-icons/bs';
import BaseShadowButton from '../../BaseShadowButton';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

const Line = styled.div`
  position: absolute;
  height: 100%;
  width: 1px;
  background: ${props => props.theme.text};
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;

  @media (max-width: 768px) {
    left: 0%;
  }
`

const TimelineItem = styled.div`
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  &:nth-child(odd) {
    padding-right: calc(50% + 50px);
    text-align: right;
    position: relative;

    @media (max-width: 768px) {
      left: 0px;
      padding-right: 0;
      padding-left: 50px;
      text-align: left;
    }
  }

  &:nth-child(even) {
    padding-left: calc(50% + 50px);
    text-align: left;
    position: relative;
    
    @media (max-width: 768px) {
      padding-left: 50px;
    }
  }

  &:nth-child(even):after {
    position: absolute;
    content: '';
    width: 50px;
    height: 1px;
    background: ${props => props.theme.text};
    top: 50%;
    right: calc(50% - 50px);

    @media (max-width: 768px) {
      left: 0px;
    }
  }

  &:nth-child(odd):after {
    position: absolute;
    content: '';
    width: 50px;
    height: 1px;
    background: ${props => props.theme.text};
    top: 50%;
    right: 50%;

    @media (max-width: 768px) {
      left: 0px;
    }
  }
`

const TimelineDetail = styled.div`
  padding: 20px;

  p {
    margin: 8px 0;
  }

  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    z-index: 5;
    width: 40px;
    height: 40px;
    border: 1px solid ${props => props.theme.text};;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    @media (max-width: 768px) {
      left: 0px;
    }

    svg {
      fill: var(--primary-color);
    }
  }
`

const TimelineTitle = styled.h4`
  color: var(--primary-color);
`

const Position = styled.h1`
  color: ${props => props.theme.text};
`

const Company = styled.h4`
  font-style: italic;
  text-transform: uppercase;
`

function Education(props) {
  return (
    <Wrapper>
      <Line />
      
      <TimelineItem>
        <BaseShadowButton>
          <TimelineDetail>
            <div><BsFillBagCheckFill /></div>
            <TimelineTitle>2020 - Present</TimelineTitle>
            <Position>F8 - Fullstack.edu.vn</Position>
            <Company>Self Learning</Company>
            <p>HTML, CSS, JS and more.</p>
          </TimelineDetail>
        </BaseShadowButton>
      </TimelineItem>
      <TimelineItem>
        <BaseShadowButton>
          <TimelineDetail>
            <div><BsFillBagCheckFill /></div>
            <TimelineTitle>2015 - 2020</TimelineTitle>
            <Position>ICTU University</Position>
            <Company>E-commerce majors.</Company>
            <p>Quit after 2 years</p>
          </TimelineDetail>
        </BaseShadowButton>
      </TimelineItem>
      <TimelineItem>
        <BaseShadowButton>
          <TimelineDetail>
            <div><BsFillBagCheckFill /></div>
            <TimelineTitle>2012 - 2015</TimelineTitle>
            <Position>Cho Don high school</Position>
            <Company>------</Company>
            <p>Graduated in 2015</p>
          </TimelineDetail>
        </BaseShadowButton>
      </TimelineItem>
    </Wrapper>
  );
}

export default Education;