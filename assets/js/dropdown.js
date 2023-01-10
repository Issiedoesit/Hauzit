$('.drop-btn').on('change', function() {
    $('.drop-btn').not(this).prop('checked', false);  
    $('.drop-btn').not(this).parents('.drop-container').addClass('border border-brandBlack5')
    $(this).parents('.drop-container').removeClass('border border-brandBlack5').addClass('border border-brandBlack3')
    $('.drop-btn').not(this).parents('.drop-container').children('.drop-content').addClass('hidden')
    $(this).parents('.drop-container').children('.drop-content').toggleClass('hidden')
});

$(document).on('click', function(e){
    if(!(($(e.target).closest('.drop-btn').length > 0 ) || ($(e.target).closest('.drop-content').length > 0))){
        $('.drop-content').addClass('hidden');
   }
    if(!(($(e.target).closest('#filters_btn').length > 0 ) || ($(e.target).closest('#filters_wrap').length > 0))){
        $('#filters_wrap').addClass('max-h-0 overflow-y-hidden py-0').removeClass('py-5')
        $('#filters_arrow').toggleClass('rotate-180')   }
});

$('#filters_btn').on('click', function(){
    $('#filters_wrap').toggleClass('max-h-0 overflow-y-hidden py-5 py-0')
    $('#filters_arrow').toggleClass('rotate-180')
})

// $(document).on('resize', function(){
//     if(($('#filters_btn').css('display') === 'none')){
//         $('#filters_wrap').css('display', 'flex')
//     }
// })

// if(($('#filters_btn').css('display') === 'flex')){
//     $(document).on('click', function(e){
//         if(!(($(e.target).closest('#filters_btn').length > 0 ) || ($(e.target).closest('#filters_wrap').length > 0))){
//             $('#filters_wrap').removeClass('max-h-0 overflow-y-hidden py-5 py-0')
//         }
//     })
// }
// if(!(($(e.target).closest('#filters_btn').length > 0 ) || ($(e.target).closest('#filters_wrap').length > 0))){
//     $('#filters_wrap').addClass('max-h-0 overflow-y-hidden py-0')
//     $('#filters_arrow').toggleClass('rotate-180')
// }

// $(document).on('click', function(e){
//     if(!(($(e.target).closest('#filters_btn').length > 0 ) || ($(e.target).closest('#filters_wrap').length > 0))){
//         // $('#filters_wrap').slideUp(300)
//         //     alert('yes')
//         if(($('#filters_btn').css('display') === 'flex')){
//             $('#filters_wrap').slideUp(300)
//         }
//    }
// });




