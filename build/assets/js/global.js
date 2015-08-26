var timer = (function(){
    'use strict';

    var $counter = document.getElementById("Counter");
    var targetDate = new Date("December 25, 2015 19:30:00");

    function calculateTime() {
        var remainingSeconds = ~ ~((targetDate - new Date()) / 1000);
        var remainingTime = {
            "days": remainingSeconds / (60 * 60 * 24),
            "hours": (remainingSeconds % (60 * 60 * 24)) / (60 * 60),
            "minutes": (remainingSeconds % (60 * 60)) / 60,
            "seconds": remainingSeconds % 60
        };

        var string = "";
        for (var i in remainingTime) {
            string += ~ ~remainingTime[i] + " " + i + ", ";
        }

        _render(string)
    }

    function _render(data) {
        return $counter.innerHTML = data.substring(0, data.length - 2);
    }

    return {
        calculateTime: calculateTime
    }


})();

// Update the timer every 1 second
setInterval(timer.calculateTime(), 1000);
