
$(document).ready(function() {
  var divBreedte = $(".slider_inner").outerWidth() - $(".slider").width() - 1;
  
  var lijnBreedte = $(".slider").width() / $(".slider_inner").outerWidth() * 150;
  
  $('.lijn').animate({width:lijnBreedte}, 0);
  
  $('#vandaag').click(function() { 
    $('#vandaag').addClass("active");
    $('#morgen').removeClass("active");
    $('.item_vandaag').animate({width: '440px', opacity: 1}, 500);
    $('.item_morgen').animate({width: '0px', opacity: 0}, 500);
    $('.slider_inner').css('width', '2200px');

    divBreedte = $(".slider_inner").outerWidth() - $(".slider").width() - 1;
    lijnBreedte = $(".slider").width() / $(".slider_inner").outerWidth() * 150;

    $('.lijn').animate({width:lijnBreedte}, 500);

    if($('.slider').scrollLeft() > divBreedte){
      $('.arrow_right').css({'opacity': '0.2', 'cursor': 'default'});
    } else {
      $('.arrow_right').css({'opacity': '1', 'cursor': 'pointer'});
    }
  });

  $('#morgen').click(function() { 
    $('#morgen').addClass("active");
    $('#vandaag').removeClass("active");
    $('.item_vandaag').animate({width: '0px', opacity: 0}, 500);
    $('.item_morgen').animate({width: '440px', opacity: 1}, 500);
    $('.slider_inner').css('width', '1320px');

    divBreedte = $(".slider_inner").outerWidth() - $(".slider").width() - 1;
    lijnBreedte = $(".slider").width() / $(".slider_inner").outerWidth() * 150;

    $('.lijn').animate({width:lijnBreedte}, 500);

    if($('.slider').scrollLeft() > divBreedte){
      $('.arrow_right').css({'opacity': '0.2', 'cursor': 'default'});
    } else {
      $('.arrow_right').css({'opacity': '1', 'cursor': 'pointer'});
    }            
  });
  
  $('.arrow_left').click(function() { 
      $('.slider').animate( { scrollLeft: '-=440' }, 200);
  });

  $('.arrow_right').click(function() { 
      $('.slider').animate( { scrollLeft: '+=440' }, 200);
  });

  if($('.slider').scrollLeft() < 1){
    $('.arrow_left').css({'opacity': '0.2', 'cursor': 'default'});
  } else {
    $('.arrow_left').css({'opacity': '1', 'cursor': 'pointer'});
  }
    
  $('.slider').scroll(function() {
      if($('.slider').scrollLeft() < 1){
        $('.arrow_left').css({'opacity': '0.2', 'cursor': 'default'});
      } else {
        $('.arrow_left').css({'opacity': '1', 'cursor': 'pointer'});
      }

      if($('.slider').scrollLeft() > divBreedte){
        $('.arrow_right').css({'opacity': '0.2', 'cursor': 'default'});
      } else {
        $('.arrow_right').css({'opacity': '1', 'cursor': 'pointer'});
      }

      var marge = 150 / $(".slider_inner").outerWidth() * $('.slider').scrollLeft();

      $('.lijn').css('marginLeft', marge);
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