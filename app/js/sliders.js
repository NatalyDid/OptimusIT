$(function () {
    var slick_header_wrapper = $('.slider-header-wrapper');
    if (slick_header_wrapper.length) {
        slick_header_wrapper.slick({
            dots: true
        });
    }

    var slider_feedback_wrapper = $('.slider-feedback-wrapper');
    if (slider_feedback_wrapper.length) {
        slider_feedback_wrapper.slick({
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }

    var slider_projects_wrapper = $('.slider-projects-wrapper');
    if (slider_projects_wrapper.length) {
        var destroy = false;
        slider_projects_wrapper.slick({
            dots: true,
            arrows: false
        });

        function slideDetect() {
            if (window.innerWidth >= 768 && !destroy) {
                slider_projects_wrapper.slick('unslick');
                destroy = true;
                console.log('destroying', destroy);
            } else if (window.innerWidth < 768 && destroy) {
                slider_projects_wrapper.slick({
                    dots: true,
                    arrows: false
                });
                destroy = false;
            }
        }

        slideDetect();

        $(window).on('resize', slideDetect);
    }

    var slider_success_wrapper = $('.slider-success-wrapper');
    if (slider_success_wrapper.length) {
        var destroy_success = false;
        slider_success_wrapper.slick({
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
        });
        $(".slick-slide").removeClass("hidden");

        function slideSuccessDetect() {
            if (window.innerWidth >= 768 && !destroy_success) {
                slider_success_wrapper.slick('unslick');
                destroy_success = true;
                console.log('destroying_success', destroy_success);
            } else if (window.innerWidth < 768 && destroy_success) {
                slider_success_wrapper.slick({
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
                    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
                });
                destroy_success = false;
                console.log('building_success', destroy_success);
            }
        }

        slideSuccessDetect();

        $(window).on('resize', slideSuccessDetect);
    }

    $.each($('.slider-projects-item'), function () {
        if (!$(this).hasClass('slick-slide')) {
            $(this).removeClass("hidden");
        }
    })
});