import "../styles/globals.css";
import { NextUIProvider } from "../providers/nextui.provider";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
