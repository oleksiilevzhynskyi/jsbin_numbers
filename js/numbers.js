$(function () {
  var $codeBlock = $('.CodeMirror-lines > div > div:eq(2)'),
      count = 0,
      $numbersBlock,
      numberize,
      initialize,
      count = 0,
      timeouts = [],
      DEFAULT_LINES_COUNT = 40;

  initialize  = function () {
    $('.CodeMirror-lines:first').before("<div class='numbers' style='float:left; margin-top: 4px; min-height: 100%'></div>");
    $('.CodeMirror-lines:first').css('margin-left', '21px')
    $numbersBlock = $('.CodeMirror-lines').prev();
  }

  numberize = function (number_count) {
    var preNumbers = "",
        i = 0,
        number_count = number_count || $codeBlock.find('pre').length;
    if ( number_count > count ) {
      i = count;
      for (; i <= $codeBlock.find('pre').length; i++, count++ ) {
        preNumbers += '<pre>' + i + '.</pre>';
      }
      $numbersBlock.append(preNumbers);
    }
  }

  initialize();

  if ($codeBlock.length) {
    numberize(DEFAULT_LINES_COUNT);
  }

  $codeBlock[0].addEventListener('DOMNodeInserted', function (e) {
    if (e.target.tagName === "PRE"){
      for (i in timeouts) {
        clearTimeout(timeouts[i])
      }
      timeouts = [];
      timeouts.push(setTimeout(numberize));
    }
  });
});
