var pauseButton = document.querySelector("#pomodoro-pause");
var startButton = document.querySelector("#pomodoro-start");
var resetButton = document.querySelector("#pomodoro-reset");
var startingMinutes = 25;
var time = startingMinutes * 60;
var timer = document.getElementById("pomodoro-clock");



startButton.addEventListener("click", function() {
    function updateTimer() {
    
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
    
        seconds = seconds < 10 ? "0" + seconds : seconds;
    
       
    
        timer.innerHTML = minutes + ":" + seconds;
        document.title = minutes + ":" + seconds;
        time--;
    
        if(time <= 0) {
            clearInterval(time = 0);
        }
    
    
    pauseButton.onclick = function () {
        clearInterval(myTimer);
    };
    
    resetButton.onclick = function () {
        clearInterval(myTimer);
        timer.innerHTML = "25:00";
    
    };
    
    };
    
    var myTimer = setInterval(updateTimer, 1000);


});













