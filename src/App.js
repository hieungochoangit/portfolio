// Components
import Main from "./components/Main";
import About from "./components/Pages/About";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle, { darkTheme, lightTheme } from "./global/globalStyle";
import { useState } from "react";

// Routes
import { Routes, Route } from 'react-router-dom';

const ToggleThemeButton = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: inline;

  @media (max-width: 500px) {
    bottom: 50%;
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

function App() {
  const [theme, setTheme] = useState('dark');

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? lightTheme : darkTheme}>
      <GlobalStyle />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
      </Routes>

      <ToggleThemeButton onChange={() => handleToggleTheme()}>
        <input type="checkbox" id="switch" className="switch-input"/>
        <label htmlFor="switch" className="switch"></label>
      </ToggleThemeButton>
    </ThemeProvider>
  );
}

export default App;
