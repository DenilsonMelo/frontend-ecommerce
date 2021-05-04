import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --white: #FFF;

    --primary: #3167EB;
  
    --gray-50: #F7F8FA;
    --gray-75: #F2F2F2;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-400: #969696;
    --gray-500: #808080;
    --gray-700: #5B5B5B;
    --gray-800: #494D4B;

    --black-900: #111111;

  }

  @media (max-width: 1366px) {
    html {
      font-size: 80%;
    }
  }

  @media (max-width: 1080px){
    html{
        font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html{
        font-size: 87.5%;
    }
  }

  body{
      background: var(--white);
  }

  body, input, textarea, button{
    font: 500 1rem Inter, sans-serif;
    color: var(--gray-500);
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 600;
    color: var(--black-900);
  }

  h1{
    font-size: 2rem;
  }

  h2{
    font-size: 1.5rem;
  }

  button{
    cursor: pointer;
  }
`;