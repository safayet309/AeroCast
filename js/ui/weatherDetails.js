
// ========================================
// SkyCast — Weather Details UI
// File: js/ui/weatherDetails.js
// ========================================

/**
 * Render additional weather details.
 *
 * @param {object} details
 * @param {HTMLElement} container
 */
export function renderWeatherDetails(details, container) {
  if (!(container instanceof HTMLElement)) {
    throw new Error("A valid weather details container is required.");
  }

  const items = [
    {
      label: "Humidity",
      value: formatNumber(details?.humidity, "%"),
    },
    {
      label: "Wind Speed",
      value: formatNumber(details?.windSpeed, " km/h"),
    },
    {
      label: "Pressure",
      value: formatNumber(details?.pressure, " mb"),
    },
    {
      label: "UV Index",
      value: formatNumber(details?.uvIndex, ""),
    },
  ];

  const markup = items.map(({ label, value }) => `
    <article class="card weather-detail-item">
      <h3>${label}</h3>
      <p>${value}</p>
    </article>
  `).join("");

  container.innerHTML = `
    <section aria-labelledby="weather-details-title">
      <h2 id="weather-details-title">Weather Details</h2>
      <div class="grid">${markup}</div>
    </section>
  `;
}

/**
 * Format a numeric value, or show a placeholder if unavailable.
 *
 * @param {unknown} value
 * @param {string} suffix
 * @returns {string}
 */
function formatNumber(value, suffix) {
  if (
    typeof value !== "number" ||
    !Number.isFinite(value)
  ) {
    return "--";
  }

  return `${value}${suffix}`;
}
