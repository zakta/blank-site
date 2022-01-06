// 3rd parties
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background: white;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-width: 320px;

    h2 {
      font-size: 40px;
      color: #1a3968;
      margin: 0;
      text-transform: uppercase;
      margin: 0;
      line-height: 50px;
    }

  }
`;

export default GlobalStyle;
