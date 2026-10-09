
// ========================================
// SkyCast — Dashboard UI
// File: js/ui/dashboard.js
// ========================================

/**
 * Render the initial SkyCast dashboard.
 *
 * @param {HTMLElement} container
 */
export function renderDashboard(container) {
  if (!(container instanceof HTMLElement)) {
    throw new Error("A valid dashboard container is required.");
  }

  container.innerHTML = `
    <section class="container page-main">
      <header class="section-header">
        <div>
          <h1>SkyCast</h1>
          <p>Your weather, at a glance.</p>
        </div>
      </header>

      <section class="card" aria-labelledby="welcome-title">
        <h2 id="welcome-title">Welcome to SkyCast</h2>
        <p>
          Your weather dashboard is being prepared.
          Weather information will appear here after setup.
        </p>
      </section>
    </section>
  `;
}
