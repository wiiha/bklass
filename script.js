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
}
