/*
 * Copyright (c) 2017 James W.D. Stewart
 * All rights reserved.
 */

$(function () {
  var $article = $('article');
  var $articleContent = $article.find('.readingContent');
  $articleContent.readingTime({
    error: function (message) {
      console.log('Reading Count/Time :: Error');
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
      console.log('Reading Count/Time :: Success');
    },
    wordCountTarget: $article.find('.readingCount'),
    wordsPerMinute: 270
  });
});
