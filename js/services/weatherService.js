
// ========================================
// SkyCast — Weather Service
// File: js/services/weatherService.js
// ========================================

import { fetchWeatherData } from "../api/weatherApi.js";
import { normalizeLocationQuery } from "../api/locationApi.js";

/**
 * Get weather information for a selected location.
 *
 * @param {string} location - City or location name.
 * @returns {Promise<object>} Weather data from the API.
 */
export async function getWeatherForLocation(location) {
  const normalizedLocation = normalizeLocationQuery(location);

  try {
    return await fetchWeatherData(normalizedLocation);
  } catch (error) {
    console.error("SkyCast weather service error:", error);
    throw error;
  }
}
