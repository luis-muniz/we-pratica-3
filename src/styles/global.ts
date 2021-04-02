import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    /* Note: 1rem is equal to 10px */
    /* font-size: 62.5%; */
    font-family: 'Nunito';
  }

  html, body {
    height:100vh;
    width: 100vw;
  }

  body{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

`;

export default GlobalStyle;
