$(document).ready(function() {
    $(window).scroll(function() {

        if ($(this).scrollTop() > 100) {
            $('.nav-header').css({
                'background-color': '#003366',
                'transition': ' all 0.5s ease',
                'color': 'white'
            });
        } else {
            $('.nav-header').css({
                'background-color': 'transparent',
                'transition': ' all 0.5s ease',
                'color': 'white'
            });
        }



    });
    $('[data-toggle="tooltip"]').tooltip();

});