/*
 * Copyright (c) 2017 James W.D. Stewart
 * All rights reserved.
 */

$(function () {
  $('article').each(function () {
    $(this).readingTime({
      error: function (message) {
        console.log('Reading Count/Time :: Error');
        console.log(message);
      },
      lang: 'en',
      lessThanAMinuteString: 'Less Than a Minute',
      prependTimeString: '',
      prependWordString: '',
      readingTimeAsNumber: false,
      readingTimeTarget: $(this).find('.readingTime'),
      remotePath: $(this).attr('data-readingURI'),
      remoteTarget: $(this).attr('data-readingTarget'),
      round: true,
      success: function () {
        console.log('Reading Count/Time :: Success');
      },
      wordCountTarget: $(this).find('.readingCount'),
      wordsPerMinute: 270
    });
  });
});
