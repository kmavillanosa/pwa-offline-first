import { useServiceWorker } from "@/shared/utils/initializeServiceWorker";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { initialize } = useServiceWorker();

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
