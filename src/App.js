// Components
import Main from "./components/Main";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { darkTheme, lightTheme } from "./global/globalStyle";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
