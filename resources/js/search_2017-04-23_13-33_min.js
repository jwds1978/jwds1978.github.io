---
sitemap: false
---

{{ site.copyright.comment.java }}
! function () {
  function a(a, b) {
    var c = document.getElementById("search-results");
    if (a.length) {
      for (var d = "", e = 0; e < a.length; e++) {
        var f = b[a[e].ref];
        d += '<li><a href="' + f.url + '"><h3>' + f.title + "</h3></a>", d += "<p>" + f.content.substring(0, 150) + "...</p></li>"
      }
      c.innerHTML = d
    } else c.innerHTML = "<li>No results found</li>"
  }

  function b(a) {
    for (var b = window.location.search.substring(1), c = b.split("&"), d = 0; d < c.length; d++) {
      var e = c[d].split("=");
      if (e[0] === a) return decodeURIComponent(e[1].replace(/\+/g, "%20"))
    }
  }
  var c = b("query");
  if (c) {
    document.getElementById("search-box").setAttribute("value", c);
    var d = lunr(function () {
      this.field("id"), this.field("title", {
        boost: 10
      }), this.field("author"), this.field("category"), this.field("content")
    });
    for (var e in window.store) {
      d.add({
        id: e,
        title: window.store[e].title,
        author: window.store[e].author,
        category: window.store[e].category,
        content: window.store[e].content
      });
      a(d.search(c), window.store)
    }
  }
}();
