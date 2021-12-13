import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @keyframes pop {
    0% {
      transform: scale(0);
    }
    75% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
  }
  body {
    padding: ${({ theme }) => theme.spacing.large} 8vw;
    color: ${({ theme }) => theme.colour.black};
  }
  
  * {
    box-sizing: border-box;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  h2, h3, h4, h5, h6 {
    line-height: 1.5;
  }
  h1 {
    line-height: 1.3;
    margin-bottom: ${({ theme }) => theme.spacing.normal};
  }
  h1 + h2 {
    margin-top: -${({ theme }) => theme.spacing.normal};
    margin-bottom: ${({ theme }) => theme.spacing.normal};
  }
  
  p {
    color: ${({ theme }) => theme.colour.text.main};
    line-height: 1.6;
  }
  
  a {
    color: inherit;
    text-decoration: none;
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
    font-size: 24px;
    display: inline-flex;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
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
