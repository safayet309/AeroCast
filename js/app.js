
// ========================================
// SkyCast — Application Entry Point
// File: js/app.js
// ========================================

import { APP_CONFIG } from "./config/config.js";

function initializeApp() {
  const app = document.getElementById("app");

  if (!app) {
    console.error("SkyCast: App container was not found.");
    return;
  }

  console.info(`${APP_CONFIG.appName} initialized successfully.`);
}

initializeApp();
