
// ========================================
// SkyCast — Weather API Client
// File: js/api/weatherApi.js
// ========================================

const API_PROXY_BASE_URL = "";
 
/**
 * Fetch weather data through the future secure API proxy.
 * The proxy URL will be configured in a later phase.
 */
export async function fetchWeatherData(location) {
  if (!location || !String(location).trim()) {
    throw new Error("Please provide a location.");
  }

  if (!API_PROXY_BASE_URL) {
    throw new Error(
      "Weather API proxy is not configured yet."
    );
  }

  const url = new URL(
    API_PROXY_BASE_URL,
    window.location.origin
  );

  url.searchParams.set("location", String(location).trim());

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(
      `Weather request failed (${response.status}).`
    );
  }

  return response.json();
}
