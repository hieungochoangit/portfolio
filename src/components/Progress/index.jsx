import React from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
  margin-bottom: 24px;
`

const Header = styled.div`
  display: flex;
  margin-bottom: 4px;
  position: relative;

  p {
    position: absolute;
    left: ${props => props.percent}%;
    transform: translateX(-${props => props.percent}%);

    @media (max-width: 768px) {
      left: 100%;
      transform: translateX(-100%);
    }
  }
`

const ProgressLine = styled.div`
  height: 20px;
  border-radius: 10px;
  background: ${props => props.theme.text};
  padding: 6px;
  box-shadow: inset 3px 3px 3px var(--primary-color), inset -3px -3px 3px ${props => props.theme.text};
`

const ProgressPercent = styled.div`
  height: 100%;
  border-radius: 10px;
  width: ${props => props.percent}%;
  background: ${props => props.theme.body};
`

function Progress({ skill }) {
  return (
    <ProgressBar>
      <Header percent={skill.percent}>
        <span>{skill.name}</span>
        <p>{skill.percent}%</p>
      </Header>
      <ProgressLine>
        <ProgressPercent percent={skill.percent}></ProgressPercent>
      </ProgressLine>
    </ProgressBar>
  );
}

export default Progress;