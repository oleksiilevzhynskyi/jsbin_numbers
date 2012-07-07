$(function () {
  "use strict";

  var DEFAULT_LINES_COUNT = 40,
      $codeBlock = $('.CodeMirror-lines > div > div:eq(2)'),
      $numbersBlock,
      count = 0,
      timeout,
      numberize,
      initialize;

  initialize  = function () {
    var $codeMirror = $('.CodeMirror-lines:first');
    $codeMirror.before("<div class='numbers' style='float:left; margin-top: 4px; min-height: 100%'></div>");
    $codeMirror.css('margin-left', '21px');
    $numbersBlock = $codeMirror.prev();
  }

  numberize = function (number_count) {
    var preNumbers = "",
        number_count = number_count || $codeBlock.find('pre').length;
    if ( number_count > count) {
      for (; count < number_count; count += 1) {
        preNumbers += '<pre>' + (count + 1) + '.</pre>';
      }
      $numbersBlock.append(preNumbers);
    }
  }

  initialize();

  if ($codeBlock.length) {
    numberize();
  }

  $codeBlock[0].addEventListener('DOMNodeInserted', function (e) {
    if (e.target.tagName === "PRE"){
      clearTimeout(timeout);
      timeout = setTimeout(numberize, 300);
    }
  });
});
