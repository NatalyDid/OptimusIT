$(document).ready(function () {
    var pagination_container = $('.pagination-main');
    if (pagination_container.length) {
        pagination_container.pagination({
            items: 100,
            itemsOnPage: 5,
            displayedPages: 3,
            edges: 1,
            cssStyle: 'light-theme'
        });
    }

    function tr(box, height) {
        var $box = $(box);

        if (typeof $box.data('text') == 'undefined') {
            $box.data('text', box.innerHTML);
        }
        var text = $box.data('text');
        var clone = document.createElement('div');

        clone.style.position = 'absolute';
        clone.style.visibility = 'hidden';
        clone.style.top = '100%';
        clone.style.width = box.clientWidth + 'px';
        clone.innerHTML = text;
        document.body.appendChild(clone);
        console.log(box.offsetWidth);
        var l = text.length - 1;

        for (; l >= 0 && clone.offsetHeight > height; l--) {
            clone.innerHTML = text.substring(0, l) + '...';
        }

        box.innerHTML = clone.innerHTML;

        if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }
        clone.remove();
    }

    function refreshTr() {
        var item_main = document.querySelectorAll('.slide-text-wrapper');
        for (var i = 0; i < item_main.length; i++) {
            tr(item_main[i], 80)
        }
    }

    refreshTr();
    var timeout;
    $(window).resize(function () {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(function () {
            refreshTr();
            clearTimeout(timeout);
        }, 100);
    });

    $('.portfolio-item-slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    // slidesToShow: 2,
                    // slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    // slidesToShow: 1,
                    // slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

});