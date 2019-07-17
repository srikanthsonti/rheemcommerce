$(document).ready(function () {
    checkCSS();
    validatePostcode();
    initTabs();
    initFlip();
    initProductRangeForm();
    initFindYourPerfectSystem();
    initYouTube();

    initClearPostcode();
    initSubmitPostcode();
    initDealerMenuExpander();
    initHeaderPostcode();
    initDownloadTracking();
    initInternational();
    initZoneMap();
    initZoneMap2();
    updateZoneMap();
    initHistorySliderFix();

    initSameHeightFeaturedProductBlock();
    initImageTextPanels();

    Recaptcha($('#BlockGetAFreeQuoteHeaderButton'), $("#BlockGetAFreeQuoteHeaderForm"), $('#BlockGetAFreeQuoteHeaderRecaptchaValue'), 0);
    Recaptcha($('#BlockGetAFreeQuoteButton'), $("#BlockGetAFreeQuoteForm"), $('#BlockGetAFreeQuoteRecaptchaValue'), 1);
    Recaptcha($('#BlockContactButton'), $("#BlockContactForm"), $('#BlockContactRecaptchaValue'), 2);
    Recaptcha($('#BlockSubscribeButton'), $("#BlockSubscribeForm"), $('#BlockSubscribeRecaptchaValue'), 3);
    Recaptcha($('#DealerEnquiryButton'), $("#DealerEnquiryForm"), $('#DealerEnquiryRecaptchaValue'), 4);
});

var youTubeWidth = 320;
var youTubeHeight = 180;

$(window).resize(function () {
    initYouTube();
});

var zone = "0";
var zoneImg = "";
var zoneImgMobile = "";

function initZoneMap2() {
    $(".blockMap-2").each(function (i, item) {
        var imgs = $(".map-imgs", this);
        var map = $("map", this);
        $('.map-mask', imgs).rwdImageMaps();

        $("map [data-zone]", this).on("mouseenter", function (e) {
            $(item).attr("hover-zone", $(this).data("zone"));
        }).on("mouseleave", function (e) {
            $(item).attr("hover-zone", 0);
        }).on("showTab", function (e) {
            var z = $(this).data("zone");
            $(item).attr("active-zone", z);
            var $trg = $($(this).attr("href"));
            $trg.siblings(".tab-pane").removeClass("in");
            setTimeout(function () {
                $trg.siblings(".tab-pane").removeClass("active");
                $trg.addClass("active in");
            }, 150);
        }).on("click", function (e) {
            // update the ZONE hidden element, this is VERY IMPORTANT
            var zone = $(this).data('zone');
            if (zone)
                $('input[name="Zone"]').val(zone);

            e.preventDefault();
            $(this).trigger("showTab");
        });
    });
}

function initZoneMap() {
    $('.map').maphilight({ fade: false });

    $('.worldMap').maphilight({
        fillColor: '0051a3',
        stroke: false,
        neverOn: false,
        alwaysOn: false,
    });

    //desktop
    $('#zOne, #zTwo, #zThree, #zFour, #zFourI, #zFourII').mouseover(function () {
        //$('div.mapimg').css('background', 'url(' + $(this).data('image') + ')');
        $('div.mapimg').css('background-position', $(this).data('image-position'));
    }).mouseleave(function () {
        if (zone == "0") {
            //$('div.mapimg').css('background', 'url(/content/images/map.png)');
            $('div.mapimg').css('background-position', '0 0');
        }
        else {
            //$('div.mapimg').css('background', 'url(' + zoneImg + ')');
            $('div.mapimg').css('background-position', zoneImgPos);
        }
    }).click(function (e) {
        zone = $(this).data('zone');
        //zoneImg = $(this).data('image');
        zoneImgPos = $(this).data('image-position');
        e.preventDefault();
    });

    //mobile
    $('#mobilezOne, #mobilezTwo, #mobilezThree, #mobilezFour, #mobilezFourI, #mobilezFourII').mouseover(function () {
        $('div.mobileimg').css('background', 'url(' + $(this).data('image') + ')');
    }).mouseleave(function () {
        if (zone == "0") {
            $('div.mobileimg').css('background', 'url(/content/images/xsMap.png)');
        }
        else {
            $('div.mobileimg').css('background', 'url(' + zoneImgMobile + ')');
        }
    }).click(function (e) {
        zone = $(this).data('zone');
        zoneImgMobile = $(this).data('image');
        e.preventDefault();
    });

    //select default zone
    var timer = setTimeout(function () {
        $('#zOne').click();
        //$('div.mapimg').css('background', 'url(' + zoneImg + ')');
        $('#mobilezOne').click();
        $('div.mobileimg').css('background', 'url(' + zoneImgMobile + ')');
    }, 500);

    //form submission
    $('#ZoneMap ul li a').on('click', function (e) {
        $('input[name="ProductRange"]', '#ZoneMap').val($(this).data('range'));

        // Zone is getting updated everytime the map is clicked. DO NOT UPDATE here
        // $('input[name="Zone"]', '#ZoneMap').val(zone);

        $('#ZoneMap').submit();
        e.preventDefault();
    });

    if ($(window).width() < 768) {
        $('#Map').remove();
    }
}

