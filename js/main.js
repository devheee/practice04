$('.mainfull').fullpage({
    anchors: ['sec01', 'sec02', 'sec03'],
    // // navigation: true,
    afterLoad: function (anchorLink, index) {
        console.log(anchorLink, index)
        $('.header nav>a').eq(index - 1).addClass('current').siblings().removeClass('current');
        $('.section').eq(index - 1).addClass('on').siblings().removeClass('on');
    }
});

$('.mainSlide').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
});

var barwidth = $('.bar').width();
$('.mainSlide').on('afterChange', function (e, s, c) {
    var bb = barwidth / s.slideCount;
    $('.bar span').css({ width: bb })
    $('.bar span').css({ width: bb * (c + 1) })

    $('.num span').text("0" + (c + 1))
    $('.num strong').text(s.slideCount)
});


$('.play').click(function () {
    $('.mainSlide').slick('slickPlay');
});

$('.stop').click(function () {
    $('.mainSlide').slick('slickPause');
});

$('.businessSlide').slick({
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
});

$('.right_slide').slick({
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
});
