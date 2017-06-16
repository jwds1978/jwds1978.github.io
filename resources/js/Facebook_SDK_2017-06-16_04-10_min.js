---
sitemap: false
---

{{ site.copyright.comment.java }}
window.fbAsyncInit = function () {
    FB.init({
      appId: '452354395131000',
      autoLogAppEvents: !1,
      cookie: !1,
      frictionlessRequests: !1,
      hideFlashCallback: null,
      status: !1,
      version: 'v2.9',
      xfbml: !0
    }), FB.AppEvents.logPageView()
  },
  function (a, b, c) {
    var e, f = a.getElementsByTagName(b)[0];
    a.getElementById(c) || (e = a.createElement(b), e.id = c, e.src = 'https://connect.facebook.net/en_US/sdk.js', f.parentNode.insertBefore(e, f))
  }(document, 'script', 'facebook-jssdk');
