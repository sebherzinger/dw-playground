$(function() {

	window.sr = new scrollReveal();

	$(window).scroll( function() {
		
		var scrollTop = $(window).scrollTop();
		
		$('section').each(function() {
			var thisPosition = $(this).offset().top;
			
			if((thisPosition - $('#header').height()) < scrollTop) {
				$(console.log($(this).attr('id')));
				$('.main-nav-item').removeClass('active');
				$('*[data-name="'+ $(this).attr('id') +'"]').parent().addClass('active');
			}
			
		});

		if ( $(this).scrollTop() > 1 ) {
			$('#header').addClass("sticky");
		} else{
			$('#header').removeClass("sticky");
		}
		
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
