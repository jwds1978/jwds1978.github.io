---
sitemap: false
---

{{ site.copyright.comment.java }}
$(function () {
  var a = $('article'),
    b = a.find('.readingContent');
  b.readingTime({
    error: function (c) {
      console.log('Reading Count/Time :: Error'), console.log(c)
    },
    lang: 'en',
    lessThanAMinuteString: 'Less Than a Minute',
    prependTimeString: '',
    prependWordString: '',
    readingTimeAsNumber: !1,
    readingTimeTarget: a.find('.readingTime'),
    remotePath: null,
    remoteTarget: null,
    round: !0,
    success: function () {
      console.log('Reading Count/Time :: Success')
    },
    wordCountTarget: a.find('.readingCount'),
    wordsPerMinute: 270
  })
});
