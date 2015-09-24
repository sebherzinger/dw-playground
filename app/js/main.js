$(document).ready( function() {
	
	$(window).scroll( function() {	
		
		if ( $(this).scrollTop() > 1 ) {  
			$('#header').addClass("sticky");
			//$('.main-nav-item:first-child').addClass('active');
		} else{
			$('#header').removeClass("sticky");
			//$('.main-nav-item:first-child').removeClass('active');
		}
		
	});
	
	$('section').viewportChecker({
		classToAdd: 'visible',
		offset: 0,
		callbackFunction: function(e, action) {
			//$('.main-nav-item').removeClass('active');
			//$('*[data-name="'+ e.attr('id') +'"]').parent().addClass('active');
		}
	});
	
	 window.sr = new scrollReveal();
	
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
