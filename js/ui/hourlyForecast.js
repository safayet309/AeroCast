
// ========================================
// SkyCast — Hourly Forecast UI
// File: js/ui/hourlyForecast.js
// ========================================

/**
 * Render hourly forecast items.
 *
 * @param {Array<object>} hours
 * @param {HTMLElement} container
 */
export function renderHourlyForecast(hours, container) {
  if (!(container instanceof HTMLElement)) {
    throw new Error("A valid hourly forecast container is required.");
  }

  if (!Array.isArray(hours) || hours.length === 0) {
    container.innerHTML = `
      <section class="card">
        <h2>Hourly Forecast</h2>
        <p>Hourly forecast is not available yet.</p>
      </section>
    `;
    return;
  }

  const items = hours
    .slice(0, 24)
    .map((hour) => {
      const time = escapeHTML(
        typeof hour.time === "string" ? hour.time : "--"
      );

      const temperature = Number.isFinite(hour.temperature)
        ? `${Math.round(hour.temperature)}°C`
        : "--°C";

      const condition = escapeHTML(
        typeof hour.condition === "string" ? hour.condition : "Unknown"
      );

      return `
        <article class="card hourly-forecast-item">
          <p>${time}</p>
          <p>${temperature}</p>
          <p>${condition}</p>
        </article>
      `;
    })
    .join("");

  container.innerHTML = `
    <section aria-labelledby="hourly-forecast-title">
      <h2 id="hourly-forecast-title">Hourly Forecast</h2>
      <div class="grid">${items}</div>
    </section>
  `;
}

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
