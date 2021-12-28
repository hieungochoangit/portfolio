// Components
import Main from "./components/Main";
import About from "./components/Pages/About";
import styled, { keyframes, ThemeProvider } from "styled-components";
import GlobalStyle, { darkTheme, lightTheme } from "./global/globalStyle";
import { useState } from "react";
import { BsArrowRepeat } from 'react-icons/bs';

// Routes
import { Routes, Route } from 'react-router-dom';

const ToggleThemeButton = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: inline;

  @media (max-width: 500px) {
    bottom: 14%;
  }

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

  svg {
    font-size: 40px;
    fill: var(--primary-color);
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
`

const ColorBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.text};
  margin: 2px 0;
  cursor: pointer;
  background: ${props => props.color};
`

function App() {
  const [theme, setTheme] = useState('dark');
  const [showPrimaryList, setshowPrimaryList] = useState(false);

  // Primary color list
  const primarys = ['red', 'blue', 'orange', 'green', 'pink'];

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

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
      </Routes>

      <ToggleThemeButton onChange={() => handleToggleTheme()}>
        <input type="checkbox" id="switch" className="switch-input"/>
        <label htmlFor="switch" className="switch"></label>
      </ToggleThemeButton>

      {/* Handle change primary color */}
      <SettingPrimaryColor onClick={handleToggleButtonChangePrimaryColor}>
        <BsArrowRepeat />
      </SettingPrimaryColor>

      <ListPrimaryColor showPrimaryList={showPrimaryList}>
        {primarys.map((color) => <ColorBox color={color} key={color} onClick={() => handleChangePrimaryColor(color)} />)}
      </ListPrimaryColor>
    </ThemeProvider>
  );
}

export default App;
