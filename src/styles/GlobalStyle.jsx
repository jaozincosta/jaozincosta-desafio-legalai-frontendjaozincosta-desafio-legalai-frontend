import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
  }

  body {
    background-color: #f5f7fa;
    color: #222;
  }

  input, button {
    padding: 14px 16px;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
  }

  input {
    background-color: #f0f0f0;
    transition: border 0.3s ease;
  }

  input:focus {
    border: 1px solid #007bff;
  }

  button {
    background-color: #007bff;
    color: white;
    font-weight: 600;
    border: none;
    transition: background 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  h1, h2, h3 {
    margin-bottom: 16px;
  }

  @media (max-width: 600px) {
    body {
      padding: 16px;
    }

    input, button {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
