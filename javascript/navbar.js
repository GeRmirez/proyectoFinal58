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

    $('nav ul li a').click(function () {
        if ($(window).width() < 801) {
            toggleMenu();
        }
    });
});



/* desplazamiento */

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    const headerHeight = document.querySelector("nav").offsetHeight;

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            const targetPosition = target.offsetTop - headerHeight;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;

            window.requestAnimationFrame(step);

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }

            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }
        });
    });
});
