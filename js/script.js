/*------------Preloader--------*/
$(window).on('load',function(){     //make sure whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    });
/*---counter---*/
$(function(){
    $(".counter").counterUp({
        delay:10,
        time:5000
    });
});
/*---Team---*/
$(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:false,
        dots:false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            }
        }
    });
  });
  
/*---Sticky function for side---*/
jQuery(document).ready(function(){
    var offsetop = jQuery(".sticky").offset().top;
    var offsebot = jQuery("#message").offset().top;
    jQuery(window).scroll(function(){
        var scrollpos=jQuery(window).scrollTop();
       
       if((scrollpos>=offsetop)&&(scrollpos<=(offsebot-400))){
           jQuery(".sticky").addClass("fixed");
       }
       else{
        jQuery(".sticky").removeClass("fixed");
       }  });

});
/*---navigation white class function only---*/
 jQuery(document).ready(function(){
   
    jQuery(window).scroll(function(){
       
       if($(window).scrollTop()>50){
        $("nav").addClass("white-nav-top");
        $(".navbar-brand img").attr("src","images/WeDeliver/logo.svg");
        $("#back-to-top").addClass("back-to-opacity");
        $("#back-to-top").fadeIn();
        $("#to-down").fadeOut();
    }
       
     else{
        $("nav").removeClass("white-nav-top");
        $(".navbar-brand img").attr("src","images/WeDeliver/logo2.svg");
        $("#back-to-top").fadeOut();
        $("#to-down").fadeIn();
    }
    });

}); 
/*---Both black and white navigation modify according to scroll position---*/
 jQuery(document).ready(function(){
    var offsetop = jQuery("#result").offset().top;
    var offsebot = jQuery("#techknows").offset().top;
   
    jQuery(window).scroll(function(){
        var scrollpos=jQuery(window).scrollTop();
       
        if((scrollpos>=offsetop)&&(scrollpos<=offsebot)){
           
        $("nav").removeClass("white-nav-top");
            $("nav").addClass("black-nav-top"); 
         $(".navbar-brand img").attr("src","images/WeDeliver/logo2.svg");
         
     }
   
     else if(scrollpos<50){
        $("nav").removeClass("white-nav-top");
        $("nav").removeClass("black-nav-top");
     }
     else{
        $("nav").removeClass("black-nav-top");
        $("nav").addClass("white-nav-top");
        $(".navbar-brand img").attr("src","images/WeDeliver/logo.svg");
    }
    });

});
 /*---modification for back-to-top---*/
jQuery(document).ready(function(){
   var offsetop = jQuery("#result").offset().top;
     var offsebot = jQuery("#techknows").offset().top;
   
    jQuery(window).scroll(function(){
        var scrollposbtt=jQuery("#back-to-top").offset().top;
        if((scrollposbtt>=offsetop+100)&&(scrollposbtt<=offsebot+200)){
      $("#back-to-top").addClass("in-orange");
          /*   alert(scrollposbtt);   */
     }
     
     else{
        $("#back-to-top ").removeClass("in-orange"); 
         $("#back-to-top ").addClass("in-black");
       } 
    });

});
/*---menu---*/
$(function(){
$(".navbar-toggle").click(function(){
   
     $("#navigation").toggle("navigate-right"); 
     $("#nav-overlay").toggle(); 
     $(".navbar-toggle span").toggle("icon-rotate"); 
     $(".navbar-toggle").addClass("nav-span"); 
   /*  alert("clicked"); */
});
});
$(function(){
$(".menu a").click(function(){
    $("#navigation").hide(); 
    $("#nav-overlay").hide(); 
    $(".navbar-toggle span").toggle("icon-rotate"); 
});
});
$(function(){
    $("#nav-overlay").click(function(){
        $("#navigation").hide(); 
        $("#nav-overlay").hide(); 
        $(".navbar-toggle span").toggle("icon-rotate"); 
    });
    });
/*---Smooth scroll---*/
  $(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        var section_id=$(this).attr("href");
        $("html,body").animate({
            scrollTop:$(section_id).offset().top - 64
        },1250,"easeInOutExpo");
    });
  });
 
 