$(".dropdown").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass("expan");
  $("#" + $(e.target).attr("for")).prop("checked", true);
});
$(document).click(function () {
  $(".dropdown").removeClass("expan");
});