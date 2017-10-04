$(document).ready(function() {
  if( $( "#stickynav" ).length ) {
    scrollToTop();
  }

  $(window).scroll(function() {
    var sticky = $('#stickynav'),
    scroll = $(window).scrollTop();

    if (scroll >= 101) {
      sticky.addClass('c-stickynav--fixed'); 
    } else { 
      sticky.removeClass('c-stickynav--fixed');
    }

    if (scroll >= 600) {
      sticky.addClass('c-stickynav--show-hidden'); 
    } else { 
      sticky.removeClass('c-stickynav--show-hidden');
    }
  });
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

function scrollToTop() {
  if ($(window).scrollTop() <= 90) {
    setTimeout(function(){
        $('html, body').animate({scrollTop: '101px'}, {
          duration: 800,
          complete: showSticky()
        });
    },1500);
  } else {
    showSticky();
  }
}

function showSticky() {
  setTimeout(function () {
    $("#stickynav").animate({'opacity' : '1'}, 800);  
  }, 1000);
}