
// ========================================
// SkyCast — Location Search UI
// File: js/ui/search.js
// ========================================

import { normalizeLocationQuery } from "../api/locationApi.js";

/**
 * Render the location search form.
 *
 * @param {HTMLElement} container
 * @param {(location: string) => void | Promise<void>} onSearch
 */
export function renderSearch(container, onSearch) {
  if (!(container instanceof HTMLElement)) {
    throw new Error("A valid search container is required.");
  }

  if (typeof onSearch !== "function") {
    throw new Error("A search callback function is required.");
  }

  container.innerHTML = `
    <form class="row location-search-form">
      <label class="visually-hidden" for="skycast-location-input">
        Search city or location
      </label>

      <input
        class="input"
        id="skycast-location-input"
        name="location"
        type="search"
        placeholder="Enter a city..."
        maxlength="120"
        autocomplete="off"
        required
      >

      <button class="btn btn-primary" type="submit">
        Search
      </button>

      <p
        class="search-error"
        role="status"
        aria-live="polite"
        hidden
      ></p>
    </form>
  `;

  const form = container.querySelector("form");
  const input = container.querySelector("input");
  const errorMessage = container.querySelector(".search-error");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    errorMessage.hidden = true;
    errorMessage.textContent = "";

    let location;

    try {
      location = normalizeLocationQuery(input.value);
    } catch (error) {
      errorMessage.textContent = error.message;
      errorMessage.hidden = false;
      input.focus();
      return;
    }

    try {
      await onSearch(location);
    } catch (error) {
      errorMessage.textContent =
        error instanceof Error
          ? error.message
          : "Unable to search for this location.";

      errorMessage.hidden = false;
    }
  });
}
