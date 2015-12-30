(function ($, root, undefined) {
	
	$(function () {
		'use strict';
		hero();
	});
	
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
















