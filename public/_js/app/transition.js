;(function ($) {
  'use strict';
  var content  = $('#main').smoothState({
        // onStart runs as soon as link has been activated
        onStart : {
          
          // Set the duration of our animation
          duration: 250,
          
          // Alterations to the page
          render: function () {

            // Quickly toggles a class and restarts css animations
            content.toggleAnimationClass('is-exiting');

            // Scroll user to the top
            $body.animate({ 'scrollTop': 0 });
          }
        }
      }).data('smoothState'); // makes public methods available
})(jQuery);


$(document).ready(function() {
  // bert transition
  $("#bertButton").click(function(){
    var $bert = $("#bert"),
        $bertOverlay = $("#bertOverlay"),
        bertWidth = $bert.width(),
        bertHeight = $bert.height(),
        bertPos = $bert.offset(),
        url = $(this).data("location"),
        $inner = $(".c-bert__inner");
    $bertOverlay.css({"height": bertHeight, "width" : bertWidth, "z-index": 9999, "top" : bertPos.top, "left" : bertPos.left});
    $inner.fadeOut();    
    $bertOverlay.animate({"height": "100%", "width" : "100%", "top" : 0, "left" : 0},{
      duration: 800,
      complete: function(){
        console.log(url);
        window.location.href = url;
      }
    });    
  });  
});