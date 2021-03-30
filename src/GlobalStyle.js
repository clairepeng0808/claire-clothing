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
    text-decoration: none;
    color: black;
    &:hover {
      color: gray;
    }
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
    padding: 16px 0px;
  }

  h1 {
    font-size:40px;
  }

  h2 {
    font-size:28px;
  }
`;

export default GlobalStyle;
