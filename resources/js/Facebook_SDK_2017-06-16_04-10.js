/*
 * Copyright (c) 2017 James W.D. Stewart
 * All rights reserved.
 */

window.fbAsyncInit = function () {
  FB.init({
    appId: '452354395131000',
    autoLogAppEvents: false,
    cookie: false,
    frictionlessRequests: false,
    hideFlashCallback: null,
    status: false,
    version: 'v2.9',
    xfbml: true
  });
  FB.AppEvents.logPageView();
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
