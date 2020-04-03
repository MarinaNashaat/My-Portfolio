$(document).ready(function() {
    $(window).scroll(function() {

        if ($(this).scrollTop() > 100) {
            $('nav').addClass('active');


        } else {
            $('nav').removeClass('active');

        }
    });


    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
    'use strict';

    $(window).scroll(function() {
        $('.navbar-default .navbar-nav li a').on('click', function() {
            $('.navbar-default .navbar-nav li a').removeClass('activebar');
            $(this).addClass('activebar');
        });
    });
 $('.navbar-nav li a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    $('.logo').on('click', function() {
        $('.navbar-collapse').collapse('hide');

    });

});


$(document).ready(function() { 
    $(window).scroll(function() { 
        var Scroll = $(window).scrollTop(), 
            SectionOneOffset = $('#about-me').offset().top,
            SectionTwoOffset = $('#projects').offset().top - 100,
            SectionThreeOffset = $('#contact').offset().top - 200; 
        
        if (Scroll >= SectionOneOffset) { 
            $(".navbar-default .menu-item-1").addClass("activebar"); 
        }
        else {
            $(".navbar-default .menu-item-1").removeClass("activebar");
        }
        if (Scroll >= SectionTwoOffset) { 
            $(".menu-item-2").addClass("activebar");
            $(".menu-item-1").removeClass("activebar");
            $(".menu-item-3").removeClass("activebar"); 
        } else {
            $(".menu-item-2").removeClass("activebar"); 
        }
        if (Scroll >= SectionThreeOffset) {
            $(".menu-item-3").addClass("activebar");
            $(".menu-item-1").removeClass("activebar");
            $(".menu-item-2").removeClass("activebar"); 
        } else { 
            $(".menu-item-3").removeClass("activebar"); 
        }
    });
    $("#about-link").on("click", function() {
        $(this).scrollTo($("#about-me"), 1000);
    });
    $("#porto-link").on("click", function() {
        $(this).scrollTo($("#projects"), 1000);
    });
    $("#contact-link").on("click", function() {
        $(this).scrollTo($("#contact"), 1000);
    });
    $("#logo-name").on("click", function() {
        $(this).scrollTo(0, 1000);

    });

});
