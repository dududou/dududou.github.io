(function ($) {

$(document).ready(function() {

	// Fullscreen scaling background
	$.vegas({
		src: 'assets1/images/home/ss2012_splash_bg.jpg',
		valign: 'center',
		align: 'center',
		complete: function() {
			$('img#eric').show('slide', { direction: 'up' }, 5000);
			$('img#javits').show('slide', { direction: 'down' }, 5000, function() {
				$('#logo p').fadeIn(2000, function() {
					setTimeout(function() {
						window.location = $('a#enter').attr('href');
					}, 3000);
				});
			});
		}
	});

	// Clicking anywhere skips splash page
	$('body#splash').click(function() {
		window.location = $('a#enter').attr('href');
	});

	// Set session cookie for SS2012 preview note
	$.cookie('ss2012_visit', null, { path: '/' });

});

})(jQuery);
