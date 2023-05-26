import "../styles/globals.css";
import { AuthProvider } from "../context/AuthProvider";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
