window.onload = function() {
    var request

    $('#registration-form').submit(function (event) {
        event.preventDefault()

        if (request) {
            request.abort()
        }

        var $form = $(this)
        var $inputs = $form.find('input, select, button, textarea')
        var serializedData = $form.serialize()

        $inputs.prop('disabled', true)

        request = $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbwm70Tm07G5xew6YaVUI6KVo0BbYdMcQR6Sn-0gQ2J8xgzjIQ/exec',
            type: 'post',
            data: serializedData
        })

        request.always(function (response) {
            $form.hide();

            if (response.result === 'success') {
                var message = '';
                var mail = $form[0].elements.Epost.value;
                if (response.allSeatsTaken) {
                    message = 'Tyvärr är alla platser redan tagna. Du har fått en plats i reservlistan, så om en plats blir ledig hör vi av oss.';
                } else {
                    message = 'Snyggt! Ett mail har skickats till ' + mail + ' där det står hur du ska betala.';
                }

                $('#form-success').text(message);
                $('#form-success').show();
            } else {
                $('#form-failure').show();
            }
        })
    })
}
