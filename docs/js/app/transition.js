"use strict";

// ;(function ($) {
//   'use strict';
//   var content  = $('#main').smoothState({
//         // onStart runs as soon as link has been activated
//         onStart : {

//           // Set the duration of our animation
//           duration: 250,

//           // Alterations to the page
//           render: function () {

//             // Quickly toggles a class and restarts css animations
//             content.toggleAnimationClass('is-exiting');

//             // Scroll user to the top
//             // $body.animate({ 'scrollTop': 0 });
//             $body.scrollTop(0);
//           }
//         }
//       }).data('smoothState'); // makes public methods available
// })(jQuery);


$(document).ready(function () {
  // bert transition
  $("#bertButton").click(function () {
    var $bert = $("#bert"),
        $bertOverlay = $("#bertOverlay"),
        bertWidth = $bert.width(),
        bertHeight = $bert.height(),
        bertPos = $bert.offset(),
        url = $(this).data("location");
    $bertOverlay.css({ "height": bertHeight, "width": bertWidth, "z-index": 9999, "top": bertPos.top, "left": bertPos.left });
    $bertOverlay.animate({ "opacity": 1 }, {
      duration: 800,
      complete: function complete() {
        $bertOverlay.animate({ "height": "100%", "width": "100%", "top": 0, "left": 0 }, {
          duration: 800,
          complete: function complete() {
            window.location.href = url;
          }
        });
      }
    });
  });

  //slider transition
  $("a.c-slider__link").on('click', function (event) {
    var height = $(this).height(),
        width = $(this).width(),
        $bertOverlay = $("#bertOverlay"),
        offset = $(this).offset(),
        url = $(this).attr("href"),
        type = $(this).data("type");
    event.preventDefault();
    $bertOverlay.addClass(type);
    $bertOverlay.css({ "height": height, "width": width, "z-index": 9999, "top": offset.top, "left": offset.left });
    $bertOverlay.animate({ "opacity": 1 }, {
      duration: 800,
      complete: function complete() {
        $bertOverlay.animate({ "height": "100%", "width": "100%", "top": 0, "left": 0 }, {
          duration: 800,
          complete: function complete() {
            window.location.href = url;
          }
        });
      }
    });
  });
});