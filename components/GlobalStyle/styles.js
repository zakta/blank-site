// 3rd parties
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background: white;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-width: 320px;
    background: #f7f7f7;

    h2 {
      font-size: 40px;
      margin: 1.5rem 0;
      line-height: 50px;
    }

  }
`;

export default GlobalStyle;
