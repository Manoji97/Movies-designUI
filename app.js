jQuery(document).ready(function($) {
	$('.user-icon').click(function() {
		$('.box1').slideToggle(500);
	});
	$('.search-icon').click(function() {
		$('.box2').animate({width: 'toggle'}, 700);
	});
});