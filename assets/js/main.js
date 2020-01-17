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