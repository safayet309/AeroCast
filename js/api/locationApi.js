
// ========================================
// SkyCast — Location API Helpers
// File: js/api/locationApi.js
// ========================================

/**
 * Validate and normalize a location search query.
 *
 * @param {string} query - City name or location.
 * @returns {string} Cleaned location query.
 */
export function normalizeLocationQuery(query) {
  if (typeof query !== "string") {
    throw new Error("Location must be text.");
  }

  const location = query.trim();

  if (!location) {
    throw new Error("Please enter a city or location.");
  }

  if (location.length > 120) {
    throw new Error("Location name is too long.");
  }

  return location;
}
