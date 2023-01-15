$('#update_rates').on('click', function(e){
    e.preventDefault()
    let property_price = $('#property_price').val()
    let down_payment = $('#down_payment').val()
    let ratio = (down_payment/property_price)
    let percentage = (ratio * 100).toFixed(2)
    if(!(down_payment === '') && (!(property_price === '') )){
        $('#down_pay_percent').html(percentage + '%')
    }
})