"use strict";

$(function () {
  var gallerySlider = new Swiper('.js-gallery-slider', {
    slidesPerView: 1,
    speed: 1000,
    // allowTouchMove: false,
    // direction: 'vertical',
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    mousewheel: {
      enabled: false,
      forceToAxis: true,
      releaseOnEdges: true
    },
    breakpoints: {
      769: {
        direction: 'vertical',
        mousewheel: {
          enabled: true
        }
      }
    }
  });
});