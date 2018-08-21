$(function () {

    $('.main-menu .menu-items').on('click', function () {
        $(this).find('.items-child').slideToggle();
        console.log('aaa');
    });
    $('.main-menu .menu-items a').click(function (e) {
        e.preventDefault();
    });

    $('.slider-header-wrapper').slick({
        dots: true
    });

    $('.slider-success-wrapper').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    });

    $('.slider-feedback-wrapper').slick({
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

    var destroy = false;
    $('.slider-projects-wrapper').slick({
        dots: true,
        arrows: false
    });

    function slideDetect() {
        if (window.innerWidth >= 768 && !destroy) {
            $('.slider-projects-wrapper').slick('unslick');
            destroy = true;
            console.log('destroying', destroy);
        } else if (window.innerWidth < 768 && destroy) {
            $('.slider-projects-wrapper').slick({
                dots: true,
                arrows: false
            });
            destroy = false;
            console.log('building', destroy);
        }
    }

    slideDetect();

    $(window).on('resize', slideDetect);
});
