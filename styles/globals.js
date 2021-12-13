import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
  }
  body {
    padding: 30px 8vw;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
  
  p {
    color: ${({ theme }) => theme.colour.text.light};
    line-height: 1.6;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .cPrimary {
    color: ${({ theme }) => theme.colour.primary.main}
  }
  
  .cSecondary {
    color: ${({ theme }) => theme.colour.secondary.main}
  }
  
  [class*="material-icons"] {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
    /* Support for IE. */
    font-feature-settings: 'liga';
  }

`;

export const gradient = css`
	background: ${({ theme }) =>
		`-moz-linear-gradient(90deg, ${theme.colour.primary.main} 0%, ${theme.colour.secondary.main} 100%)`};
	background: ${({ theme }) =>
		`-webkit-linear-gradient(90deg, ${theme.colour.primary.main} 0%, ${theme.colour.secondary.main} 100%)`};
	background: ${({ theme }) =>
		`linear-gradient(90deg, ${theme.colour.primary.main} 0%, ${theme.colour.secondary.main} 100%)`};
	filter: ${({ theme }) =>
		`progid:DXImageTransform.Microsoft.gradient(startColorstr="${theme.colour.primary.main}",endColorstr="${theme.colour.secondary.main}",GradientType=1)`};
`;

export default GlobalStyle;
