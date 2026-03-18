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

function initWebpartCatalog() {
  var catalog = document.querySelector("[data-webpart-catalog]");
  if (!catalog) {
    return;
  }

  var search = catalog.querySelector("[data-webpart-search]");
  var domain = catalog.querySelector("[data-webpart-domain]");
  var cards = Array.prototype.slice.call(catalog.querySelectorAll("[data-webpart-card]"));
  var count = catalog.querySelector("[data-webpart-count]");
  var empty = catalog.querySelector("[data-webpart-empty]");

  function applyFilter() {
    var searchValue = search ? search.value.trim().toLowerCase() : "";
    var domainValue = domain ? domain.value.trim().toLowerCase() : "";
    var visibleCount = 0;

    cards.forEach(function (card) {
      var text = (card.getAttribute("data-search") || "").toLowerCase();
      var cardDomain = (card.getAttribute("data-domain") || "").toLowerCase();
      var matchesSearch = !searchValue || text.indexOf(searchValue) !== -1;
      var matchesDomain = !domainValue || cardDomain === domainValue;
      var visible = matchesSearch && matchesDomain;

      card.hidden = !visible;
      if (visible) {
        visibleCount += 1;
      }
    });

    if (count) {
      count.textContent = visibleCount + (visibleCount === 1 ? " webpart shown" : " webparts shown");
    }

    if (empty) {
      empty.hidden = visibleCount !== 0;
    }
  }

  if (search) {
    search.addEventListener("input", applyFilter);
  }

  if (domain) {
    domain.addEventListener("change", applyFilter);
  }

  applyFilter();
}

document.addEventListener("DOMContentLoaded", initUiEffects);
document.addEventListener("DOMContentLoaded", applyPageLayoutMode);
document.addEventListener("DOMContentLoaded", initWebpartCatalog);

// MkDocs Material may replace content dynamically; re-apply reveal transitions after navigation.
if (typeof window.document$ !== "undefined" && typeof window.document$.subscribe === "function") {
  window.document$.subscribe(function () {
    initUiEffects();
    applyPageLayoutMode();
    initWebpartCatalog();
  });
}
