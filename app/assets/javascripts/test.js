$( document ).ready(function() {

  var bgColor;
  var fontSize;
  var fontType;
  var fontColor;
  var lineSpace;
  var textSpace;

  $('.bg').on('click', function () {
    var color = $(this)[0].id;

    if (color == "pink") {
      bgColor = "#FFD9E8";
    } else if (color == "green") {
      bgColor = "#E9FFC2";
    } else if (color == "blue") {
      bgColor = "#CAF4FF";
    } else {
      bgColor = "#FFFCD4";
    }
    $('.fs').css('background-color',bgColor);
    $('#color-bg').hide();
    $('#font-size').show();
  });

  $('.fs').on('click', function () {
    fontSize = $(this)[0].id;

    $('.ft').css({
      'background-color': bgColor,
      'font-size': fontSize
    });
    $('#font-size').hide();
    $('#font-type').show();
  });

  $('.ft').on('click', function () {
    fontType = $(this)[0].id;
    console.log(fontType);
    $('.fc').css({
      'background-color': bgColor,
      'font-family': fontType,
      'font-size': fontSize
    });
    $('#font-type').hide();
    $('#font-color').show();
  });

  $('.fc').on('click', function () {
    var fcolor = $(this)[0].id;

      if (fcolor == "brown") {
        fontColor = "#6B3434";
      } else if (fcolor == "navy") {
        fontColor = "#0022C9";
      } else if (fcolor == "lightg") {
        fontColor = "#1D6B00";
      } else {
        fontColor = "black";
      }

    $('.ls').css({
      'background-color': bgColor,
      'font-family': fontType,
      'color' : fontColor,
      'font-size': fontSize
    });
    $('#font-color').hide();
    $('#line-space').show();
  });

  $('.ls').on('click', function () {
    line = $(this)[0].id;

    if (line == "small-line") {
      lineSpace = "1";
    } else if (line == "medium-line") {
      lineSpace = "2";
    } else if (line == "large-line") {
      lineSpace = "3";
    } else {
      lineSpace = "4";
    }

    $('.ts').css({
      'background-color': bgColor,
      'font-family': fontType,
      'color' : fontColor,
      'line-height' : lineSpace,
      'font-size': fontSize
    });
    $('#line-space').hide();
    $('#text-space').show();
  });

  $('.ts').on('click', function () {
    text = $(this)[0].id;

    if (text == "small-text") {
      lineSpace = "1px";
    } else if (text == "medium-text") {
      lineSpace = "2px";
    } else if (text == "large-text") {
      lineSpace = "3px";
    } else {
      lineSpace = "4px";
    }

    $('#text-space').hide();
    $('#pref').hide();
    $('#buttons').show();
  });

  $('#submit-btn').on('click', function() {
    console.log('submit clicked');
    $.ajax({
      url: '/users/test',
      data: { bgcolor: bgColor, fonttype: fontType, fontcolor: fontColor, linespace: lineSpace, textspace: textSpace },
      dataType: 'json',
      method: 'POST'
    }).done(function() {
      console.log('yes');
      window.location.href = "http://localhost:3000/users/search";
    });
  });
});
