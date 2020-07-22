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
window.onscroll = function () {
    var _curPos = window.pageYOffset;
    if(_curPos > 300){
    	if(_totopIsOpen == 0){
    		_totopIsOpen = -1;
        	$('.to-top-button').addClass('active');
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
});