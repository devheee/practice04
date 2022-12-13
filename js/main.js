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
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
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
