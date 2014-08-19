$(function()	{
	$('#thumbs a').on('click', function() {
		$('#thumbs img').css('border', 'none');
		$(this).find('img').css('border', 'solid 2px black');

		var newSrc = $(this).find('img').attr('src');

		$('#fullsize img').fadeOut(function(){
				$('#fullsize img').attr('src', newSrc).fadeIn();
		});

		var newCaption = $(this).find('img').data('caption');

		$('#fullsize p').text(newCaption);
	});
});