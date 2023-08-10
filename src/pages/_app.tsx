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


    const handleBeforeInstallPrompt = (event: any) => {
      // Prevent the default prompt
      event.preventDefault();
      // Store the event for later use
      const deferredPrompt = event;

      // Show your custom install button or UI
      const installButton = document.createElement("button");
      installButton.textContent = "Install App";
      installButton.addEventListener("click", () => {
        // Show the installation prompt
        deferredPrompt.prompt();
      });
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
