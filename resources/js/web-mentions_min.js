jQuery(function (a) {
  var c, b = [];
  a("*[data-webmention-count]").each(function (d, e) {
    var f = document.createElement("a");
    f.href = a(e).data("url"), c = f.protocol + "//" + f.hostname, b.push(f.pathname + f.search)
  }), a.getJSON("https://webmention.io/api/count?jsonp=?", {
    base: c,
    targets: b.join(",")
  }, function (b) {
    a("*[data-webmention-count]").each(function (c, d) {
      a(d).text(b.count[a(d).data("url")])
    })
  })
});
