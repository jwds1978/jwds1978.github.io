---
sitemap: false
---

{{ site.copyright.comment.java }}
$(function () {
  var a = $('article');
  a.readingTime({
    error: function (b) {
      console.log(b)
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
      console.log('Reading Time :: Success')
    },
    wordCountTarget: a.find('.readingCount'),
    wordsPerMinute: 270
  })
});
