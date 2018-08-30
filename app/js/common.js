$(function () {

    $('.main-menu.header-menu>li').on('click', function () {
        $('.main-menu.header-menu').find('.items-child').hide();
        $(this).find('.items-child').slideToggle();
    });
    $('.main-menu .menu-items a').click(function (e) {
        e.preventDefault();
    });

    $('.page-down').on('click', function () {
        console.log('ggg');
        //$('html, body').animate({
            window.scrollBy(0, window.innerHeight)
        //}, 500)
    });



});
