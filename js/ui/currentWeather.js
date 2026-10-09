
// ========================================
// SkyCast — Current Weather UI
// File: js/ui/currentWeather.js
// ========================================

/**
 * Render the current weather card.
 *
 * @param {object} weather
 * @param {HTMLElement} container
 */
export function renderCurrentWeather(weather, container) {
  if (!(container instanceof HTMLElement)) {
    throw new Error("A valid weather container is required.");
  }

  const temperature = Number.isFinite(weather?.temperature)
    ? `${Math.round(weather.temperature)}°C`
    : "--°C";

  const condition =
    typeof weather?.condition === "string" &&
    weather.condition.trim()
      ? weather.condition
      : "Weather information unavailable";

  const feelsLike = Number.isFinite(weather?.feelsLike)
    ? `${Math.round(weather.feelsLike)}°C`
    : "--°C";

  container.innerHTML = `
    <section class="card" aria-labelledby="current-weather-title">
      <h2 id="current-weather-title">Current Weather</h2>

      <p class="current-weather-temperature">
        ${temperature}
      </p>

      <p>${escapeHTML(condition)}</p>

      <p>
        Feels like:
        <span>${feelsLike}</span>
      </p>
    </section>
  `;
}

/**
 * Escape text before inserting it into HTML.
 *
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}
