---
sitemap: false
---

{{ site.copyright.comment.java }}
! function (a) {
  var b;
  a.fn.readingTime = function (c) {
    var d = {
        readingTimeTarget: ".eta",
        wordCountTarget: null,
        wordsPerMinute: 270,
        round: !0,
        lang: "en",
        lessThanAMinuteString: "",
        prependTimeString: "",
        prependWordString: "",
        remotePath: null,
        remoteTarget: null,
        success: function () {},
        error: function () {}
      },
      e = this,
      f = a(this);
    e.settings = a.extend({}, d, c);
    var g = e.settings;
    if (!this.length) return g.error.call(this), this;
    if ("it" == g.lang) var h = g.lessThanAMinuteString || "Meno di un minuto",
      i = "min";
    else if ("fr" == g.lang) var h = g.lessThanAMinuteString || "Moins d'une minute",
      i = "min";
    else if ("de" == g.lang) var h = g.lessThanAMinuteString || "Weniger als eine Minute",
      i = "min";
    else if ("es" == g.lang) var h = g.lessThanAMinuteString || "Menos de un minuto",
      i = "min";
    else if ("nl" == g.lang) var h = g.lessThanAMinuteString || "Minder dan een minuut",
      i = "min";
    else if ("sk" == g.lang) var h = g.lessThanAMinuteString || "Menej než minútu",
      i = "min";
    else if ("cz" == g.lang) var h = g.lessThanAMinuteString || "Méně než minutu",
      i = "min";
    else if ("hu" == g.lang) var h = g.lessThanAMinuteString || "Kevesebb mint egy perc",
      i = "perc";
    else if ("ru" == g.lang) var h = g.lessThanAMinuteString || "Меньше минуты",
      i = "мин";
    else if ("ar" == g.lang) var h = g.lessThanAMinuteString || "أقل من دقيقة",
      i = "دقيقة";
    else if ("da" == g.lang) var h = g.lessThanAMinuteString || "Mindre end et minut",
      i = "min";
    else if ("is" == g.lang) var h = g.lessThanAMinuteString || "Minna en eina mínútu",
      i = "min";
    else if ("no" == g.lang) var h = g.lessThanAMinuteString || "Mindre enn ett minutt",
      i = "min";
    else if ("pl" == g.lang) var h = g.lessThanAMinuteString || "Mniej niż minutę",
      i = "min";
    else if ("ru" == g.lang) var h = g.lessThanAMinuteString || "Меньше минуты",
      i = "мой";
    else if ("sv" == g.lang) var h = g.lessThanAMinuteString || "Mindre än en minut",
      i = "min";
    else var h = g.lessThanAMinuteString || "Less than a minute",
      i = "min";
    var j = function (c) {
      if ("" !== c) {
        var d = c.trim().split(/\s+/g).length,
          e = g.wordsPerMinute / 60;
        if (b = d / e, g.round === !0) var f = Math.round(b / 60);
        else var f = Math.floor(b / 60);
        var j = Math.round(b - 60 * f);
        if (g.round === !0) f > 0 ? a(g.readingTimeTarget).text(g.prependTimeString + f + " " + i) : a(g.readingTimeTarget).text(g.prependTimeString + h);
        else {
          var k = f + ":" + j;
          a(g.readingTimeTarget).text(g.prependTimeString + k)
        }
        "" !== g.wordCountTarget && void 0 !== g.wordCountTarget && a(g.wordCountTarget).text(g.prependWordString + d), g.success.call(this)
      } else g.error.call(this, "The element is empty.")
    };
    return f.each(function () {
      null != g.remotePath && null != g.remoteTarget ? a.get(g.remotePath, function (b) {
        j(a("<div>").html(b).find(g.remoteTarget).text())
      }) : j(f.text())
    }), b
  }
}(jQuery);
