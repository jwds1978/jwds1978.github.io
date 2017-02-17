$(function() {
  $("#1887").toggle(function() {
    $(this).find("span").html("&times;&times;&times;&times;");
  }, function() {
    $(this).find("span").text($(this).data("last"));
  }).click();

  $("#3664").toggle(function() {
    $(this).find("span").html("&times;&times;&times;&times;");
  }, function() {
    $(this).find("span").text($(this).data("last"));
  }).click();
});
