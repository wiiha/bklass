window.onload = function() {

    function CountDownTimer(dt, id) {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {
                clearInterval(timer);
                document.getElementById(id).innerHTML = 'SLUT';
                return;
            }
            var days = Math.floor(distance / _day);
            if (days < 10) {
                days = '0' + days;
            }
            var hours = Math.floor((distance % _day) / _hour);
            if (hours < 10) {
                hours = '0' + hours;
            }
            var minutes = Math.floor((distance % _hour) / _minute);
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var seconds = Math.floor((distance % _minute) / _second);
            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            document.getElementById(id).innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
        }
        showRemaining();
        timer = setInterval(showRemaining, 1000);
    }
    CountDownTimer('04/22/2016 18:00', 'countdown');

    //https://mashe.hawksey.info/2014/07/google-sheets-as-a-database-insert-with-apps-script-using-postget-methods-with-ajax-example/
    //http://stackoverflow.com/questions/5004233/jquery-ajax-post-example-with-php/5004276#5004276
    var request;
    $("#form").submit(function(event){

        if (request) {
            request.abort();
        }

        var $form = $(this);

        var $inputs = $form.find("input, select, button, textarea");

        var serializedData = $form.serialize();

        $inputs.prop("disabled", true);

        request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwAiVKRx6Fg8DNJI6wYgCdeRcG2CgXvguv26fYJw1Jqo91P1BA/exec",
            type: "post",
            data: serializedData
        });

        request.done(function (response, textStatus, jqXHR){
            // working
        });

        request.fail(function (jqXHR, textStatus, errorThrown){
            // not working
        });

        request.always(function () {
            $inputs.prop("disabled", false);
            $(".container-4 .container-content p").hide();
            $form.hide();
            var mail = $form[0].elements.Mail.value;
            if (mail) {
                $("#form-success #mail").text('till ' + mail + ' ');
            }
            $("#form-success").show();
        });

        event.preventDefault();
    });
}
