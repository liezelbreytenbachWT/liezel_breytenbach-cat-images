import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import theme from "../styles/theme";
import GlobalStyle from "../styles/globals";
import NavBubble from "../components/nav/navBubble";

const FAVOURITES_PATH = "/favourites";

const bubbleRoutes = {
	home: {
		path: "/",
		label: "Home",
		icon: "cottage",
	},
	favourites: {
		path: FAVOURITES_PATH,
		label: "Favourites",
		icon: "favorite",
	},
};

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const bubbleRoute =
		router.pathname === FAVOURITES_PATH
			? bubbleRoutes.home
			: bubbleRoutes.favourites;
	const { path, label, icon } = bubbleRoute;
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
			<NavBubble path={path} label={label} icon={icon} />
		</ThemeProvider>
	);
}

export default MyApp;
