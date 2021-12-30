import React, { memo } from 'react';
import styled from 'styled-components';
import Progress from '../../Progress';

const Wrapper = styled.div``

function Skill(props) {

  // Skills
  const skills = [
    {
      id: 1,
      name: 'HTML',
      percent: 80,
    },
    {
      id: 2,
      name: 'CSS',
      percent: 60,
    },
    {
      id: 3,
      name: 'JS',
      percent: 50,
    },
    {
      id: 4,
      name: 'ReactJs',
      percent: 20,
    },
    {
      id: 5,
      name: 'PHP - Laravel',
      percent: 50,
    },
    {
      id: 6,
      name: 'Database (MySql, NoSql)',
      percent: 20,
    },
    {
      id: 7,
      name: 'Teamwork',
      percent: 80,
    },
    {
      id: 8,
      name: 'Uống bia, rượu',
      percent: 100,
    },
  ]

  return (
    <Wrapper>
      {skills.map((skill) => <Progress key={skill.id} skill={skill} />)}
    </Wrapper>
  );
}

export default memo(Skill);