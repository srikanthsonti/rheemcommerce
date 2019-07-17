// page init
jQuery(function () {
    initUniform();
    initSlimmage();
    initInputMask();
    //initValidation();
    //initImageMaps();
    //initResponseMap();

    $("a.inline-popup").fancybox({ aspectRatio: true, type: 'image' });

    initStickyBits();
    initMobileNav();
});

function initMobileNav() {
    var $nav = $("#sub-nav-v2");
    var smmClass = "show-mobile-menu";
    $(".burger").on("click", function (e) {
        e.preventDefault();
        $("html").toggleClass(smmClass);
        $(".mega-nav", $nav).slideUp();
    });

    $(".sub-nav", $nav).on("click", "> li > a", function (e) {
        var $mega = $(this).siblings(".mega-nav").first();
        if ($mega.size()) {
            e.preventDefault();
            if ($mega.is(":visible")) {
                $mega.slideUp();
            } else {
                $mega.slideDown();
            }
        }
    });

}

function initStickyBits() {
    if ($(".stickable").size()) {
        $(window).on("scroll", function (e) {
            var offset = Math.max($("html").scrollTop(), $("body").scrollTop()) + $("#header-v2").outerHeight(false);
            var $stickybit = $(".stickable").first();
            if (offset >= $stickybit.offset().top && !$("html").hasClass("stick-stickybit")) {
                $("html").addClass("stick-stickybit");
            } else if (offset < $stickybit.offset().top && $("html").hasClass("stick-stickybit")) {
                $("html").removeClass("stick-stickybit");
            }
        });
    }
}

jQuery(window).load(function () {
    //initCustomMap();
    initSameHeight();
    setTimeout(function () { $(window).resize().scroll(); }, 3000);
    initBxSlider();
    $(window).resize().scroll();
});

// custom map init
//function initCustomMap() {
//    jQuery('.map-section').each(function () {
//        jQuery(this).data('CustomMap', new CustomMap({
//            holder: this,
//            startZoom: 14
//        }));
//    });
//}

// uniform init
function initUniform() {
    jQuery('select, input').not('.not-uniform').uniform();
    jQuery('select.not-uniform').parents(".custom-select").each(function (e) {
        var $l = $(".val", this);
        var $s = $("select", this);
        $s.on("updateVal", function (e) {
            $l.text($("option:selected", this).text());
        }).on("change keyup keydown", function (e) {
            $(this).trigger("updateVal");
        }).trigger("updateVal");
    });

}

// slimmage init
function initSlimmage() {
    window.slimmage = {
        tryWebP: false,
        verbose: true
    };
}

// input mask init
function initInputMask() {
    jQuery(document).ready(function () {
        jQuery(':input').inputmask();
    });
}

// align blocks height
function initSameHeight() {
    jQuery('.featured-products-carousel').sameHeight({
        elements: '.head',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    }).sameHeight({
        elements: '.img-section',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });

    jQuery('.forms-block').sameHeight({
        elements: '.add-cashback, .add-system',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });

    jQuery('.section-block, .option-links').sameHeight({
        elements: '.feature-post, .link-box',
        flexible: true,
        multiLine: true
    });

    jQuery('.section-block, .option-links').sameHeight({
        elements: '.link-box .img-holder',
        flexible: true,
        multiLine: true
    });

    jQuery('.carousel').sameHeight({
        elements: '.product .head',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });

    jQuery('.carousel').sameHeight({
        elements: '.text-wrap',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });

    jQuery('.carousel').sameHeight({
        elements: '.img-sec',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });

    jQuery('.carousel').sameHeight({
        elements: '.same-height',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });

    jQuery('.config-block').sameHeight({
        elements: '.tab-pane h2',
        flexible: true,
        multiLine: true
    });

    jQuery('.config-block').sameHeight({
        elements: '.tab-pane .text-wrap',
        flexible: true,
        multiLine: true
    });

    jQuery('.config-block').sameHeight({
        elements: '.img-holder',
        flexible: true,
        multiLine: true
    });

    jQuery('.config-block').sameHeight({
        elements: '.tab-pane .list-unstyled',
        flexible: true,
        multiLine: true
    });

    jQuery('.config-block').sameHeight({
        elements: '.tab-pane .text-content',
        flexible: true,
        multiLine: true
    });

    jQuery('#zoneMapResults').sameHeight({
        elements: '.tab-pane .tab-pane .listWrap .savingProd h4',
        flexible: true,
        multiLine: true
    });

    jQuery('#zoneMapResults').sameHeight({
        elements: '.tab-pane .tab-pane .listWrap .savingProd figure',
        flexible: true,
        multiLine: true
    });
}

