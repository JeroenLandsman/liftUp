$(document).ready(function() {
  if( $( "#stickynav" ).length ) {
    scrollTop();
  }

  $(window).scroll(function() {
    var sticky = $('#stickynav'),
    scroll = $(window).scrollTop();

    if (scroll >= 101) {
      sticky.addClass('c-stickynav--fixed'); 
    } else { 
      sticky.removeClass('c-stickynav--fixed');
    }
  });
});

function scrollTop() {
  setTimeout(function(){
    $('html, body').animate({scrollTop: '101px'}, {
      duration: 800,
      complete: showSticky()
    });
  },1500);
}

function showSticky() {
  setTimeout(function () {
    $("#stickynav").animate({'opacity' : '1'}, 800);  
  }, 1000);
}