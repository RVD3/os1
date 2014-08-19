// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() {
// To Do   
    $('.modalLink').on('click', function(e) {
        e.preventDefault();
        
        $('#modal, #modalBg').fadeIn();
    });
    
    $('#modalBg, .modalClose').on('click', function(e) {
        e.preventDefault();
        
        $('#modal, #modalBg').fadeOut();
    });

// Schedule
    $('.scheduleLink').on('click', function(e) {
        e.preventDefault();
        
        $('#schedule, #modalBg').fadeIn();
    });
    
    $('#modalBg, .modalClose').on('click', function(e) {
        e.preventDefault();
        
        $('#modalBg, #schedule').fadeOut();
    });

// Video 
    $('.videoLink').on('click', function(e) {
        e.preventDefault();
        
        $('#video, #modalBg').slideDown();
    });
    
    $('#modalBg, .modalClose').on('click', function(e) {
        e.preventDefault();
        
        $('#video, #modalBg').fadeOut();
    }); 
// Photo 
    $('.photoLink').on('click', function(e) {
        e.preventDefault();
        
        $('#photo, #modalBg').slideDown();
    });
    
    $('#modalBg, .modalClose').on('click', function(e) {
        e.preventDefault();
        
        $('#photo, #modalBg').fadeOut();
    });     
// Gallery
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