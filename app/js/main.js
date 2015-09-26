$(document).ready(function() {

	window.sr = new scrollReveal();

	$(window).scroll( function() {
		
		var scrollTop = $(window).scrollTop();
		
		$('section').each(function() {
			var thisPosition = $(this).offset().top;
			
			if((thisPosition - $('#header').height()) < scrollTop) {
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
	
	var cards = document.querySelectorAll(".card.effect__click");
  	for ( var i  = 0, len = cards.length; i < len; i++ ) {
    	var card = cards[i];
    	clickListener( card );
  	}

  	function clickListener(card) {
    	card.addEventListener( "click", function() {
      		var c = this.classList;
      		c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    	});
  	}


	$('#js-toTop').on('click', function(e) {
		$("html, body").animate({
			scrollTop: 0 }, "slow"
		);

		e.preventDefault();
	});

	$('.js-scrollTo').on('click', function(e) {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('name')).offset().top - 88
		}, "slow");

		e.preventDefault();
	});
	
	
	$('.js-openLightbox').on('click', function(e) {
		$('.overlay').fadeIn('slow');
		
		setLightboxImage($(this).attr('data-id'));
		
		$('html, body').animate({
			scrollTop: $('#gallery').offset().top - 88
		}, "slow");
		
		e.preventDefault();
	});
	
	var cntImages = $('.gallery-image').length;
	
	$('.js-nextImage').on('click', function(e) {
		var nextImageId = parseInt($('.big-img').attr('data-id')) + 1;
		var activeImageId = parseInt($('.big-img').attr('data-id'));
		
		if(nextImageId > cntImages) {
			setLightboxImage(1);
		} else {
			setLightboxImage(nextImageId);	
		}
		
		e.preventDefault();
	});
	
	$('.js-prevImage').on('click', function(e) {
		var prevImageId = parseInt($('.big-img').attr('data-id')) - 1;
		var activeImageId = parseInt($('.big-img').attr('data-id'));
		
		if(activeImageId === 1) {
			setLightboxImage(cntImages);
		} else {
			setLightboxImage(prevImageId);	
		}
		
		e.preventDefault();
	});
	
	$('.js-closeImage').on('click', function(e) {
		$('.overlay').fadeOut('slow');
		e.preventDefault();
	});
	
	
	function setLightboxImage(id) {
		var $myImage = $('*[data-id="' + id + '"');
		$('.big-img').attr('data-id', $myImage.attr('data-id'));
		$('.img-description').html($myImage.attr('data-description'));
		$('.big-img').fadeOut('slow');
		$('.big-img').attr('src', './assets/img/' + $myImage.attr('data-open'));
		$('.big-img').fadeIn('slow');	
	}

});
