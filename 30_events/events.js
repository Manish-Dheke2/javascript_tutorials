var btn = document.getElementById("btn-click")
var body = document.querySelector("body")
function onBtnClick() {
    
    body.style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 255)) +"," + (Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + ")"
}

/// btn.onclick = onBtnClick

btn.addEventListener('click', onBtnClick)
