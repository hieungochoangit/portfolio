import React, { useEffect } from 'react';
import styled from 'styled-components';
import BaseButton from '../../BaseButton';
import MainHero from '../../MainHero';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Skill from '../../Tab/Skill';
import Experience from '../../Tab/Experience';
import Education from '../../Tab/Education';
import CommonLayout from '../../Layouts/CommonLayout';
import { Link } from 'react-router-dom';

const Content = styled.div`
  display: flex;
  place-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Information = styled.div`
  margin-left: 20px;

  span {
    font-weight: 500;
  }

  p {
    font-size: 18px;
    line-height: 1.8;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const Action = styled.div`
  margin: 30px 0;

  & > div:first-child {
    margin-right: 20px;
    margin-bottom: 10px;
  }
`

function About(props) {

  useEffect(() => {
    document.title = 'About me - hieuhn'
  }, []);

  return (
    <CommonLayout subTitle='Main Info' title='About Me'>
      <Content>
        <MainHero />
        <Information>
          <p><span>Hi! My name is Hieu. I am a Web Developer.</span> I'm a web developer with over 99 year of experience building user interfaces. Passionate about web design and optimizing the experience on mobile devices.</p>
          <br></br>
          <p>In addition, I am also a server-side web developer using PHP with 99 months of experience. Experienced in SEO, skilled in creating attractive websites. Committed to customers and products at every level.</p>

          <Action>
            <BaseButton text='Download CV' />
            <Link to="/contact">
              <BaseButton text='Hire Me' />
            </Link>
          </Action>
        </Information>
      </Content>

      <Tabs>
        <TabList>
          <Tab>
            <BaseButton text='Skills' small />
          </Tab>
          <Tab>
            <BaseButton text='Experience' small />
          </Tab>
          <Tab>
            <BaseButton text='Education' small />
          </Tab>
        </TabList>

        <TabPanel>
          <Skill />
        </TabPanel>
        <TabPanel>
          <Experience />
        </TabPanel>
        <TabPanel>
          <Education />
        </TabPanel>
      </Tabs>
    </CommonLayout>
  );
}

export default About;