
$(document).ready(function() {
  var divBreedte = $(".c-slider__inner").outerWidth() - $(".c-slider__content").width() - 1;
  var lijnBreedte = $(".c-slider__content").width() / $(".c-slider__inner").outerWidth() * 150;
  
  $('.c-slider__indicator__inner').animate({width:lijnBreedte}, 0);
  
  $('#vandaag').click(function() { 
    $('#vandaag').addClass("c-link--active");
    $('#morgen').removeClass("c-link--active");
    $('.item_vandaag').animate({width: '440px', opacity: 1}, 500);
    $('.item_morgen').animate({width: '0px', opacity: 0}, 500);
    $(".c-slider__inner").css('width', '2200px');

    divBreedte = $(".c-slider__inner").outerWidth() - $(".c-slider__content").width() - 1;
    lijnBreedte = $(".c-slider__content").width() / $(".c-slider__inner").outerWidth() * 150;

    $('.c-slider__indicator__inner').animate({width:lijnBreedte}, 500);

    if($(".c-slider__content").scrollLeft() > divBreedte){
      $('.arrow_right').css({'opacity': '0.2', 'cursor': 'default'});
    } else {
      $('.arrow_right').css({'opacity': '1', 'cursor': 'pointer'});
    }
  });

  $('#morgen').click(function() { 
    $('#morgen').addClass("c-link--active");
    $('#vandaag').removeClass("c-link--active");
    $('.item_vandaag').animate({width: '0px', opacity: 0}, 500);
    $('.item_morgen').animate({width: '440px', opacity: 1}, 500);
    $(".c-slider__inner").css('width', '1320px');

    divBreedte = $(".c-slider__inner").outerWidth() - $(".c-slider__content").width() - 1;
    lijnBreedte = $(".c-slider__content").width() / $(".c-slider__inner").outerWidth() * 150;

    $('.c-slider__indicator__inner').animate({width:lijnBreedte}, 500);

    if($(".c-slider__content").scrollLeft() > divBreedte){
      $('.arrow_right').css({'opacity': '0.2', 'cursor': 'default'});
    } else {
      $('.arrow_right').css({'opacity': '1', 'cursor': 'pointer'});
    }            
  });
  
  $('.arrow_left').click(function() { 
      $(".c-slider__content").animate( { scrollLeft: '-=440' }, 200);
  });

  $('.arrow_right').click(function() { 
      $(".c-slider__content").animate( { scrollLeft: '+=440' }, 200);
  });

  if($(".c-slider__content").scrollLeft() < 1){
    $('.arrow_left').css({'opacity': '0.2', 'cursor': 'default'});
  } else {
    $('.arrow_left').css({'opacity': '1', 'cursor': 'pointer'});
  }
    
  $(".c-slider__content").scroll(function() {
      if($(".c-slider__content").scrollLeft() < 1){
        $('.arrow_left').css({'opacity': '0.2', 'cursor': 'default'});
      } else {
        $('.arrow_left').css({'opacity': '1', 'cursor': 'pointer'});
      }

      if($(".c-slider__content").scrollLeft() > divBreedte){
        $('.arrow_right').css({'opacity': '0.2', 'cursor': 'default'});
      } else {
        $('.arrow_right').css({'opacity': '1', 'cursor': 'pointer'});
      }

      var marge = 150 / $(".c-slider__inner").outerWidth() * $(".c-slider__content").scrollLeft();

      $('.c-slider__indicator__inner').css('marginLeft', marge);
  });
});
  
/*
function featured_thumb(maxwidth){   
// featured thumb functionality
    if((typeof maxwidth=='undefined')||(maxwidth==null)){maxwidth=900;}
    $('.arrowright').live('click',function(){
        if ( Math.round(parseFloat($("#featured-thumb-list").css("margin-left"),10))&lt;=-maxwidth)         {           $('#featured-thumb-list').stop();           $('#featured-thumb-list').animate({                 'margin-left': '-'+maxwidth               }, 500, function() {              // Animation complete.            });       }       else        {           $('#featured-thumb-list').stop();           $('#featured-thumb-list').animate({                 'margin-left': '-=160'            }, 500, function() {              // Animation complete.            });           }   });     $('.arrowleft').live('click',function(){        if ( Math.round(parseFloat($("#featured-thumb-list").css("margin-left"),10))&gt;=0)
        {
            $('#featured-thumb-list').stop();
            $('#featured-thumb-list').animate({
                'margin-left': '0'
              }, 500, function() {
                // Animation complete.
              });
        }
        else
        {
            $('#featured-thumb-list').stop();
            $('#featured-thumb-list').animate({
                'margin-left': '+=160'
              }, 500, function() {
                // Animation complete.
              });
        }
    });
    // end featured thumb functionality
}
  
jQuery(document).ready(function($)
{
    featured_thumb(850);
});
*/