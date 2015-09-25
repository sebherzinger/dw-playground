$(function() {

	window.sr = new scrollReveal();

	$(window).scroll( function() {

		if ( $(this).scrollTop() > 1 ) {
			$('#header').addClass("sticky");
			//$('.main-nav-item:first-child').addClass('active');
		} else{
			$('#header').removeClass("sticky");
		}
		
	});

	$('section').each(function() {


	});

	$('#js-toTop').on('click', function(e) {
		$("html, body").animate({
			scrollTop: 0 }, "slow"
		);

		e.preventDefault();
	});

	$('.js-scrollTo').on('click', function(e) {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('name')).offset().top - 89
		}, "slow");

		e.preventDefault();
	});

});
