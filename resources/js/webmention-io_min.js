---
sitemap: false
---

{{ site.copyright.comment.java }}
! function (a, b) {
  "use strict";

  function q(a) {
    var g = !("data" in a),
      h = g ? a : a.data,
      j = g ? a.element_id : a.id,
      k = !1,
      l = !1;
    if (j = j.toString(), h.url && h.url.indexOf("twitter.com/") > -1 && (k = !0, h.url.indexOf("#favorited-by") == -1 && (j = h.url.replace(/^.*?status\/(.*)$/, "$1"))), !(o.indexOf(j) > -1)) {
      h.url.indexOf("/googleplus/") && (l = !0);
      var w, x, F, m = d.li.cloneNode(!0),
        n = d.article.cloneNode(!0),
        p = d.author.cloneNode(!0),
        q = d.author_name.cloneNode(!0),
        r = d.author_link.cloneNode(!0),
        t = d.photo.cloneNode(!0),
        u = d.meta.cloneNode(!0),
        v = d.time.cloneNode(!0),
        y = h.name,
        z = !1,
        A = h.content,
        B = h.url || a.source,
        C = a.activity.type,
        D = !!h.author && h.author.name,
        E = !!h.author && h.author.photo,
        G = "";
      m.id = "webmention-" + j, m.appendChild(n), (y || A) && (D ? (E ? (t.src = E, r.appendChild(t)) : n.className += " webmention--no-photo", q.appendChild(b.createTextNode(D)), h.author.url ? (r.href = h.author.url, r.appendChild(q), p.appendChild(r)) : p.appendChild(q), n.appendChild(p)) : n.className += " webmention--no-author", C || (C = l ? B.indexOf("/like/") > -1 ? "like" : B.indexOf("/repost/") > -1 ? "repost" : B.indexOf("/comment/") > -1 ? "reply" : "link" : "post"), y && y.length > 200 && (y = !1), "post" == C || "link" == C && !k && !l ? (z = y, !y && B && s(B, function (a) {
        a && linkTitle(m, B, a)
      })) : "like" != C && "repost" != C || (z = "like" == C && k ? D + " favorited this." : "repost" == C && k ? D + " retweeted this." : y, n.className += " webmention--author-starts"), h.published_ts ? (F = new Date(0), F.setUTCSeconds(h.published_ts)) : (h.published || a.verified_date) && (F = new Date(h.published || a.verified_date)), F && (v.setAttribute("datetime", F.toISOString()), G += F.getUTCDate() + " ", G += f[F.getUTCMonth()] + " ", G += F.getUTCFullYear(), v.appendChild(b.createTextNode(G)), u.appendChild(v)), z || (F && B && u.appendChild(b.createTextNode(" | ")), B && (x = d.permalink.cloneNode(!0), x.href = B, u.appendChild(x))), D && n.className.indexOf("webmention--author-starts") == -1 && (y && "0" == y.indexOf(D) || A && "0" == A.indexOf(D)) && (n.className += " webmention--author-starts"), z ? (n.className += " webmention--title-only", z = z.replace("reposts", "reposted"), B ? (x = d.a.cloneNode(!0), x.href = B, x.appendChild(b.createTextNode(z))) : x = b.createTextNode(z), w = d.title.cloneNode(!0), w.appendChild(x), n.appendChild(e.cloneNode(!0)), n.appendChild(w)) : (n.className += " webmention--content-only", w = d.content.cloneNode(!0), w.innerHTML = A, n.appendChild(w)), u.children.length > 0 && n.appendChild(u), i && (i.parentNode.replaceChild(c, i), i = !1), c.appendChild(m), o.push(j), m = null, n = null, p = null, q = null, r = null, t = null, w = null, x = null, u = null, v = null)
    }
  }

  function r() {
    var a = b.querySelector(".entry__jump--webmentions a"),
      c = b.querySelectorAll(".webmentions__item").length;
    a.innerHTML = c + " webmentions"
  }

  function s(b, c) {
    if ("XMLHttpRequest" in a) {
      var d = new XMLHttpRequest;
      s = function (a, b) {
        var c = !1;
        a = "//whateverorigin.org/get?url=" + encodeURIComponent(a), d.onreadystatechange = function () {
          4 != this.readyState || c || (c = !0, b(d.responseText))
        }, xhr.onabort = function () {
          c || (c = !0, b(!1))
        }, d.onerror = d.onabort, d.open("GET", a), d.send(null)
      }
    } else s = function (a, b) {
      b(!1)
    };
    return s(b, c)
  }
  if ("querySelectorAll" in b) {
    "AG" in a || (a.AG = {}), a.location.origin || (a.location.origin = a.location.protocol + "//" + a.location.host);
    var g, k, n, c = b.querySelectorAll(".webmentions__list"),
      d = {
        a: b.createElement("a"),
        author_name: b.createElement("b"),
        article: b.createElement("article"),
        div: b.createElement("div"),
        photo: b.createElement("img"),
        li: b.createElement("li"),
        time: b.createElement("time")
      },
      e = b.createTextNode(" "),
      f = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      h = [],
      i = !1,
      j = b.querySelector('meta[property="webmention:redirected_from"]'),
      l = [],
      m = a.location.origin,
      o = [],
      p = 0;
    if (j && (k = j.getAttribute("content").split(","), k.forEach(function (a) {
        h.push(a.indexOf("//") < 0 ? m + a : a)
      }), k = !1), "http:" != a.location.protocol && (h.forEach(function (a) {
        l.push(a), a.indexOf("https://") != -1 && l.push(a.replace("https://", "http://"))
      }), h = l, l = !1), c.length < 1) {
      if (i = b.querySelectorAll(".webmentions__not-found"), !i.length) return;
      i = i[0], c = b.createElement("ol"), c.className = "webmentions__list"
    } else {
      for (c = c[0], n = c.querySelectorAll("[id^=webmention-]"), p = n.length; p--;) o.push(n[p].getAttribute("id").replace("webmention-", ""));
      n = null
    }
    if (a.AG.existing_webmentions = o, d.li.className = "webmentions__item", d.article.className = "h-cite webmention", d.time.className = "webmention__pubdate dt-published", d.author = d.div.cloneNode(), d.author.className = "webmention__author p-author h-card", d.author_name.className = "p-name", d.author_link = d.a.cloneNode(), d.author_link.className = "u-url", d.photo.className = "webmention__author__photo u-photo", d.photo.alt = "", d.title = d.div.cloneNode(), d.title.className = "webmention__title p-name", d.permalink = d.a.cloneNode(), d.permalink.className = "webmention__source u-url", d.permalink.appendChild(b.createTextNode("Permalink")), d.content = d.div.cloneNode(), d.content.className = "webmention__content p-content", d.meta = d.div.cloneNode(), d.meta.className = "webmention__meta", a.AG.processWebmentions = function (a) {
        !a || "error" in a || (a.links.reverse(), a.links.forEach(q), r())
      }, "preconnect" in a.AG && (a.AG.preconnect("//webmention.io"), a.AG.preconnect("ws://webmention.io:8080")), g = b.createElement("script"), g.async = !0, g.src = "//webmention.io/api/mentions?jsonp=window.AG.processWebmentions&target[]=" + h.join("&target[]="), b.getElementsByTagName("head")[0].appendChild(g), c.length && "WebSocket" in a) {
      var u = new WebSocket("ws://webmention.io:8080");
      u.onopen = function () {
        u.send(a.location)
      }, u.onmessage = function (a) {
        q(JSON.parse(a.data)), r()
      }
    }
  }
}(this, this.document);