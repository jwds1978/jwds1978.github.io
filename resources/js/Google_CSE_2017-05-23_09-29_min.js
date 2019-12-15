/*
 * Copyright (c) 2017 James W.D. Stewart
 * All rights reserved.
 */

(function () {
  function h(a, b, c, d) {
    var e = {};
    for (a = a.split(c), c = 0; c < a.length; c++) {
      var f = a[c],
        g = f.indexOf(b);
      if (0 < g) {
        var h = f.substring(0, g),
          h = d ? h.toUpperCase() : h.toLowerCase(),
          f = f.substring(g + 1, f.length);
        e[h] = f
      }
    }
    return e
  }

  function i(a, b, c) {
    if (c) {
      if (b = [a, "?" == a.slice(-1) ? "" : "&", b, "=", encodeURIComponent(c)].join(""), 2048 >= b.length) return b
    }
    return a
  }

  function j(a, b) {
    return a ? Math.max(a, b) : b
  }

  function k() {
    var j = "",
      j = a.googleSearchDomain ? j + a.googleSearchDomain : j + "www.google.com",
      j = a.googleSearchPath ? j + a.googleSearchPath : j + "/custom",
      j = "https://" + j + "?";
    a.googleSearchQueryString && (a.googleSearchQueryString = a.googleSearchQueryString.toLowerCase());
    var k = c;
    if (1 > k.length) var l = "";
    else {
      if (k = k.substring(1, k.length), k = h(k, "=", "&", !1), "q" != a.googleSearchQueryString && k[a.googleSearchQueryString] && (k.q = k[a.googleSearchQueryString], delete k[a.googleSearchQueryString]), k.cof) {
        var m = h(decodeURIComponent(k.cof), ":", ";", !0);
        (m = m.FORID) && (d = parseInt(m, 10))
      }
      if (k.siteurl && (g = decodeURIComponent(k.siteurl)), (m = document.getElementById(a.googleSearchFormName)) && (!m.q || !k.q || k.ie && "utf-8" != k.ie.toLowerCase() || (m.q.value = decodeURIComponent(k.q.replace(/\+/g, " "))), m.sitesearch))
        for (var n = 0; n < m.sitesearch.length; n++) m.sitesearch[n].checked = null == k.sitesearch && "" == m.sitesearch[n].value || m.sitesearch[n].value == k.sitesearch;
      m = "";
      for (l in k) m += "&" + l + "=" + k[l];
      l = m.substring(1, m.length)
    }
    return j += l, j = i(j, "ad", "n" + e), j = i(j, "num", f), j = i(j, "adtest", a.googleAdtest), b && (l = a.location.href, k = l.indexOf("#"), -1 != k && (l = l.substring(0, k)), j = i(j, "rurl", l)), l = a.document.getElementById(a.googleSearchFormName), g || (g = a.document.referrer, j = i(j, "siteurl", g)), l && !l.siteurl && (k = document.createElement("input"), k.name = "siteurl", k.type = "hidden", k.value = g, l.appendChild(k)), j
  }

  function l(a, b, c) {
    var d = {};
    if (d[9] = 300 + 90 * b, d[10] = 300 + 50 * Math.min(a, 4) + 90 * b, d[11] = 300 + 50 * a + 90 * b, c)
      for (a = 660 + 120 * b, b = 9; 11 >= b; b++) d[b] = Math.max(d[b], a);
    return d
  }

  function m() {
    (e = a.googleSearchNumAds) || (e = 9), f = (f = a.googleNumSearchResults) ? Math.min(f, 20) : 10;
    var c = {
        9: 795,
        10: 795,
        11: 500
      },
      g = l(e, f, "/cse" == a.googleSearchPath),
      h = k();
    a.googleSearchFrameborder || (a.googleSearchFrameborder = "0");
    var i = document.getElementById(a.googleSearchIframeName);
    if (i && c[d]) {
      var n, c = j(a.googleSearchFrameWidth, c[d]),
        g = j(a.googleSearchFrameHeight, g[d]),
        m = document.createElement("iframe"),
        h = {
          name: "googleSearchFrame",
          src: h,
          frameBorder: a.googleSearchFrameborder,
          width: c,
          height: g,
          marginWidth: "0",
          marginHeight: "0",
          hspace: "0",
          vspace: "0",
          allowTransparency: "true",
          scrolling: "no"
        };
      for (n in h) m.setAttribute(n, h[n]);
      i.appendChild(m), m.attachEvent ? m.attachEvent("onload", function () {
        window.scrollTo(0, 0)
      }) : m.addEventListener("load", function () {
        window.scrollTo(0, 0)
      }, !1), b && a.setInterval(function () {
        if (a.location.hash && "#" != a.location.hash) {
          var b = a.location.hash.substring(1) + "px";
          m.height != b && "0px" != b && (m.height = b)
        }
      }, 10)
    }
    a.googleSearchIframeName = null, a.googleSearchFormName = null, a.googleSearchResizeIframe = null, a.googleSearchQueryString = null, a.googleSearchDomain = null, a.googleSearchPath = null, a.googleSearchFrameborder = null, a.googleSearchFrameWidth = null, a.googleSearchFrameHeight = null, a.googleSearchNumAds = null, a.googleNumSearchResults = null, a.googleAdtest = null
  }
  var d, e, f, g, a = window,
    b = a.googleSearchResizeIframe || a.googleSearchPath && "/cse" == a.googleSearchPath && void 0 === a.googleSearchResizeIframe,
    c = document.location.search;
  m()
}).call(this);
