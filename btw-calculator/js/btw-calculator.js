$(function(){
    $('#bc-incl_excl').tooltip({placement: "bottom"})
    
    $('#bc-incl_excl').change(function() {
        var selection = $(this).val()
        switch(selection) {
            case 'incl':
                $('#bc-amount_result').next().text("exclusief") 
                break;
            case 'excl':
                $('#bc-amount_result').next().text("inclusief") 
                break;
        }
    })
    
    $('#bc-calculate_button').click(function(e) {
        e.preventDefault()

        var amount = $('#bc-amount').val()
        amount = amount.replace(",", ".")
        if(!$.isNumeric(amount)) {
            var control_group = $('#bc-amount').parent().parent().parent()
            control_group.addClass("error")
            control_group.find('.help-inline').text("Vul aub een correct bedrag in.")
            return;
        }

        var control_group = $('#bc-amount').parent().parent().parent()
        control_group.removeClass("error")
        control_group.find('.help-inline').text("")

        var vatRate = +($('#bc-vat_rate').val())

        if($('#bc-incl_excl').val() == 'incl') {
            $('#bc-amount_result').text((amount / (1 + vatRate)).toFixed(2))
            $('#bc-vat_result').text((vatRate * amount / (1 + vatRate)).toFixed(2))
        } else if($('#bc-incl_excl').val() == 'excl') {
            $('#bc-amount_result').text((amount * (1 + vatRate)).toFixed(2))
            $('#bc-vat_result').text((vatRate * amount).toFixed(2))
        }
    })
})