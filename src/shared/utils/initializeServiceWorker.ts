import { handleBeforeInstallPrompt } from "@/shared/utils/handleBeforeInstallPrompt";
import { handleFetchEvent } from "@/shared/utils/handleFetchEvent";
import { handleInstallEvent } from "@/shared/utils/handleInstallEvent";

export const useServiceWorker = () => {
  const initialize = () => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/server.js", {
            scope: ".",
          })
          .then(
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

    addEventListener("fetch", handleFetchEvent);

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("install", handleInstallEvent);

    return () => {
      removeEventListener("fetch", handleFetchEvent);
      // Clean up the event listener when the component unmounts
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  };

  return { initialize };
};
