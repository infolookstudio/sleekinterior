(function ($) {
    'use strict';

    $(window).on("load", function() {

		background();
		
	    //preloader
	    $("#preloader").delay(300).animate({
	      	"opacity" : "0"
	      	}, 500, function() {
	    	$("#preloader").css("display","none");
	    });

	});

    // background image
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	// hero Slider
	var slider = $(".hero-area");
	slider.owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
		nav: false,
		animateIn: 'fadeIn',
		autoplay: true,
		autoPlay: 4000,
		animateOut: 'fadeOut',
		dots: false
	});
	slider.on('translate.owl.carousel', function () {
		var layer = $("[data-animation]");
		layer.each(function () {
			var s_animation = $(this).data('animation');
			$(this).removeClass('animated ' + s_animation).css('opacity', '0');
		});
	});
	$("[data-delay]").each(function () {
		var animation_del = $(this).data('delay');
		$(this).css('animation-delay', animation_del);
	});
	$("[data-duration]").each(function () {
		var animation_dur = $(this).data('duration');
		$(this).css('animation-duration', animation_dur);
	});
	slider.on('translated.owl.carousel', function () {
		var layer = slider.find('.owl-item.active').find("[data-animation]");
		layer.each(function () {
			var s_animation = $(this).data('animation');
			$(this).addClass('animated ' + s_animation).css("opacity", "1");
		});
	});

	// Activate owlCarousel
	$('.feature-carousel').owlCarousel({
		items: 4,
	    loop: true,
	    margin: 10,
	    smartSpeed: 800,
	    nav: true,
	    dots: true,
	    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	});

	// Activate lightcase
    $('a[data-rel^=lightcase]').lightcase();



})(jQuery);