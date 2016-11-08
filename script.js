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

        request.done(function (response, textStatus, jqXHR) {
            var mail = $form[0].elements.Epost.value;
            $('#form-success #mail').text(mail);
            $('#form-success').show();
        })

        request.fail(function (jqXHR, textStatus, errorThrown) {
            $('#form-failure').show();
        })

        request.always(function () {
            $form.hide();
        })
    })
}
