'use strict';

$(document).ready(function () {

  function undoclass() {
    $('#content').removeClass('animate');
  }

  $('.zowerkthet').click(function () {
    $('#overlay').fadeIn(500);
    $('#popup').show();
    $('#content').addClass('animate');
    $('#popup').animate({ 'top': '0' }, 500);
    $('.close').animate({ 'bottom': '20' }, 500);

    setTimeout(undoclass, 600);
  });

  $('.ketelComfortPopup').click(function (e) {
    e.preventDefault();
    $('#overlay').fadeIn(500);
    $('#popup').show();
    $('#popup').animate({ 'top': '0' }, 500);
    $('.close').animate({ 'bottom': '20' }, 500);
  });

  $('.close').click(function () {

    $('#content').addClass('animate');
    $('#overlay').fadeOut(500);
    $('#popup').animate({ 'top': '100%' }, 500);
    $('#popup').hide();
    $('#content').css({ '-webkit-transform': 'scale(1)', '-moz-transform': 'scale(1)', '-ms-transform': 'scale(1)', '-o-transform': 'scale(1)', 'transform': 'scale(1)' });
    $('.close').animate({ 'bottom': '-200' }, 500);
  });

  $('#popup').scroll(function () {
    var homeTop = $('#popup').scrollTop();

    $("#overlay").each(function () {
      var height = $(this).height();
      var offset = 1600;
      var opacity = (height - homeTop + offset) / height;
      var scale = (height + homeTop + offset) / height / 6.21;

      $(this).css("opacity", opacity);
      $('#content').css({ '-webkit-transform': 'scale(' + scale + ')', '-moz-transform': 'scale(' + scale + ')', '-ms-transform': 'scale(' + scale + ')', '-o-transform': 'scale(' + scale + ')', 'transform': 'scale(' + scale + ')'
      });

      $(function () {
        if ($("#overlay").css('opacity') < 0.0001) {
          $('#popup').css('top', '100%');
          $('#popup').hide();
          $('#content').css({ '-webkit-transform': 'scale(1)', '-moz-transform': 'scale(1)', '-ms-transform': 'scale(1)', '-o-transform': 'scale(1)', 'transform': 'scale(1)' });
          $('#overlay').hide();
          $('#overlay').css('opacity', '0.8');
          $('#popup').scrollTop(0);
        }
      });
    });

    $(".close").each(function () {
      var height = $("#overlay").height();
      var offset = 2010;
      var bottom = 20 + (offset - homeTop);
      $(function () {
        if (homeTop > offset) {
          $(".close").css("bottom", bottom + 'px');
        }
      });
    });
  });
});