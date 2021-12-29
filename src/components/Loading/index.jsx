import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${props => props.isLoading ? 'flex' : 'none'};
  transition: opacity 1s;
`

const BaseLoading = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  border-radius: 5rem;
  margin: 2rem auto;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: inherit;
    animation: fade 1s forwards infinite linear;
  }
  @keyframes fade {
    to {
      transform: scale(3);
      opacity: 0;
    }
  }
`

function Loading({ isLoading }) {

  useEffect(() => {
    document.title = 'Loading...'
  }, []);

  return (
    <Wrapper isLoading={isLoading}>
      <BaseLoading></BaseLoading>
    </Wrapper>
  );
}

export default Loading;