$(document).ready(function() {
    $(window).scroll(function() {

        if ($(this).scrollTop() > 100) {
            $('nav').addClass('active');


        } else {
            $('nav').removeClass('active');

        }
    });


    $('[data-toggle="tooltip"]').tooltip();
    AOS.init({ once: true });
});

$(document).ready(function() {

    $("#topBtn").on("click", function() {
        $('body , html').scrollTop(0, 1000);
    });
});

$(document).ready(function() {
    'use strict';

    $(window).scroll(function() {
        // $("a[href^='#']").on("click", function() {
        //     $('a').each(function() {
        //         $(this).removeClass('activebar');

        //     });
        //     $(this).addClass('activebar');

        // });
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


$(document).ready(function() { // Tells the f//unction to wait to preform until everything on the page has loaded.
    $(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
        var Scroll = $(window).scrollTop(), // This variable finds the distance you have scrolled from the top.
            SectionOneOffset = $('#about-me').offset().top, // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
            SectionTwoOffset = $('#projects').offset().top - 100, // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.
            SectionThreeOffset = $('#contact').offset().top - 200; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.

        if (Scroll >= SectionOneOffset) { // If you have scrolled past section one do this.
            $(".navbar-default .menu-item-1").addClass("activebar");
            $(".menu-item").removeClass("activebar");
            // Adds class of current-menu-item to the menu item with a class of menu-item-1
            $("#topBtn").css("display", "block");

        } else { // If you have not scrolled section one do this.
            $(".navbar-default .menu-item-1").removeClass("activebar");
            $(".menu-item").removeClass("activebar");
            // Removes class of current-menu-item to the menu item with a class of menu-item-1
            $("#topBtn").css("display", "none");

        }
        if (Scroll >= SectionTwoOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
            $(".menu-item-2").addClass("activebar"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
            $(".menu-item-1").removeClass("activebar");
            $(".menu-item").removeClass("activebar");

            $(".menu-item-3").removeClass("activebar"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section two do this.
            $(".menu-item-2").removeClass("activebar"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
        }
        if (Scroll >= SectionThreeOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
            $(".menu-item-3").addClass("activebar"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
            $(".menu-item").removeClass("activebar");

            $(".menu-item-1").removeClass("activebar");
            $(".menu-item-2").removeClass("activebar"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section two do this.
            $(".menu-item-3").removeClass("activebar"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
        }

        if (Scroll >= SectionOneOffset) { // If you have scrolled past section one do this.
            $("#topBtn").css("display", "block"); // display back to top btn

        } else { // If you have not scrolled section one do this.
            $("#topBtn").css("display", "none"); // hide back to top btn

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