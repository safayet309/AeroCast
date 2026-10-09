
// ========================================
// SkyCast — Local Storage Service
// File: js/services/storageService.js
// ========================================

const STORAGE_PREFIX = "skycast:";

/**
 * Save a value in browser storage.
 *
 * @param {string} key
 * @param {unknown} value
 * @returns {boolean} Whether saving succeeded.
 */
export function saveToStorage(key, value) {
  try {
    localStorage.setItem(
      `${STORAGE_PREFIX}${key}`,
      JSON.stringify(value)
    );

    return true;
  } catch (error) {
    console.error("SkyCast: Could not save data.", error);
    return false;
  }
}

/**
 * Read a value from browser storage.
 *
 * @param {string} key
 * @param {unknown} fallback
 * @returns {unknown}
 */
export function readFromStorage(key, fallback = null) {
  try {
    const storedValue = localStorage.getItem(
      `${STORAGE_PREFIX}${key}`
    );

    if (storedValue === null) {
      return fallback;
    }

    return JSON.parse(storedValue);
  } catch (error) {
    console.error("SkyCast: Could not read stored data.", error);
    return fallback;
  }
}

/**
 * Remove a saved value.
 *
 * @param {string} key
 * @returns {boolean} Whether removal succeeded.
 */
export function removeFromStorage(key) {
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
    return true;
  } catch (error) {
    console.error("SkyCast: Could not remove stored data.", error);
    return false;
  }
}
