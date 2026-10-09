
// ========================================
// SkyCast — Daily Forecast UI
// File: js/ui/dailyForecast.js
// ========================================

/**
 * Render the daily weather forecast.
 *
 * @param {Array<object>} days
 * @param {HTMLElement} container
 */
export function renderDailyForecast(days, container) {
  if (!(container instanceof HTMLElement)) {
    throw new Error("A valid daily forecast container is required.");
  }

  if (!Array.isArray(days) || days.length === 0) {
    container.innerHTML = `
      <section class="card">
        <h2>7-Day Forecast</h2>
        <p>Daily forecast is not available yet.</p>
      </section>
    `;
    return;
  }

  const items = days.slice(0, 7).map((day) => {
    const date = escapeHTML(
      typeof day.date === "string" ? day.date : "--"
    );

    const condition = escapeHTML(
      typeof day.condition === "string" ? day.condition : "Unknown"
    );

    const maxTemperature = Number.isFinite(day.maxTemperature)
      ? `${Math.round(day.maxTemperature)}°`
      : "--°";

    const minTemperature = Number.isFinite(day.minTemperature)
      ? `${Math.round(day.minTemperature)}°`
      : "--°";

    return `
      <article class="card daily-forecast-item">
        <h3>${date}</h3>
        <p>${condition}</p>
        <p>
          <span aria-label="Maximum temperature">${maxTemperature}</span>
          /
          <span aria-label="Minimum temperature">${minTemperature}</span>
        </p>
      </article>
    `;
  }).join("");

  container.innerHTML = `
    <section aria-labelledby="daily-forecast-title">
      <h2 id="daily-forecast-title">7-Day Forecast</h2>
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
