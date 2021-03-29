import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  img {
    display:block;
    max-width:100%;
    height:auto; 
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }

  li {
    list-style: none;
  }

  html,
  body {
    ${
      '' /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft JhengHei", Roboto, "Helvetica Neue", Arial, sans-serif; */
    }
    font-family:'Lato', sans-serif;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
  }
`;

export default GlobalStyle;
