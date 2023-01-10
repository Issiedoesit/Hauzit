$('#hamburger').on('click', function(){
    $('#navItems').toggleClass('-translate-x-hundredPercent')
    $('#upper_ham').toggleClass('translate-x-2')
})


$(document).on('click', function(e){
    if(!(($(e.target).closest('#hamburger').length > 0 ) || ($(e.target).closest('#navItems').length > 0))){
        $('#navItems').addClass('-translate-x-hundredPercent');
        $('#upper_ham').removeClass('translate-x-2')
   }
})