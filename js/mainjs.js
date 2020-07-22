$('.mv-slick').slick({
	dots: true,
	arrows: false,
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplaySpeed: 2000,
	responsive: [
    {
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
$('.people-underview').slick({
	dots: false,
	arrows: false,
	autoplay: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplaySpeed: 2000,
});
$('.people-slick').slick({
	dots: false,
	arrows: true,
	prevArrow:'<button class="slick-arrow slickPrev"></button>',
	nextArrow:'<button class="slick-arrow slickNext"></button>',
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplaySpeed: 2000,
	responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
});
var _totopIsOpen = 0;
var _maxBottom = 500;
window.onscroll = function () {
    var _curPos = window.pageYOffset;
    var _docHeight = $(document).height();
    var _w = $(window).height();

    if(_curPos > 300){
    	if(_totopIsOpen == 0){
    		_totopIsOpen = -1;
        	$('.to-top-button').addClass('active');
    	}
    	else{
    		var _screen = (_curPos + _w);
    		var _a = (_screen/_docHeight);
    		var _b = _maxBottom - (_maxBottom - _maxBottom*_a);
    		$('.to-top-button').css({
    			bottom: _b
    		});
    	}
    }
    else {
    	if(_totopIsOpen == -1){
    		$('.to-top-button').removeClass('active');
	        _totopIsOpen = 0;
    	}
        
    }
}
$('.to-top-button').click(function (event) {
    /* Act on the event */
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000, 'swing');
    return false;
});
var _hamIsOpen = -1;
$('.hambuger-button').click(function(){
	var _subMenu1 = $('.header-menu');
	var _w = $(window).width();
	var _marginTop = 6;
	var _cssIn = 'slideInLeft';
	var _cssOut = 'slideOutLeft';
	if(_hamIsOpen == 1 && $(this).hasClass('active')){
		$(this).removeClass('active');
		_subMenu1.addClass(_cssOut).delay(1000).queue(function(next) {
	            $(this).removeClass('active').removeClass(_cssOut);
	            _hamIsOpen = -1;
	            next();
	    });
	}
	else if(_hamIsOpen == -1){
		console.log('123');
		if(_w > 768){
			_marginTop = 10;
		}
		_hamIsOpen = 1;
		$(this).addClass('active');
		_subMenu1.css({
			'padding-top': _marginTop+'rem'
		}).addClass('active').addClass(_cssIn).delay(1000).queue(function(next) {
	            $(this).removeClass(_cssIn);
	            _hamIsOpen = 1;
	            next();
	    });
	}
});

// delay(_delayTime).queue(function(next) {
//                         $(this).removeClass(_cssInLeft);
//                         next();
//                     });
function __delayFunction(func, timed){
	let __timeout;
	return function(){
		let __func = func;
		clearTimeout(__timeout);
		__timeout = setTimeout(__func, timed);
	};
}

$('.header-menu__link').hover(
	function() {
    	var _l = $(this).find('a').attr('href');
    	$(_l).addClass('active');
    },
    function() {
    	var _this = $(this).find('a').attr('href');
    	if($(_this).is(':hover') == true){
    	}
    	else{
    		$(_this).removeClass('active'); 
    	}
    }
);
$('.header-menu-item').hover(
	function() {
    },
    function() {
    	$(this).removeClass('active');
    }
);