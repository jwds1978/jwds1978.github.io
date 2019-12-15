/*
 * Copyright (c) 2017 James W.D. Stewart
 * All rights reserved.
 */

(function (a) {
  var b;
  a.fn.readingTime = function (c) {
    var e = this,
      f = a(this);
    e.settings = a.extend({}, {
      readingTimeTarget: '.eta',
      readingTimeAsNumber: !1,
      wordCountTarget: null,
      wordsPerMinute: 270,
      round: !0,
      lang: 'en',
      lessThanAMinuteString: '',
      prependTimeString: '',
      prependWordString: '',
      remotePath: null,
      remoteTarget: null,
      success: function () {},
      error: function () {}
    }, c);
    var g = e.settings;
    if (!this.length) return g.error.call(this), this;
    if ('it' == g.lang) var h = g.lessThanAMinuteString || 'Meno di un minuto',
      i = 'min';
    else if ('fr' == g.lang) var h = g.lessThanAMinuteString || 'Moins d\'une minute',
      i = 'min';
    else if ('de' == g.lang) var h = g.lessThanAMinuteString || 'Weniger als eine Minute',
      i = 'min';
    else if ('es' == g.lang) var h = g.lessThanAMinuteString || 'Menos de un minuto',
      i = 'min';
    else if ('nl' == g.lang) var h = g.lessThanAMinuteString || 'Minder dan een minuut',
      i = 'min';
    else if ('sk' == g.lang) var h = g.lessThanAMinuteString || 'Menej ne\u017E min\xFAtu',
      i = 'min';
    else if ('cz' == g.lang) var h = g.lessThanAMinuteString || 'M\xE9n\u011B ne\u017E minutu',
      i = 'min';
    else if ('hu' == g.lang) var h = g.lessThanAMinuteString || 'Kevesebb mint egy perc',
      i = 'perc';
    else if ('ru' == g.lang) var h = g.lessThanAMinuteString || '\u041C\u0435\u043D\u044C\u0448\u0435 \u043C\u0438\u043D\u0443\u0442\u044B',
      i = '\u043C\u0438\u043D';
    else if ('ar' == g.lang) var h = g.lessThanAMinuteString || '\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629',
      i = '\u062F\u0642\u064A\u0642\u0629';
    else if ('da' == g.lang) var h = g.lessThanAMinuteString || 'Mindre end et minut',
      i = 'min';
    else if ('is' == g.lang) var h = g.lessThanAMinuteString || 'Minna en eina m\xEDn\xFAtu',
      i = 'min';
    else if ('no' == g.lang) var h = g.lessThanAMinuteString || 'Mindre enn ett minutt',
      i = 'min';
    else if ('pl' == g.lang) var h = g.lessThanAMinuteString || 'Mniej ni\u017C minut\u0119',
      i = 'min';
    else if ('ru' == g.lang) var h = g.lessThanAMinuteString || '\u041C\u0435\u043D\u044C\u0448\u0435 \u043C\u0438\u043D\u0443\u0442\u044B',
      i = '\u043C\u043E\u0439';
    else if ('sv' == g.lang) var h = g.lessThanAMinuteString || 'Mindre \xE4n en minut',
      i = 'min';
    else if ('tr' == g.lang) var h = g.lessThanAMinuteString || 'Bir dakikadan az',
      i = 'dk';
    else var h = g.lessThanAMinuteString || 'Less than a minute',
      i = 'Minute',
      j = 'Minutes';
    var k = function (l) {
      if ('' !== l) {
        var m = l.trim().split(/\s+/g).length,
          n = g.wordsPerMinute / 60;
        if (b = m / n, !0 === g.round) var o = Math.round(b / 60);
        else var o = Math.floor(b / 60);
        var p = Math.round(b - 60 * o);
        if (!0 === g.round) 0 < o ? 1 < o ? a(g.readingTimeTarget).text(g.prependTimeString + o + (g.readingTimeAsNumber ? '' : ' ' + j)) : a(g.readingTimeTarget).text(g.prependTimeString + o + (g.readingTimeAsNumber ? '' : ' ' + i)) : a(g.readingTimeTarget).text(g.readingTimeAsNumber ? o : g.prependTimeString + h);
        else {
          a(g.readingTimeTarget).text(g.prependTimeString + (o + ':' + p))
        }
        '' !== g.wordCountTarget && void 0 !== g.wordCountTarget && a(g.wordCountTarget).text(g.prependWordString + m), g.success.call(this)
      } else g.error.call(this, 'The element is empty.')
    };
    return f.each(function () {
      null != g.remotePath && null != g.remoteTarget ? a.get(g.remotePath, function (l) {
        k(a('<div>').html(l).find(g.remoteTarget).text())
      }) : k(f.text())
    }), b
  }
})(jQuery);
