var username = document.getElementById('username')
var loginForm = document.getElementById('login-form')

username.addEventListener('input', function() {
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    console.log(currentValue)
    username.value = currentValue
})

username.addEventListener('focus', function() {
    console.log('Element focused');
})

username.addEventListener('blur', function() {
    console.log('Element lost focus');
})

loginForm.addEventListener('submit', function(e) {
    alert('Button was clicked');
    e.preventDefault();
})























// var username = document.getElementById('username');
// var loginForm = document.getElementById('login-form')

// username.addEventListener('input', function(even) {
//     var currentValue = event.target.value;
//     currentValue = currentValue.toUpperCase();
//     console.log(currentValue);
//     username.value = currentValue;
// });

// username.addEventListener('focus', function() {
//     console.log('Element Focused');
// })

// username.addEventListener('blur', function() {
//     console.log('Element Lost Focus');
// })

// loginForm.addEventListener('submit', function(e) {
//     alert('Submit Button Clicked');
//     e.preventDefault();
// })