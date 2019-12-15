/*
 * Copyright (c) 2017 James W.D. Stewart
 * All rights reserved.
 */

! function (a, b, c, d, e, f, g, h, i) {
  b.className += " " + c, f.start = 1 * new Date, f.end = g = function () {
    b.className = b.className.replace(RegExp(" ?" + c), "")
  }, (a[d] = a[d] || []).hide = f, setTimeout(function () {
    g(), f.end = null
  }, e), f.timeout = e
}(window, document.documentElement, "async-hide", "dataLayer", 4e3, {
  "GTM-M84X859": !0
});
