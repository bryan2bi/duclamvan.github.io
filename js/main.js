var main = function() {

    /* Open Menu*/
  $('.menu-bars').click(function() {
    $('#menu').animate( { left: "0rem"
    }, 200);
    $('body').animate({
      left: "15.625rem"
    }, 200);
 
  
  });
  
  /* Close Menu*/
  $('.menu-close').click(function() {
      $('#menu').animate({ left: "-15.625rem"
    }, 200);
    $('body').animate( {
      left: "0rem"
    }, 200);
    
  });

/*Language dropdown */
$('.language').click(function(){
$('.language-options').show();

});
$('.language-options-close').click(function(){
$('.language-options').hide();

});

/* SEARCH dropdown */
/*show*/
$('.menu-search').mouseenter(function(){
$('.search').show();
});
/*hide*/
$('.search').mouseleave(function(){
$('.search').hide();
});
    
}
$(document).ready(main);