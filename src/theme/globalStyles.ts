import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ;
    font-size: 16px;
  }

  input, button{
    font-size: 1rem;
  }
  h1,h2,h3,h4,h5, p {
    margin: 0;
  }

`;
 
export default GlobalStyle;