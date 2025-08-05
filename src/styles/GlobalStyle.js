import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: #f5f7fa;
    color: #333;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #388e3c;
  }

  input, select {
    padding: 0.4rem;
    margin: 0.3rem 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  h2 {
    margin-bottom: 1rem;
  }
`;



export default GlobalStyle;