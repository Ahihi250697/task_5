$('.mv-slick').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false
        }
    }]

});
$('.special-bg').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
});


$('.people-slick').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button class="slick-arrow slickPrev"></button>',
    nextArrow: '<button class="slick-arrow slickNext"></button>',
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    asNavFor: '.people-underview',
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false
        }
    }]
});
$('.people-underview').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    infinite: true,
    centerMode: true,
    asNavFor: '.people-slick',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
        }
    }]

});
var _totopIsOpen = 0;
var _maxBottom = 500;
window.onscroll = function() {
    var _curPos = window.pageYOffset;
    var _docHeight = $(document).height();
    var _w = $(window).height();

    if (_curPos > 300) {
        if (_totopIsOpen == 0) {
            _totopIsOpen = -1;
            $('.to-top-button').addClass('active');
        } else {
            var _screen = (_curPos + _w);
            var _a = (_screen / _docHeight);
            var _b = _maxBottom - (_maxBottom - _maxBottom * _a);
            $('.to-top-button').css({
                bottom: _b
            });
        }
    } else {
        if (_totopIsOpen == -1) {
            $('.to-top-button').removeClass('active');
            _totopIsOpen = 0;
        }

    }
}
$('.to-top-button').click(function(event) {
    /* Act on the event */
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000, 'swing');
    return false;
});
var _hamIsOpen = -1;
$('.hambuger-button').click(function() {
    var _subMenu = $('.header-wrap');
    var _subMenu1 = $('.header-menu');
    var _w = $(window).width();
    var _cssIn = 'slideInLeft';
    var _cssOut = 'slideOutLeft';
    if (_hamIsOpen == 1 && $(this).hasClass('active')) {
        $(this).removeClass('active');
        _subMenu.removeClass('active');
        $('.header').removeClass('active');
        _subMenu1.addClass(_cssOut).delay(1000).queue(function(next) {
            $(this).removeClass('active').removeClass(_cssOut);
            _hamIsOpen = -1;
            next();
        });
    } else if (_hamIsOpen == -1) {
        $('.header').addClass('active');
        if (_w > 768) {
            _subMenu1.addClass('active').addClass(_cssIn).delay(1000).queue(function(next) {
                $(this).removeClass(_cssIn);
                _hamIsOpen = 1;
                next();
            });
        } else {
            _subMenu1.addClass('active');
            _subMenu.addClass('active').addClass(_cssIn).delay(1000).queue(function(next) {

                $(this).removeClass(_cssIn);
                _hamIsOpen = 1;
                next();
            });
        }

        _hamIsOpen = 1;
        $(this).addClass('active');

    }
});

// delay(_delayTime).queue(function(next) {
//                         $(this).removeClass(_cssInLeft);
//                         next();
//                     });
function __delayFunction(func, timed) {
    let __timeout;
    return function() {
        let __func = func;
        clearTimeout(__timeout);
        __timeout = setTimeout(__func, timed);
    };
}
var _delayOpenLink = -1;

$('.header-menu__list').hover(
    function() {
        var _w = $(window).width();
        if (_w > 1200) {
            var _l = $(this).find('.a-text-none').attr('href');
            console.log(_l);
            if (_delayOpenLink == -1) {
                $(_l).addClass('active').animate({
                    height: 'toggle'
                }, 300, function() {
                    console.log('add active');
                });
                _delayOpenLink = 0;
            }
        }
    },
    function() {
        var _w = $(window).width();
        if (_w > 1200) {
            var _l = $(this).find('.a-text-none').attr('href');
            if (_delayOpenLink == 0) {
                if ($(_l).hasClass('active')) {
                    $(_l).animate({
                        height: 'toggle'
                    }, 300, function() {
                        console.log('rev active');
                    });
                    _delayOpenLink = -1;
                }
            }
        }
    }
);
$('.header-menu__list').click(function() {
    var _w = $(window).width();
    if (_w <= 768) {
        var _menuItem = $('.header-menu-item');
        var _l = $(this).find('.a-text-none').attr('href');
        if ($(_l).hasClass('active')) {
            $(_l).removeClass('active').animate({
                height: 'toggle'
            }, 300, function() {});
        } else {
            // var _l = $(this).find('.a-text-none').attr('href');
            // $(this).addClass('active');
            $('.header-menu-item').each(function(index, val) {
                /* iterate through array or object */
                $(this).hasClass('active') ?
                    $(this).animate({
                        height: 'toggle'
                    }, 300).removeClass('active') :
                    false
            });

            $(_l).addClass('active').animate({
                height: 'toggle'
            }, 300, function() {});
        }
    }
});
$(window).on('load resize', function() {
    var _w = $(window).width();
    if (_w <= 768) {
        $('.people-underview').slick('unslick');
    }
});