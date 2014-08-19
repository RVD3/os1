// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() {
    
    $('.modalLink').on('click', function(e) {
        e.preventDefault();
        
        $('#modal, #modalBg').fadeIn();
    });
    
    $('#modalBg, .modalClose').on('click', function(e) {
        e.preventDefault();
        
        $('#modal, #modalBg').fadeOut();
    });
});