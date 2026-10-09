
// ========================================
// SkyCast — Notification Service
// File: js/services/notificationService.js
// ========================================

/**
 * Check whether browser notifications are supported.
 *
 * @returns {boolean}
 */
export function areNotificationsSupported() {
  return (
    "Notification" in window &&
    "serviceWorker" in navigator
  );
}

/**
 * Request permission before showing notifications.
 *
 * @returns {Promise<NotificationPermission | "unsupported">}
 */
export async function requestNotificationPermission() {
  if (!("Notification" in window)) {
    return "unsupported";
  }

  if (Notification.permission === "granted") {
    return "granted";
  }

  if (Notification.permission === "denied") {
    return "denied";
  }

  return Notification.requestPermission();
}

/**
 * Show a notification after permission has been granted.
 *
 * @param {string} title
 * @param {string} body
 * @returns {Promise<boolean>}
 */
export async function showNotification(title, body) {
  if (!areNotificationsSupported()) {
    return false;
  }

  if (Notification.permission !== "granted") {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;

    await registration.showNotification(title, {
      body,
      icon: "./assets/icons/icon-192.png",
      badge: "./assets/icons/icon-192.png",
      tag: "skycast-weather",
    });

    return true;
  } catch (error) {
    console.error("SkyCast: Could not show notification.", error);
    return false;
  }
}
