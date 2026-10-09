
/*
 * SkyCast — Central App Configuration
 * File: js/config/config.js
 */

// সাধারণ অ্যাপ সেটিংস এখানে থাকবে।
// আসল WeatherAPI key কখনো frontend JavaScript-এ রাখবেন না।

export const APP_CONFIG = Object.freeze({
  appName: "SkyCast",
  defaultUnit: "celsius",
  defaultLanguage: "en",
  supportedLanguages: ["en", "bn"],
});