// bxSlider init
function initBxSlider() {
    var $hpCarousel = $(".hp-carousel");
    if ($hpCarousel.size()) {
        $(window).on("resize", function (e) {
            clearTimeout($hpCarousel.data("resizeToID"));
            $hpCarousel.data("resizeToID", setTimeout(function () {
                var idx = 1000;
                var o = 1 - ((idx - $(window).width()) / idx);
                $(".bg", $hpCarousel).css({ opacity: o });
            }, 200));
        });
    }

    var $testiBlock = $(".block-testimonials");
    $(".testimonials-list", $testiBlock).each(function () {
        var slider = jQuery(this);
        var btnPrev = $('.btn-prev', $testiBlock);
        var btnNext = $('.btn-next', $testiBlock);
        ResponsiveHelper.addRange({
            '..767': {
                on: function () {
                    slider.addClass("sliding");
                    slider.bxSlider({
                        slideSelector: '.testimonial',
                        pager: false,
                        prevSelector: btnPrev,
                        nextSelector: btnNext,
                        adaptiveHeight: false,
                        infiniteLoop: false,
                        slideMargin: 0,
                        slideWidth: 720,
                        minSlides: 1,
                        maxSlides: 1,
                        moveSlides: 1
                    });
                }
            },
            '768...': {
                on: function () {

                    if (slider.hasClass("sliding")) {
                        slider.destroySlider();
                        slider.removeClass("sliding");
                    }
                }
            }
        });
    });

    var carousels = jQuery('.carousel .slideset:not(.single-carousel .slideset)');
    var sliders = jQuery('.single-carousel .slideset');

    sliders.each(function () {
        var slider = jQuery(this);
        var btnPrev = slider.closest('.single-carousel').find('.btn-prev');
        var btnNext = slider.closest('.single-carousel').find('.btn-next');
        var adaptiveHeight = !$(this).closest(".carousel").hasClass("fixed-height-carousel");

        slider.bxSlider({
            auto: (carouselTimer > 0) ? true : false,
            pause: (carouselTimer > 0) ? (carouselTimer * 1000) : 1000,
            slideSelector: '.slide',
            pager: false,
            prevSelector: btnPrev,
            nextSelector: btnNext,
            adaptiveHeight: adaptiveHeight,
            infiniteLoop: true,
            slideMargin: 0,
            onSliderLoad: function () {
                slider.addClass("initialised");
            }
        });
    });

    carousels.each(function () {
        var carousel = jQuery(this);
        var btnPrev = carousel.closest('.carousel').find('.btn-prev');
        var btnNext = carousel.closest('.carousel').find('.btn-next');

        carousel.bxSlider();

        if (carousel.parents(".block-featured-products").size()) {
            ResponsiveHelper.addRange({
                '..767': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: false,
                            infiniteLoop: false,
                            slideMargin: 0,
                            slideWidth: 336,
                            minSlides: 1,
                            maxSlides: 1,
                            moveSlides: 1
                        });
                    }
                },
                '768..991': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: false,
                            infiniteLoop: false,
                            slideMargin: 25,
                            slideWidth: 335,
                            minSlides: 1,
                            maxSlides: 2,
                            moveSlides: 1
                        });
                    }
                },
                '992..1139': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: false,
                            infiniteLoop: false,
                            slideMargin: 23,
                            slideWidth: 298,
                            minSlides: 1,
                            maxSlides: 3,
                            moveSlides: 1
                        });
                    }
                },
                '1140..': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: false,
                            infiniteLoop: false,
                            slideMargin: 25,
                            slideWidth: 314,
                            minSlides: 1,
                            maxSlides: 3,
                            moveSlides: 1
                        });
                    }
                }
            });
        } else if (carousel.hasClass('carousel-2')) {
            ResponsiveHelper.addRange({
                '..767': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: true,
                            infiniteLoop: false,
                            slideMargin: 0,
                            slideWidth: 700,
                            minSlides: 1,
                            maxSlides: 1,
                            moveSlides: 1
                        });
                    }
                },
                '768..991': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: true,
                            infiniteLoop: false,
                            slideMargin: 10,
                            slideWidth: 500,
                            minSlides: 2,
                            maxSlides: 2,
                            moveSlides: 1
                        });
                    }
                },
                '992..': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: true,
                            infiniteLoop: false,
                            slideMargin: 16,
                            slideWidth: 500,
                            minSlides: 4,
                            maxSlides: 4,
                            moveSlides: 1
                        });
                    }
                }
            });
        } else if (carousel.hasClass('carousel-flip-blocks')) {
            ResponsiveHelper.addRange({
                '..767': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: true,
                            infiniteLoop: false,
                            slideMargin: 0,
                            slideWidth: 315,
                            minSlides: 1,
                            maxSlides: 1,
                            moveSlides: 1
                        });
                    }
                },
                '768..991': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: true,
                            infiniteLoop: false,
                            slideMargin: 10,
                            slideWidth: 350,
                            minSlides: 2,
                            maxSlides: 2,
                            moveSlides: 1
                        });
                    }
                },
                '992..': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: true,
                            infiniteLoop: false,
                            slideMargin: 23,
                            slideWidth: 301,
                            minSlides: 1,
                            maxSlides: 3,
                            moveSlides: 1
                        });
                    }
                }
            });
        } else {
            ResponsiveHelper.addRange({
                '..767': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: true,
                            infiniteLoop: false,
                            slideMargin: 0,
                            slideWidth: 700,
                            minSlides: 1,
                            maxSlides: 1,
                            moveSlides: 1
                        });
                    }
                },
                '768..991': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: true,
                            infiniteLoop: false,
                            slideMargin: 10,
                            slideWidth: 500,
                            minSlides: 2,
                            maxSlides: 2,
                            moveSlides: 1
                        });
                    }
                },
                '992..': {
                    on: function () {
                        carousel.reloadSlider({
                            slideSelector: '.slide',
                            pager: false,
                            prevSelector: btnPrev,
                            nextSelector: btnNext,
                            adaptiveHeight: true,
                            infiniteLoop: false,
                            slideMargin: 16,
                            slideWidth: 500,
                            minSlides: 3,
                            maxSlides: 4,
                            moveSlides: 1
                        });
                    }
                }
            });
        }
    });
}
