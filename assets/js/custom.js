$(window).resize(function () {
  //Function
});

$(document).ready(function () {
  //Function

  // WOW JS
  new WOW().init();

  $(".change-btn").mouseenter(function () {
    $(this).removeClass("btn-animation");
  });
  $(".change-btn").mouseleave(function () {
    $(this).addClass("btn-animation");
  });
  // $(".round1 ,.round2 ,.round3").click(function () {
  //     $(this).toggleClass("scale")
  // });

  //Smooth Scroll Js
  $("body").impulse({
    range: 150
  });
});
