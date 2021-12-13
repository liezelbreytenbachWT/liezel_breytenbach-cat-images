import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import theme from "../styles/theme";
import GlobalStyle from "../styles/globals";
import NavBubble from "../components/nav/navBubble";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
			<NavBubble />
		</ThemeProvider>
	);
}

export default MyApp;
