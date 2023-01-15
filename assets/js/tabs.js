$('.tab-toggler').each(function(){
    $(this).on('click', function(){
        $('.tab-toggler').removeClass('font-biotifSemiBold text-brandBlue border-b-2 border-b-brandBlue')
        $(this).addClass('font-biotifSemiBold text-brandBlue border-b-2 border-b-brandBlue')
        let currentSection = $(this).attr('data-widget-section')
        $('.widget-section').css('display', 'none')
        $('#'+currentSection).css('display', 'block')
    })
})