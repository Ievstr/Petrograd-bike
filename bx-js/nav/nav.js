"use strict";

$(function () {
  $('.js-nav-link').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('html').animate({
      scrollTop: top + 1
    }, 1000);
    $('.js-burger').removeClass('burger_active');
    $('.header').removeClass('header_active');
    $('.header .nav').removeClass('nav_active');
    $('body').removeClass('o-hidden');
  });
  $(window).scroll(function () {
    var $anchor = $('.js-anchor');
    var scroll = $(window).scrollTop();
    var headerHeight = $('.header').height();
    $anchor.each(function (i, el) {
      var top = $(el).offset().top - headerHeight / 2;
      var bottom = top + $(el).outerHeight();
      var id = $(el).attr('id');
      if (scroll > top && scroll < bottom) {
        if ($(el).hasClass('anchor-white')) {
          $('.header').addClass('header_white');
        } else {
          $('.header').removeClass('header_white');
        }
      }
    });
  });
});