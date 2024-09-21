"use strict";

$(function () {
  $('.js-burger').click(function () {
    $(this).toggleClass('burger_active');
    if ($(this).hasClass('burger_active')) {
      $('body').removeClass('o-hidden');
    } else {
      $('body').addClass('o-hidden');
    }
    $('.header').toggleClass('header_active');
    $('.header .nav').toggleClass('nav_active');
    $('body').toggleClass('o-hidden');
  });
});