function updateZoneMap() {
    var zoneBlockMap2Products = ['Solar Power'];
    var activeProduct = $('#zoneMapActiveProduct').val();

    if (!activeProduct)
        return;

    // get the zone to display
    var zone = $('input[name="Zone"]').val();

    var $blockMap = $('#blockMap-1');
    var $blockMap2 = $('#blockMap-2');

    if (zoneBlockMap2Products.indexOf(activeProduct) !== -1) {
        $blockMap.hide();
        $blockMap2.show();
        $('.map-mask', $(".map-imgs", $blockMap2)).rwdImageMaps();
        $blockMap2.find("map [data-zone=" + zone + "]").trigger("showTab");

    } else {
        $blockMap2.hide();
        $blockMap.show();
        $('.map-mask', $(".map-imgs", $blockMap)).rwdImageMaps();
        $blockMap.find("map [data-zone=" + zone + "]").trigger("showTab");
    }

}

function checkYouTubeAspectRatio() {
    var w = $(window).width();
    if (w <= 399) {
        youTubeWidth = 320;
        youTubeHeight = 180;
    }
    else if (w <= 768) {
        youTubeWidth = 400;
        youTubeHeight = 225;
    }
    else if (w <= 992) {
        youTubeWidth = 768;
        youTubeHeight = 432;
    }
    else if (w <= 1024) {
        youTubeWidth = 992;
        youTubeHeight = 558;
    }
    else {
        youTubeWidth = 1024;
        youTubeHeight = 575;
    }
}

function initYouTube() {
    checkYouTubeAspectRatio();
    $(".youtube").YouTubeModal({ autoplay: 0, width: youTubeWidth, height: youTubeHeight, cssClass: 'youTubePopUp' });

}

function initFindYourPerfectSystem() {
    $('div.family-size.icon-area span').on('click', function () {
        $('div.family-size.icon-area span').removeClass('active');
        $(this).addClass('active');

        var form = $(this).closest('form');
        $('input[Name="FamilySize"]', form).val($(this).data('size'));
    });

    $('ul.list-inline.option-links li a.link-box').on('click', function () {
        var form = $('#FindYourPerfectSystemForm');

        $('input[Name="PreferredConfiguration"]', form).val($(this).data('systemtype'));
        $('#FindYourPerfectSystemForm').submit();
    });
}

function initSameHeightsHomepage() {
    var maxHeight = $("div.product-pane div.text-content").map(function () {
        return $(this).outerHeight();
    }).get();

    //console.log('initSameHeightsHomepage: ' + Math.max.apply(null, maxHeight));
    //$("div.product-pane div.text-content").css('height', Math.max.apply(null, maxHeight) + 'px');
}

function initSameHeightFeaturedProductBlock() {
    var maxHeight = $("div.featured-products-carousel div.features").map(function () {
        return $(this).outerHeight();
    }).get();

    //console.log('initSameHeightFeaturedProductBlock: ' + Math.max.apply(null, maxHeight));
    $("div.featured-products-carousel div.features").css('height', Math.max.apply(null, maxHeight) + 'px');
}

function initProductRangeForm() {
    $('ul.list-inline.option-links li').on('click', function (e) {
        var container = $(this).parent();
        if ($(this).hasClass('active')) {
            e.preventDefault();
        }
        else {
            $('li', container).removeClass('active');
            $(this).addClass('active');
        }
    });
}

function initFlip() {
    $('#keyfeatures div.col-xs-6.col-md-3, section.section-block div.slide').each(function () {
        var $flip = $(this);
        $flip.flip({ front: '.slide-front', back: '.slide-back', trigger: 'manual' });
        $flip.on("click", ".btn-show-more", function (e) {
            $(e.delegateTarget).flip(true).addClass("flipped");
        }).on("click", ".btn-show-less", function (e) {
            $(e.delegateTarget).flip(false).removeClass("flipped");
        });
    });
}

function checkCSS() {
    //testimonial block CSS fix.
    $('section.section-block:eq(0)').removeClass('product-section');
    $('section.section-block:gt(0)').removeClass('testimonials-sec');
}

