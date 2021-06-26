import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../public/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    colors: {
      heading: {
        100: "#ffbf28",
      },
      body: {
        100: "#2a2e32",
      },
    },
  });

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
