var mainHeading = document.getElementById("main-heading")

var btn = document.getElementById("btn-click")

// mainHeading.classList.add("big")

// btn.addEventListener("click", function() {
//     mainHeading.classList.remove("big")
// })


var sidebar = document.getElementById("sidebar")

var toggleButton = document.getElementById("toggle-icon")

toggleButton.addEventListener("click", function() {
    if (sidebar.classList.contains('show')){
        sidebar.classList.add('hide')
        sidebar.classList.remove('show') 
    } else {
        sidebar.classList.add('show')
        sidebar.classList.remove('hide') 
    }
})

