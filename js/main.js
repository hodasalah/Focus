$(function () {
    "use strict";

    $(".page-loader").delay(1000).fadeOut();

    // Slider Int

    var mainBannerArea = $(".banner-area");

    mainBannerArea.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        animateOut: "zoomOutDown  ",
        animateIn: "zoomInDown",
        thumbs: false,
        nav: true,
        mouseDrag: true,
        navText: [
            '<i class="ti-arrow-left" aria-hidden="true"></i><div class="itemprebg"></div>',
            '<div class="itemnextbg"></div><i class="ti-arrow-right" aria-hidden="true"></i>',
        ],
        autoplay: true,
        touchDrag: true,
        lazyLoad: true,
        autoplayTimeout: 20000, // auto play time
    });

    var itemBg = $(".itembg");

    $(".banner-area .single-banner").each(function () {
        var itmeImg = $(this).find(".itembg img").attr("src");
        $(this).css({
            background: "url(" + itmeImg + ")",
        });
    });

    function slideThumb() {
        $(".banner-area .owl-item").removeClass("next prev");

        var currenSlide = $(".banner-area .owl-item.active");
        currenSlide.next(".owl-item").addClass("next");
        currenSlide.prev(".owl-item").addClass("prev");

        var nextSlideImg = $(".owl-item.next").find(".itembg img").attr("src");
        var prevSlideImg = $(".owl-item.prev").find(".itembg img").attr("src");

        $(".banner-area .owl-nav .owl-prev .itemprebg").css({
            background: "url(" + prevSlideImg + ")",
        });

        $(".banner-area .owl-nav .owl-next .itemnextbg").css({
            background: "url(" + nextSlideImg + ")",
        });
    }

    slideThumb();

    mainBannerArea.on("translate.owl.carousel", function () {
        $(".single-banner h1 span, .single-banner h1, .single-banner a")
            .removeClass("slideInLeft animated")
            .hide();
    });

    mainBannerArea.on("translated.owl.carousel", function () {
        slideThumb();
        $(
            ".owl-item.active .single-banner h1 span, .owl-item.active .single-banner h1, .owl-item.active .single-banner a"
        )
            .addClass("slideInLeft animated")
            .show();
    });

    // -Scroll To Section
    $(".navbar-nav li a").on("click", function (e) {
        e.preventDefault();

        $(".navbar-nav li a").removeClass("active");

        $(this).addClass("active");

        $("html, body").animate(
            {
                scrollTop: $("." + $(this).data("link")).offset().top,
            },
            1000
        );
    });

    $(window).on("scroll", function () {
        $("section").each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                $(".navbar-nav li a").removeClass("active");

                var blockID = $(this).attr("class");

                $('.navbar-nav li a[data-link="' + blockID + '"]').addClass(
                    "active"
                );
            }
        });
    });

    // - Change Navbar Background And Padding
    var top = jQuery(document).scrollTop(),
        batas = 20;

    if (top > batas) {
        $("header nav").addClass("nav-sticky");
        $("header").addClass("t-shadow");
    } else {
        $("header nav").removeClass("nav-sticky");
        $("header").removeClass("t-shadow");
    }
    $(window).on("scroll", function () {
        var top = jQuery(document).scrollTop(),
            batas = 20;

        if (top > batas) {
            $("header nav").addClass("nav-sticky");
            $("header").addClass("t-shadow");
        } else {
            $("header nav").removeClass("nav-sticky");
            $("header").removeClass("t-shadow");
        }
    });

    // - Team Carousel
    var teamCarousel = $(".team-carousel");

    teamCarousel.owlCarousel({
        items: 3,
        margin: 35,
        loop: true,
        dots: true,
        nav: false,
        mouseDrag: true,
        lazyLoad: true,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            480: { items: 1 },
            992: { items: 3 },
            1200: { items: 3 },
        },
    });

    // -progress bar
    function animateProgressBar() {
        $(".skill-box .progress-line > span").each(function () {
            var percent = $(this).data("percent");
            $(this).css({
                width: percent + "%",
                transition: "width 1.5s linear",
            });
        });
    }

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > $(".team").offset().top - 200) {
            animateProgressBar();
        }
    });
    if ($(window).scrollTop() > $(".team").offset().top - 200) {
        animateProgressBar();
    }

    // portfolio list
    var portPart = $(".works .row .mix");
    portPart.each(function () {
        $(this).hoverdir();
    });

    $(".grid").mixItUp();

    // - Testimonials Slider
    $(".testimonials-carousel").owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        nav: false,
        dots: true,
        center: true,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            480: { items: 1 },
            992: { items: 3 },
            1200: { items: 3 },
        },
    });
});
