$(function () {
    const ps = new PerfectScrollbar('#optimal-working-diagram');
    ps.update();
    //     , {
    //     wheelSpeed: 2,
    //     wheelPropagation: true,
    //     minScrollbarLength: 20
    // });
    function psManualUpdate() {
        var tout = setTimeout(function () {
            ps.update();
            clearTimeout(tout);
        }, 500)
    }
    $(window).on('resize', psManualUpdate);
    var scaled = false;
    $('.image-increase').click(function () {
        var $diagram = $('.optimal-working-diagram-image');
        var k = 2;
        if (!scaled) {
            $diagram.width($diagram.width() * k);
            $diagram.height($diagram.height() * k);
            scaled = true;
            // psManualUpdate();
        } else {
            $diagram.width($diagram.width() / k);
            $diagram.height($diagram.height() / k);
            scaled = false;
            // psManualUpdate();
        }
    });

});