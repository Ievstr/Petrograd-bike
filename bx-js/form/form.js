"use strict";

$(function () {
  var $phone = $('input[type="tel"]');
  var regex = '\\+ 7 [0-6,9]{1}[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}';
  $phone.inputmask({
    regex: regex
  });
});