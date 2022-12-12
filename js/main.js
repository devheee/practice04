$('.mainfull').fullpage({
    anchors: ['sec01', 'sec02', 'sec03'],
    // // navigation: true,
    afterLoad: function (anchorLink, index) {
        console.log(anchorLink, index)
        $('.header nav>ul>li').eq(index - 1).addClass('on').siblings().removeClass('on');
        $('.section').eq(index - 1).addClass('on').siblings().removeClass('on');
    }
});

$('.mainSlide').slick({
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
});

var barwidth = $('.bar').width();
$('.subSlide').on('afterChange', function (e, s, c) {
    var bb = barwidth / s.slideCount;
    $('.bar span').css({ width: bb })
    $('.bar span').css({ width: bb * (c + 1) })

    $('.sub_num span').text("0" + (c + 1))
    $('.sub_num strong').text(s.slideCount)
});