import { handleBeforeInstallPrompt } from "@/shared/utils/handleBeforeInstallPrompt";
import { handleInstallEvent } from "@/shared/utils/handleInstallEvent";
import { handleFetchEvent } from "@/shared/utils/handleFetchEvent";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/server.js").then(
          (registration) => {
            console.log(
              "Service Worker registered with scope:",
              registration.scope
            );
          },
          (error) => {
            console.error("Service Worker registration failed:", error);
          }
        );
      });
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("install", handleInstallEvent);
    window.addEventListener("fetch", handleFetchEvent);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
