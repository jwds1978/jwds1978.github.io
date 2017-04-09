---
sitemap: false
---

{{ site.copyright.comment.java }}
! function (a, b) {
  function l(a, b) {
    var c = a.createElement("p"),
      d = a.getElementsByTagName("head")[0] || a.documentElement;
    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
  }

  function m() {
    var a = t.elements;
    return "string" == typeof a ? a.split(" ") : a
  }

  function n(a, b) {
    var c = t.elements;
    "string" != typeof c && (c = c.join(" ")), "string" != typeof a && (a = a.join(" ")), t.elements = c + " " + a, s(b)
  }

  function o(a) {
    var b = j[a[h]];
    return b || (b = {}, i++, a[h] = i, j[i] = b), b
  }

  function p(a, c, d) {
    if (c || (c = b), k) return c.createElement(a);
    d || (d = o(c));
    var g;
    return g = d.cache[a] ? d.cache[a].cloneNode() : f.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !g.canHaveChildren || e.test(a) || g.tagUrn ? g : d.frag.appendChild(g)
  }

  function q(a, c) {
    if (a || (a = b), k) return a.createDocumentFragment();
    c = c || o(a);
    for (var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length; e < g; e++) d.createElement(f[e]);
    return d
  }

  function r(a, b) {
    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
      return t.shivMethods ? p(c, a, b) : b.createElem(c)
    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-:]+/g, function (a) {
      return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
    }) + ");return n}")(t, b.frag)
  }

  function s(a) {
    a || (a = b);
    var c = o(a);
    return !t.shivCSS || g || c.hasCSS || (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || r(a, c), a
  }

  function x(a) {
    for (var b, c = a.getElementsByTagName("*"), d = c.length, e = RegExp("^(?:" + m().join("|") + ")$", "i"), f = []; d--;) b = c[d], e.test(b.nodeName) && f.push(b.applyElement(y(b)));
    return f
  }

  function y(a) {
    for (var b, c = a.attributes, d = c.length, e = a.ownerDocument.createElement(v + ":" + a.nodeName); d--;) b = c[d], b.specified && e.setAttribute(b.nodeName, b.nodeValue);
    return e.style.cssText = a.style.cssText, e
  }

  function z(a) {
    for (var b, c = a.split("{"), d = c.length, e = RegExp("(^|[\\s,>+~])(" + m().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), f = "$1" + v + "\\:$2"; d--;) b = c[d] = c[d].split("}"), b[b.length - 1] = b[b.length - 1].replace(e, f), c[d] = b.join("}");
    return c.join("{")
  }

  function A(a) {
    for (var b = a.length; b--;) a[b].removeNode()
  }

  function B(a) {
    function g() {
      clearTimeout(d._removeSheetTimer), b && b.removeNode(!0), b = null
    }
    var b, c, d = o(a),
      e = a.namespaces,
      f = a.parentWindow;
    return !w || a.printShived ? a : (void 0 === e[v] && e.add(v), f.attachEvent("onbeforeprint", function () {
      g();
      for (var d, e, f, h = a.styleSheets, i = [], j = h.length, k = Array(j); j--;) k[j] = h[j];
      for (; f = k.pop();)
        if (!f.disabled && u.test(f.media)) {
          try {
            d = f.imports, e = d.length
          } catch (a) {
            e = 0
          }
          for (j = 0; j < e; j++) k.push(d[j]);
          try {
            i.push(f.cssText)
          } catch (a) {}
        }
      i = z(i.reverse().join("")), c = x(a), b = l(a, i)
    }), f.attachEvent("onafterprint", function () {
      A(c), clearTimeout(d._removeSheetTimer), d._removeSheetTimer = setTimeout(g, 500)
    }), a.printShived = !0, a)
  }
  var g, k, c = "3.7.3",
    d = a.html5 || {},
    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
    h = "_html5shiv",
    i = 0,
    j = {};
  ! function () {
    try {
      var a = b.createElement("a");
      a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = 1 == a.childNodes.length || function () {
        b.createElement("a");
        var a = b.createDocumentFragment();
        return void 0 === a.cloneNode || void 0 === a.createDocumentFragment || void 0 === a.createElement
      }()
    } catch (a) {
      g = !0, k = !0
    }
  }();
  var t = {
    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
    version: c,
    shivCSS: !1 !== d.shivCSS,
    supportsUnknownElements: k,
    shivMethods: !1 !== d.shivMethods,
    type: "default",
    shivDocument: s,
    createElement: p,
    createDocumentFragment: q,
    addElements: n
  };
  a.html5 = t, s(b);
  var u = /^$|\b(?:all|print)\b/,
    v = "html5shiv",
    w = !k && function () {
      var c = b.documentElement;
      return !(void 0 === b.namespaces || void 0 === b.parentWindow || void 0 === c.applyElement || void 0 === c.removeNode || void 0 === a.attachEvent)
    }();
  t.type += " print", t.shivPrint = B, B(b), "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : this, document);
