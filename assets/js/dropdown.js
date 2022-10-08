// $('.drop-btn').each(function(){
//     $(this).on('click', function(e){
//         e.preventDefault()
//         $('.drop-btn').not(this).siblings('.drop-content').addClass('hidden')
//         $(this).siblings('.drop-content').removeClass('hidden')
//         if(!($(this).siblings('.drop-content').hasClass('hidden'))){
//             $(this).siblings('.drop-content').addClass('hidden')
//         }
//     })
// })
$('.drop-btn').on('change', function() {
    $('.drop-btn').not(this).prop('checked', false);  
    $('.drop-btn').not(this).parents('.drop-container').addClass('border border-brandBlack5')
    $(this).parents('.drop-container').removeClass('border border-brandBlack5').addClass('border border-brandBlack3')
    $('.drop-btn').not(this).parents('.drop-container').children('.drop-content').addClass('hidden')
    $(this).parents('.drop-container').children('.drop-content').toggleClass('hidden')


});


