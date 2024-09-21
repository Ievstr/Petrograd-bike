/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $phone = $('input[type="tel"]');
  var regex = '\\+ 7 [0-6,9]{1}[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}';
  $phone.inputmask({
    regex: regex
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/gallery/gallery.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/gallery/gallery.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/nav/nav.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/nav/nav.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/slider/slider.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/slider/slider.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_nav_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/nav/nav */ "./src/blocks/modules/nav/nav.js");
/* harmony import */ var _modules_nav_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_nav_nav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/gallery/gallery */ "./src/blocks/modules/gallery/gallery.js");
/* harmony import */ var _modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_form_form__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map