
// ========================================
// SkyCast — Dynamic Weather Background
// File: js/ui/background.js
// ========================================

/**
 * Update the page theme based on weather and daylight.
 *
 * @param {string} condition - Weather condition, e.g. "Sunny".
 * @param {boolean} isDay - Whether it is daytime.
 */
export function updateWeatherBackground(condition, isDay = true) {
  const body = document.body;

  if (!body) {
    return;
  }

  const weather = String(condition || "").toLowerCase();

  // Remove the previous weather theme.
  body.classList.remove(
    "weather-day",
    "weather-night",
    "weather-cloudy",
    "weather-rainy",
    "weather-snowy",
    "weather-stormy"
  );

  if (!isDay) {
    body.classList.add("weather-night");
    return;
  }

  if (weather.includes("thunder") || weather.includes("storm")) {
    body.classList.add("weather-stormy");
  } else if (
    weather.includes("rain") ||
    weather.includes("drizzle")
  ) {
    body.classList.add("weather-rainy");
  } else if (
    weather.includes("snow") ||
    weather.includes("sleet") ||
    weather.includes("ice")
  ) {
    body.classList.add("weather-snowy");
  } else if (
    weather.includes("cloud") ||
    weather.includes("overcast") ||
    weather.includes("mist") ||
    weather.includes("fog")
  ) {
    body.classList.add("weather-cloudy");
  } else {
    body.classList.add("weather-day");
  }
}
