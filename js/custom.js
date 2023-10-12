
$(function () {
  'use strict'
  // FANCY BOX

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });


  // MENU
  $('.navbar .nav-link').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

});