function validatePostcode() {
    $('input[name="Postcode"]').keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            ((e.keyCode >= 35 && e.keyCode <= 40) || e.keyCode == 107)) {
            // let it happen, don't do anything
            return;
        }

        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
}

function initTabs() {
    $('section.category-product ul li a').on('click', function (e) {

        if (!$(this).closest('li').hasClass('active')) {
            //turn off previous panel
            var activePanel = $('section.category-product ul li.active');
            $(activePanel).removeClass('active');
            $($('a', activePanel).attr('href')).hide().removeClass('active');

            //turn on panel
            var showPanel = $(this).attr('href');
            $(this).closest('li').addClass('active')
            $(showPanel).show().addClass('active');
        }
        e.preventDefault();
    });
}

function productFilterBegin(o) {
    $('button[type="submit"]', o).text('Updating...');
    $('#products-summary-container').css('opacity', '0.5');
}

function productFilterComplete(o) {
    $('button[type="submit"]', o).text('Refine');
    $('#products-summary-container').css('opacity', '1');
}

function productPostCodeBegin(o) {
    $('.product-pricing').css('opacity', '0.5');
}

function productPostCodeComplete(o) {
    $('.product-pricing').css('opacity', '1');
    $("#header-v2").load(location.href + " #header-v2");
}

function initClearPostcode() {
    $(document).on("click", ".clearPostcode", function (e) {
        $('.txtPostcode').val("");
        $('#postcode-submit').submit();
    });
}
function initSubmitPostcode() {
    $(document).on("click", ".submitPostcode", function (e) {
        $('#postcode-submit').submit();
    });
}

function initDealerMenuExpander() {
    $(".dealer-menu a.expand").click(function () {
        var parent = $(this).parent("li");

        if (parent.hasClass("menu-view-expanded")) {
            parent.removeClass("menu-view-expanded");
            $(this).next("ul").hide();
        } else {
            parent.addClass("menu-view-expanded");
            $(this).next("ul").show();
        }

        // $(this).next("ul").toggle();
    });
}

function initHeaderPostcode() {
    $(document).on("click", ".dealer-chooser .find", function (e) {
        var $wrapp = $(".dealer-chooser");
        e.preventDefault();
        $wrapp.addClass("show-post-code");
        setTimeout(function () { $("#dealer-postcode-input", $wrapp).focus(); }, 350);
    }).on("click", ".chg-country", function (e) {
        var $wrapp = $(".dealer-chooser");
        e.preventDefault();
        $wrapp.addClass("show-chg-country");
    });

    $(document).on("keydown", ".dealer-chooser .dealer-postcode-input", function (e) {
        var pb = $(".dealer-chooser .dealer-postcode-submit");
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && e.keyCode != 8 && e.keyCode != 37 && e.keyCode != 39 && e.keyCode != 46) {
            e.preventDefault();
        }

        if (e.keyCode == 10 || e.keyCode == 13) {
            pb.trigger('click');
        }
    });

    $(document).on("click", ".dealer-chooser .dealer-postcode-submit", function (e) {
        var pc = $(".dealer-chooser .dealer-postcode-input");
        var pb = $(".dealer-chooser .dealer-postcode-submit");
        console.log("click");
        var postcode = pc.filter(function (val) { return $(this).val().length > 0; }).first().val();
        if (postcode == 'undefined' || postcode == '') {
            return false;
        }
        pb.attr("disabled", "disabled").css("opacity", "0.5");

        $.post("/data/check-dealer", { postcode: postcode }, function (data) {
            if (data.success) {
                window.location = data.url;
            } else {
                alert("Something went wrong when trying to find your dealer. Please try again.");
            }
        });
    });
}

function TrackFormSubmission(type) {
    //    ga('send', 'event', 'FormSubmission', type, null, window.location);
    ga('send',
    {
        hitType: 'event',
        eventCategory: 'FormSubmission',
        eventAction: type,
        eventLabel: window.location
    });
}

function initDownloadTracking() {
    $("a.track-download").bind('click', function () {
        var href = $(this).attr('href');
        ga('send', 'event', 'Download', 'DownloadTechnical', href, {
            'transport': 'beacon',
            'hitCallback': function () { document.location = url; }
        });
    });
}

function initImageTextPanels() {
    $('a.expandPanel').on('click', function (e) {

        var targetPanel = $($(this).attr('href'));

        var activeLink = $('a.expandPanel.active');
        var currentLink = $(this);
        var currentPanel = $('.sub-panel.active');

        if (targetPanel.hasClass('active')) {
            activeLink.removeClass('active');
            targetPanel.slideUp('fast', function () { targetPanel.removeClass('active'); });
        }
        else {
            if (currentPanel.length) {
                currentPanel.slideUp('fast', function () {
                    activeLink.removeClass('active');
                    currentPanel.removeClass('active');

                    targetPanel.slideDown('fast', function () {
                        currentLink.addClass('active');
                        targetPanel.addClass('active');
                    });
                });
            }
            else {
                currentLink.addClass('active');
                targetPanel.slideDown('fast', function () { targetPanel.addClass('active'); });
            }
        }

        e.preventDefault();
    });

    //activate the first one
    var panels = $('a.expandPanel');
    if (panels.length) {
        $(panels).eq(0).trigger('click');
    }
}

