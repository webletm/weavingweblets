(function ($, root, undefined) {
	
	$(function () {
		'use strict';
		hero();
		btnScroll();
		navMenu();
	});

	function navMenu(){
		$('#mobile-menu').on('click', function(){
			$('#nav').slideToggle(300);
		});
	}

	function btnScroll(){
		$('a[href="#contact"]').on('click', function(a){
			a.preventDefault();
			$('html, body').animate({scrollTop: $('#contact').offset().top}, 300);
		})
		$('a[href="#hero-text"]').on('click', function(a){
			a.preventDefault();
			$('html, body').animate({scrollTop: $('#hero-text').offset().top}, 300);
		})
	}
	
	function hero(){
		var $img = $('.hero-img'),
			$imgHeight = $('.hero-img').height(),
			$small = $('#hero .text small'),
			$title = $('#hero .text h1'),
			$button = $('#hero .text a');
		$(window).load(function(){
			setTimeout(function(){
				$($img).animate({'top': '29px'}, 300, function(){
					$($small).animate({'left': '0px', 'opacity': '1'}, 500, function(){
						$($title).animate({'left': '0px', 'opacity': '1'}, 500, function(){
							$('#hero .text h2').each(function(index){
								$(this).delay(400*index).animate({'opacity': '1'}, 300);
							});
						});
					});
				});
			}, 250);
		});
	}
	
	
})(jQuery, this);
















