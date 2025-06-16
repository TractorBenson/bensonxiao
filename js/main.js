// main.js (ES module)

/*------------------------------------------------------------------
  View switching logic that loads external HTML files on demand
------------------------------------------------------------------*/

const app = document.getElementById("app");

/* Map each view ID to its corresponding standalone HTML file */
const viewFiles = {
  about: "../html/about.html",
  projects: "../html/projects.html",
  contact: "../html/contacts.html",
};

/* Simple in‑memory cache for fetched markup */
const cache = Object.create(null);

/* Fetch the HTML for a view (with caching) and inject it */
async function render(viewId) {
  const file = viewFiles[viewId];
  if (!file) return;

  /* Serve from cache if we already fetched this view */
  if (cache[viewId]) {
    app.innerHTML = cache[viewId];
    return;
  }

  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`${file} → HTTP ${response.status}`);
    }
    const html = await response.text();
    cache[viewId] = html;
    app.innerHTML = html;
  } catch (err) {
    app.innerHTML = `<p style="color:red;">Failed to load view: ${err.message}</p>`;
  }
}

/* ----- Navbar button handling ---------------------------------- */
const navButtons = document.querySelectorAll(".topbar button");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const view = btn.dataset.view;

    /* Update active styling */
    navButtons.forEach((b) =>
      b.classList.toggle("active", b === btn)
    );

    /* Render the requested view and push hash for history */
    render(view);
    history.pushState(null, "", `#${view}`);
  });
});

/* ----- Support browser back / forward using hash --------------- */
window.addEventListener("hashchange", () => {
  const view = location.hash.slice(1) || "about";
  if (viewFiles[view]) {
    navButtons.forEach((b) =>
      b.classList.toggle("active", b.dataset.view === view)
    );
    render(view);
  }
});

/* ----- Initial render ------------------------------------------ */
(function init() {
  const initialView = location.hash.slice(1) || "about";
  navButtons.forEach((b) =>
    b.classList.toggle("active", b.dataset.view === initialView)
  );
  render(initialView);
})();