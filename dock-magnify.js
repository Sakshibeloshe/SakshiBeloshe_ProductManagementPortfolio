/**
 * Dock proximity magnification — the classic macOS "the whole dock bulges toward the cursor"
 * effect. Pure DOM/CSS: sets --dock-scale / --dock-lift custom properties per .dock-item, which
 * style.css turns into a transform. Works for both the fixed icons and dynamically-added
 * window icons (re-queries .dock-item on every move, so new ones are included for free).
 *
 * Skipped entirely on touch devices — there's no hover/proximity to magnify toward on a phone,
 * and the mobile media query in style.css forces .dock-item transforms off anyway.
 */
(function () {
  var dock = document.getElementById('dock');
  if (!dock || window.matchMedia('(pointer: coarse)').matches) return;

  var MAX_SCALE = 1.28;
  var MAX_LIFT = 10; // px
  var RADIUS = 90; // px of influence to each side of the cursor

  function reset() {
    var items = dock.querySelectorAll('.dock-item');
    for (var i = 0; i < items.length; i++) {
      items[i].style.removeProperty('--dock-scale');
      items[i].style.removeProperty('--dock-lift');
      items[i].style.removeProperty('z-index');
    }
  }

  dock.addEventListener('mousemove', function (e) {
    var items = dock.querySelectorAll('.dock-item');
    for (var i = 0; i < items.length; i++) {
      var el = items[i];
      var rect = el.getBoundingClientRect();
      var center = rect.left + rect.width / 2;
      var dist = Math.abs(e.clientX - center);
      var t = Math.max(0, 1 - dist / RADIUS);
      var eased = t * t * (3 - 2 * t); // smoothstep: gentler falloff than linear
      el.style.setProperty('--dock-scale', (1 + eased * (MAX_SCALE - 1)).toFixed(3));
      el.style.setProperty('--dock-lift', (eased * MAX_LIFT).toFixed(1) + 'px');
      el.style.zIndex = Math.round(eased * 20) + 1;
    }
  });

  dock.addEventListener('mouseleave', reset);
})();
