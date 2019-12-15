/*
 * Copyright (c) 2017 James W.D. Stewart
 * All rights reserved.
 */

$(function () {
  var a = $('article');
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
    remotePath: a.attr('data-readingURI'),
    remoteTarget: a.attr('data-readingTarget'),
    round: !0,
    success: function () {
      console.log('Reading Count/Time :: Success')
    },
    wordCountTarget: a.find('.readingCount'),
    wordsPerMinute: 270
  })
});
