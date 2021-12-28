// Components
import Main from "./components/Main";
import About from "./components/Pages/About";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { darkTheme, lightTheme } from "./global/globalStyle";
import { useState } from "react";

// Routes
import { Routes, Route } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
