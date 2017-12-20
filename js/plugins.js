/*global $, jQuery, alert, console*/

$(document).ready(function () {
   
    "use strict";
    
    // Nice Scroll
    
    $("html").niceScroll({
                
        cursorcolor: '#f7600e',
        cursorborder: '3px solide #f7600e'
    });

    //change header height
    $('.header').height($(window).height());
    
    
    //scroll to features
    $('.header .arrow').click(function () {
        
        $('html, body').animate({
           
            scrollTop: $('.features').offset().top
           
        }, 1200);
        
        
    });
    
    
    $('.header .hire').click(function () {
        
        $('html, body').animate({
           
            scrollTop: $('.our-team').offset().top
           
        }, 1200);
        
        
    });
    
    $('.header .our-works').click(function () {
        
        $('html, body').animate({
           
            scrollTop: $('.our-work').offset().top
           
        }, 1200);
        
        
    });
    
    
    
    //show more
    $('.show-more').click(function () {
        
        $('.our-work .hidden').slideToggle(2000);
        
    });
    
    //check testimonials
    
    var leftArrow = $('.testi .fa-chevron-left'),
        
        rightArrow = $('.testi .fa-chevron-right');
    
    function checkClients() {
        if ($('.client:first').hasClass('active')) {
            leftArrow.fadeOut();
        } else {
            
            leftArrow.fadeIn();
        }
        
        if ($('.client:last').hasClass('active')) {
            rightArrow.fadeOut();
        } else {
            
            rightArrow.fadeIn();
        }
    }
    
    checkClients();
    
    $('.testi i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testi .active').fadeOut(100, function () {
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        } else {
            $('.testi .active').fadeOut(100, function () {
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
        
        
    });
    
    
    

});