var countryStateSuburbs;
function initInternational() {

    $(".international-country-selector").on('change', function () {
        var option = $(this).find("option:checked");

        if (option.val().indexOf('/') == 0) {
            window.location = option.val();
        } else if (option.data('hasmultiple') == 'True') {

            var states = JSON.parse(option.data("states").replace(/'/g, '"'));
            countryStateSuburbs = states;

            var ddl = $("#country-state-selection-dropdown");
            ddl.empty();
            $("<option/>").text("Select your state").attr('selected', 'selected').appendTo(ddl);

            ddl.on('change', function () {
                var ddlsuburbContainer = $("#uniform-country-suburb-selection-dropdown");
                var ddlsuburb = $("#country-suburb-selection-dropdown");

                if (this.value != '' && this.value != null && this.value != 'Select your state') {
                    ddlsuburbContainer.show();

                    ddlsuburb.empty();
                    $("<option/>").text("Select your closest suburb").attr('selected', 'selected').appendTo(ddlsuburb);

                    var resultSuburbs = [];
                    for (var s in countryStateSuburbs) {
                        if (countryStateSuburbs[s].Name == this.selectedOptions[0].text) {
                            if (resultSuburbs.indexOf(countryStateSuburbs[s].Suburb) == -1) {
                                resultSuburbs.push(countryStateSuburbs[s].Suburb);
                                $("<option/>").text(countryStateSuburbs[s].Suburb).val(countryStateSuburbs[s].Url).appendTo(ddlsuburb);
                            }
                        }
                    }

                    ddlsuburb.show();
                    $.uniform.update()
                }
                else {
                    ddlsuburbContainer.hide();
                    ddlsuburb.hide();
                }
            });

            var result = [];
            for (var s in states) {
                if (result.indexOf(states[s].Name) == -1) {
                    result.push(states[s].Name);
                    $("<option/>").text(states[s].Name).val(states[s].Url).appendTo(ddl);
                }
            }

            //focus control
            $.uniform.update()

            $.fancybox({ href: "#country-state-selection-poup", closeBtn: false });
        };
    });
}

function switchToSelectedLocation(ddl, ddlSuburb) {

    var found = false;
    if ($(ddlSuburb).length) {
        var optionSuburb = $(ddlSuburb).find("option:checked");
        if (optionSuburb.val().length > 0) {
            window.location = optionSuburb.val() + "?set=true";
            found = true;
        }
    }

    if (!found) {
        var option = $(ddl).find("option:checked");
        if (option.val().length > 0) {
            window.location = option.val() + "?set=true";
        }
    }
}

function initHistorySliderFix() {
    //var slides = $("#section-history-pager > div.the-year");
    //var max = slides.length;

    //if (max == 2) {
    //    console.log("only two");
    //    slides.last().find(".dot").addClass("gray");
    //    return;
    //} else if (max == 3) {
    //    console.log("only three");
    //    slides.last().find(".dot").addClass("gray");
    //    return;
    //} else if (max == 4) {
    //    console.log("only four");
    //    slides.last().find(".dot").addClass("gray");
    //    return;
    //}

    //console.log("max: " + max);

    //var quarter = max / 4.0;
    //var half = quarter * 2;
    //var threequarters = quarter * 3;

}

function Recaptcha(button, form, recaptcha, i) {
    button.click(function (e) {
        e.preventDefault();
        if (form.valid()) {
            var widgetId = $("#recaptcha" + i).data('widgetid')
            var response = grecaptcha.getResponse(widgetId);
            recaptcha.val(response);
            grecaptcha.reset(widgetId);
            $.ajax({
                url: "/umbraco/Surface/BlockContactFormSurface/CheckCaptcha",
                data: "captcha=" + recaptcha.val(),
                method: 'post'
            })
            .done(function (result) {
                var container = form.find("[data-valmsg-summary=true]"),
                    list = container.find("ul");
                list.empty();
                if (result.success) {
                    container.addClass("validation-summary-valid").removeClass("validation-summary-errors");
                    form.submit();
                    return;
                }
                container.addClass("validation-summary-errors").removeClass("validation-summary-valid");
                $("<li />").html("The entered CAPTCHA is not valid").appendTo(list);
            });
        }
    });
}
