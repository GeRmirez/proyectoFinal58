/* animacio de navbar */


$(document).ready(function () {
    function toggleMenu() {
        $('nav').slideToggle();
    }

    $('.menu-icon').click(function () {
        toggleMenu();
    });

    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth > 800) {
            $('nav').show();
        } else {
            $('nav').hide(); 
        }
    });
   
    $('nav ul li a').click(function() {
        if ($(window).width() < 801) {
            toggleMenu();
        }
    });
});
