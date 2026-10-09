
// ========================================
// SkyCast — Location Service
// File: js/services/locationService.js
// ========================================

/**
 * Get the user's current GPS coordinates.
 *
 * The browser may ask the user for location permission.
 *
 * @returns {Promise<{latitude: number, longitude: number}>}
 */
export function getCurrentCoordinates() {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject(
        new Error("Geolocation is not supported by this browser.")
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        let message = "Unable to get your current location.";

        if (error.code === error.PERMISSION_DENIED) {
          message = "Location permission was denied.";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          message = "Your location is currently unavailable.";
        } else if (error.code === error.TIMEOUT) {
          message = "Getting your location took too long.";
        }

        reject(new Error(message));
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  });
}
