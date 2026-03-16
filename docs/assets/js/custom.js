function initUiEffects() {
  var blocks = document.querySelectorAll(".reveal-on-load");
  blocks.forEach(function (el, idx) {
    window.setTimeout(function () {
      el.classList.add("ready");
    }, 80 * (idx + 1));
  });
}

function applyPageLayoutMode() {
  var body = document.body;
  if (!body) {
    return;
  }
  body.classList.remove("layout-webparts-catalog");

  var path = (window.location.pathname || "").toLowerCase();
  var isCatalog =
    /\/webparts\/?$/.test(path) ||
    /\/webparts\/index\.html$/.test(path);

  if (isCatalog) {
    body.classList.add("layout-webparts-catalog");
  }
}

document.addEventListener("DOMContentLoaded", initUiEffects);
document.addEventListener("DOMContentLoaded", applyPageLayoutMode);

// MkDocs Material may replace content dynamically; re-apply reveal transitions after navigation.
if (typeof window.document$ !== "undefined" && typeof window.document$.subscribe === "function") {
  window.document$.subscribe(function () {
    initUiEffects();
    applyPageLayoutMode();
  });
}
