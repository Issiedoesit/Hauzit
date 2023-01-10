$('.drop-btn').on('change', function() {
    $('.drop-btn').not(this).prop('checked', false);  
    $('.drop-btn').not(this).parents('.drop-container').addClass('border border-brandBlack5')
    $(this).parents('.drop-container').removeClass('border border-brandBlack5').addClass('border border-brandBlack3')
    $('.drop-btn').not(this).parents('.drop-container').children('.drop-content').addClass('hidden')
    $(this).parents('.drop-container').children('.drop-content').toggleClass('hidden')
});

$(document).on('click',function(e){
    if(!(($(e.target).closest('.drop-btn').length > 0 ) || ($(e.target).closest('.drop-content').length > 0))){
        $('.drop-content').addClass('hidden');
   }
    if(!(($(e.target).closest('#filters_btn').length > 0 ) || ($(e.target).closest('#filters_wrap').length > 0))){
        $('#filters_wrap').addClass('hidden').removeClass('flex');
   }
});


$('#filters_btn').on('click', function(){
    $('#filters_wrap').toggleClass('hidden flex')
    $('#filters_arrow').toggleClass('rotate-90')
})


