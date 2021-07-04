$(document).ready(function(){
    /* Main Slider Active */

        $(".owl-carousel").owlCarousel({'items':1,
        'loop': true,
        'autoplay': true
    });

    /* Testimonials Active */
    $(".sliders").owlCarousel({
        'items':3,
        'loop': false,
        'autoplay': false,
        'margin': 30,
        'center': true
    }) ;

    /* Counterup Active */
    $('.counter').counterUp();
  
});

 /* Sticky Header
    ==================*/
  
$(window).load(function(){
   
    $(window).on('scroll', function(){
        if($(window).scrollTop()>50){
            $('.header-area').addClass("sticky");
        }else{
            $('.header-area').removeClass("sticky");
        }
    });


});
