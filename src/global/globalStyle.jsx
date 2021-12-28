import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: orange;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
  }

  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }
`;

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  primary: 'orange',
}
export const darkTheme = {
  body: 'black',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  primary: 'orange',
}
 
export default GlobalStyle;