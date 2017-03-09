/*
 * Copyright (c) 2017 James W.D. Stewart
 * All rights reserved.
 */

$(document).ready(function () {
  $(".quickJumpMenu").change(function () {
    window.location.href = $(this).val()
  })
});
