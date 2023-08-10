export const handleBeforeInstallPrompt = (event) => {
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

  // Add the install button to your UI
  // For example, you can append it to a specific element in your HTML
  const installButtonContainer = document.getElementById(
    "install-button-container"
  );
  if (installButtonContainer) {
    installButtonContainer.replaceChildren(installButton);
    // installButtonContainer.appendChild(installButton);
  }
};
