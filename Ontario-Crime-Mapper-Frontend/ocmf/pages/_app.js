import "../styles/globals.css";
import { AuthProvider } from "../context/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { Providers } from "../Provider/Provider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Providers>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Providers>
    </>
  );
}

export default MyApp;
