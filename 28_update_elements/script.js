console.log("JS Loaded")

var countdownElement = document.getElementById("countdown")

var initialCountdownVal = countdownElement.innerHTML

setInterval(function() {
    if(initialCountdownVal > 0) {
        initialCountdownVal -= 1
    }
    else {
        initialCountdownVal = 0
    }
    countdownElement.innerHTML = initialCountdownVal
}, 1000)


