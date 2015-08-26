function updateTimer(){
    var counter = document.getElementById("Counter");
    var targetDate = new Date("December 25, 2015 19:30:00");

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

    counter.innerHTML = string.substring(0, string.length - 2);
}

// Update the timer every 1 second
setInterval(updateTimer, 1000);
