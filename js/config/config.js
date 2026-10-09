const SUPPORTED_LANGUAGES = Object.freeze(["en", "bn"]);

export const APP_CONFIG = Object.freeze({
appName: "AeroCast",
defaultUnit: "celsius",
defaultLanguage: "en",
supportedLanguages: SUPPORTED_LANGUAGES,
forecastDays: 7,
storagePrefix: "aerocast:",
weatherProvider: "WeatherAPI",
features: Object.freeze({
currentWeather: true,
hourlyForecast: true,
dailyForecast: true,
locationSearch: true,
geolocation: true,
favorites: true,
recentLocations: true,
notifications: true,
offlineSupport: true
})
});
