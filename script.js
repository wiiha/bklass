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
            url: 'https://script.google.com/macros/s/AKfycbxYbpICS7JB0zgeWwZdvoAPCiylxUeeFtkDlN7Zekgh6W-yp3DH/exec',
            type: 'post',
            data: serializedData
        })

        request.always(function (response) {
            var message = '';
            var mail = $form[0].elements.Epost.value;
            $form.hide();

            if (response.result === 'success') {
                if (response.allSeatsTaken) {
                    message = 'Tyvärr är alla platser redan tagna. Du har fått en plats i reservlistan, så om en plats blir ledig hör vi av oss.';
                } else {
                    message = 'Ett mail har skickats till ' + mail + ' där det står hur du ska betala. Observera att det kan ta ett tag för mailet att anlända då flertalet personer anmäler sig samtidigt.';
                }
            } else {
                message = 'Om det finns platser kvar bör ett mail skickats till ' + mail + ' där det står hur du ska betala.';
            }

            $('#form-success').text(message);
            $('#form-success').show();
        })
    })
}
