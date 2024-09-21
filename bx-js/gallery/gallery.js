"use strict";

$(function () {
  var animateBlock = $('.js-animate');
  var tickers = animateBlock.find('.js-gallery-ticker');
  var tickerOne = tickers.first();
  var tickerTwo = tickers.last();
  var heroHeight = $('.hero').outerHeight();
  var counter = 0;
  var tempPos;
  window.addEventListener('scroll', function () {
    var scroll = (window.scrollY - heroHeight / 2) * .34 + 'rem';
    if (window.scrollY <= heroHeight) {
      $('.js-animate').find('.js-gallery-ticker:first-child').css('transform', 'translateX(-' + scroll + ')');
      $('.js-animate').find('.js-gallery-ticker:last-child').css('transform', 'translateX(' + scroll + ')');
      $('.js-animate').removeClass('js-animate-end');
      $('.header').removeClass('header_fixed');
    } else {
      tickerOne.css('transform', 'translateX(' + 0 + ')');
      tickerTwo.css('transform', 'translateX(' + 0 + ')');
      $('.js-animate').removeClass('js-animate');
      $('.header').addClass('header_fixed');
      if (counter < 1) {
        var galleryTicker = new Swiper('.js-gallery-ticker', {
          slidesPerView: 'auto',
          speed: 30000,
          loop: true,
          allowTouchMove: false,
          autoplay: {
            delay: 0
          }
        });
        counter += 1;
      }
    }
  });
});