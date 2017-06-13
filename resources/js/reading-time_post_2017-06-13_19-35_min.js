---
sitemap: false
---

{{ site.copyright.comment.java }}
$(function () {
  var a = $('.readingContent');
  a.readingTime({
    error: function (b) {
      console.log('Reading Count/Time :: Error'), console.log(b)
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
