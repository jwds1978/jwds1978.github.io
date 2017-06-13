---
sitemap: false
---

{{ site.copyright.comment.java }}
$(function () {
  var $article = $('article');
  $article.readingTime({
    error: function (message) {
      console.log(message);
    },
    lang: 'en',
    lessThanAMinuteString: 'Less Than a Minute',
    prependTimeString: '',
    prependWordString: '',
    readingTimeAsNumber: false,
    readingTimeTarget: $article.find('.readingTime'),
    remotePath: null,
    remoteTarget: null,
    round: true,
    success: function () {
      console.log('Reading Time :: Success');
    },
    wordCountTarget: $article.find('.readingCount'),
    wordsPerMinute: 270
  });
});
