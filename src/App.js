// Components
import Main from "./components/Main";
import About from "./components/Pages/About";
import MainNav from "./components/MainNav";
import MainContact from "./components/MainContact";
import styled, { keyframes, ThemeProvider } from "styled-components";
import GlobalStyle, { darkTheme, lightTheme } from "./global/globalStyle";
import { useEffect, useState } from "react";
import { IoSettings } from 'react-icons/io5';

// Routes
import { Routes, Route } from 'react-router-dom';
import Loading from "./components/Loading";
import Contact from "./components/Pages/Contact";
import Service from "./components/Pages/Service";
import Portfolio from "./components/Pages/Portfolio";
import ParticleBackground from "./components/ParticleBackground";

const Wrapper = styled.div``

const ToggleThemeButton = styled.div`
  background: transparent;
  transform: rotate(90deg);
  margin-top: 26px;

  .switch {
    position: relative;
    cursor: pointer;
    width: 80px;
    height: 40px;
    display: block;
    margin: 0 auto;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 100rem;
    transition: background-color 0.25s linear;
    background: ${props => props.theme.text}
  }

  .switch:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 4rem;
    background-color: #333;
    top: 5px;
    left: 5px;
    transition: background-color 0.25s linear, transform 0.25s linear;
  }

  .switch-input {
    display: none;
  }

  .switch-input:checked + .switch {
    background-color: #333;
  }

  .switch-input:checked + .switch:after {
    transform: translateX(40px);
    background-color: white;
  }
`

const rotateKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const SettingPrimaryColor = styled.span`
  position: fixed;
  right: 10px;
  top: 100px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotateKeyframes} 2s linear infinite;
  background: transparent;
  z-index: 2;

  svg {
    font-size: 40px;
    fill: var(--primary-color);
    background: transparent;
  }
`

const ListPrimaryColor = styled.div`
  position: fixed;
  top: 160px;
  right: 10px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1s;
  transform: ${props => props.showPrimaryList ? 'translateX(0)' : 'translateX(150%)'};
  background: transparent;
  z-index: 2;

  div:first-child {
    font-size: 12px;
    text-align: center;
  }
`

const ColorBox = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${props => props.theme.body};
  margin: 2px 0;
  cursor: pointer;
  background: ${props => props.color};
`

function App() {
  const [theme, setTheme] = useState('dark');
  const [showPrimaryList, setshowPrimaryList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Primary color list
  const primarys = ['red', 'blue', 'orange', 'green', 'pink'];

  // Get random primary color
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * primarys.length);
    document.documentElement.style.setProperty('--primary-color', primarys[randomIndex]);
  }, []);

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const handleToggleButtonChangePrimaryColor = () => {
    setshowPrimaryList(!showPrimaryList);
  };

  const handleChangePrimaryColor = (color) => {
    document.documentElement.style.setProperty('--primary-color', color);
    setshowPrimaryList(!showPrimaryList);
  }

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 3000)
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />

      {isLoading ? <Loading isLoading={isLoading} /> : (
        <Wrapper>
          <ParticleBackground />
          {/* Nav */}
          <MainNav />

          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
          </Routes>

          {/* Contact */}
          <MainContact />

          {/* Handle change primary color */}
          <SettingPrimaryColor onClick={handleToggleButtonChangePrimaryColor}>
            <IoSettings />
          </SettingPrimaryColor>

          <ListPrimaryColor showPrimaryList={showPrimaryList}>
            <div>Theme Colors</div>
            <div style={{ background: 'transparent' }}>
              {primarys.map((color) => <ColorBox color={color} key={color} onClick={() => handleChangePrimaryColor(color)} />)}
            </div>

            {/* Toggle Theme */}
            <ToggleThemeButton onChange={() => handleToggleTheme()}>
              <input type="checkbox" id="switch" className="switch-input"/>
              <label htmlFor="switch" className="switch"></label>
            </ToggleThemeButton>
          </ListPrimaryColor>
        </Wrapper>
      )}
    </ThemeProvider>
  );
}

export default App;
