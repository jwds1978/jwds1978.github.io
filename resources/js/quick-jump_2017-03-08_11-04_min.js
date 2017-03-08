---
sitemap: false
---

{{ site.copyright.comment.java }}
$(document).ready(function () {
  $(".quickJumpMenu").change(function () {
    window.location.href = $(this).val()
  })
});
