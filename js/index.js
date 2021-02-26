$(function(){
    $('body').css('paddinTop', $('.navbar').innerHeight() + 20);
    // Scroll To top
    var scrollButton = $("#scroll-top");
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 700){
            scrollButton.show();
        }else{
            scrollButton.hide();
        }
    });
    scrollButton.click(function(){
            $("html,body").animate({scrollTop : 0},600);
        });
  });

  $(document).ready(function () {
    'use strict';
    AOS.init({
        duration: 1500,
        once: true
    });
});