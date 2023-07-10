
$(function () {
  'use strict'
  // FANCY BOX
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none"
  });

  $(".zoom").hover(function () {

    $(this).addClass('transition');
  }, function () {

    $(this).removeClass('transition');
  });

  // MENU
  $('.navbar .nav-link').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

});
