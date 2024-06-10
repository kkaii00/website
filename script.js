$(document).ready(function () {
    "use strict";

    /*==================================
    * Author        : "ThemeSine"
    * Template Name : Khanas HTML Template
    * Version       : 1.0
    ==================================== */

    // 1. Scroll To Top 
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.return-to-top').fadeIn();
        } else {
            $('.return-to-top').fadeOut();
        }
    });
    $('.return-to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    // 2. Smooth Scroll spy
    $('.header-area').sticky({
        topSpacing: 0
    });

    $('li.smooth-menu a').bind("click", function (event) {
        event.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1200, 'easeInOutExpo');
    });

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 0
    });

    // 3. Progress-bar
    $(document).ready(function() {
    var progressBar = $(".progress-bar");
    progressBar.each(function() {
        var each_bar_width = $(this).attr('aria-valuenow');
        $(this).css('width', each_bar_width + '%');
    });
});


    // 4. owl carousel
    $('#client').owlCarousel({
        items: 7,
        loop: true,
        smartSpeed: 1000,
        autoplay: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            415: {
                items: 2
            },
            600: {
                items: 4

            },
            1199: {
                items: 4
            },
            1200: {
                items: 7
            }
        }
    });

    $('.play').on('click', function () {
        $('#client').trigger('play.owl.autoplay', [1000])
    });
    $('.stop').on('click', function () {
        $('#client').trigger('stop.owl.autoplay')
    });

    // 5. welcome animation support
    $(window).on('load', function () {
        $(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({ 'opacity': '0' });
        $(".header-text a").removeClass("animated fadeInDown").css({ 'opacity': '0' });
    });

    $(window).on('load', function () {
        $(".header-text h2,.header-text p").addClass("animated fadeInUp").css({ 'opacity': '1' });
        $(".header-text a").addClass("animated fadeInDown").css({ 'opacity': '1' });
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    const typed = select('.typed');
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
});