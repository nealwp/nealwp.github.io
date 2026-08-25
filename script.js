(function () {
  "use strict";

  // Theme itself is set as early as possible by an inline script in <head>
  // (to avoid a flash of the wrong theme). This just wires up the toggle
  // button and keeps its accessible state in sync.
  var STORAGE_KEY = "theme";
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var themeColor = document.getElementById("theme-color");

  function syncThemeState(theme) {
    var isDark = theme === "dark";
    if (themeColor) {
      themeColor.setAttribute("content", isDark ? "#121210" : "#faf8f4");
    }
    if (!toggle) return;
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  }

  syncThemeState(root.getAttribute("data-theme"));

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      syncThemeState(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* localStorage unavailable, preference just won't persist */
      }
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
