$(function () {

    $('.main-menu.header-menu>li').on('click', function () {
        $('.main-menu.header-menu').find('.items-child').hide();
        $(this).find('.items-child').slideToggle();
    });
    $('.main-menu .menu-items a').click(function (e) {
        e.preventDefault();
    });

    $('.page-down').on('click', function () {
        window.scrollBy(0, window.innerHeight)
    });

    $('body').click(function (ev) {
        var target = ev.target;
        console.log(target.parentNode);
        console.log(!$(target).hasClass('header-menu'));
        console.log(target.tagName !== 'BODY');
        while (!$(target).hasClass('header-menu') && target.tagName !== 'BODY') {
            target = target.parentNode;
        }
        console.log(target);
        if (target.tagName === 'BODY') {
            $('.main-menu.header-menu').find('.items-child').hide();
        }
    });

    function scrollBlocks() {
        if (window.innerWidth >= 1200) {
            var numbers = [];
            $('[data-scroll-number]').each(function (i, item) {
                numbers.push(Number($(item).attr('data-scroll-number')))
            });

            var minCount = numbers[0];
            var maxCount = numbers[numbers.length - 1];
            var counter = minCount;
            $(document).on('wheel', function (ev) {
                if ($(ev.target).hasClass('ps')) return;
                console.log('bilo =>' + counter);
                if (ev.originalEvent.deltaY > 0) {
                    ++counter;
                } else {
                    --counter;
                }
                if (counter < minCount) {
                    counter = minCount;
                } else if (counter > maxCount) {
                    counter = maxCount;
                }
                var $scrollTarget = $('[data-scroll-number="' + counter + '"]')
                $('html, body').animate({scrollTop: $scrollTarget.offset().top}, 500);
                console.log('stalo =>' + counter);
            })
        } else {
            $(document).off('wheel')
        }
    }

    scrollBlocks();

    $(window).on('resize', scrollBlocks)


});
// (function () {
//     var srcArr = [
//         'img/success/photo2.png',
//         'img/success/photo2.png',
//         'img/success/photo2.png',
//         'img/success/photo2.png',
//         'img/success/photo2.png',
//         'img/success/photo2.png',
//         'img/success/photo2.png',
//         'img/success/photo2.png'
//     ];
//     let allGalleryItems = [];
//     srcArr.forEach(item => {
//         var tmpItem = document.createElement('img');
//         tmpItem.setAttribute('src', item);
//         allGalleryItems.push(
//             tmpItem
//         );
//     });
//     $('.success-gallery').html('');
//     allGalleryItems.forEach(item => {
//         $('.success-gallery').append(item);
//     })
//
// })();