var btn = document.getElementById('top-btn')

btn.addEventListener('mousedown', function() {
    console.log('Mouse down event')
})

btn.addEventListener('mouseup', function() {
    console.log('Mouse up event')
})

btn.addEventListener('click', function() {
    console.log('Click event')
})

btn.addEventListener('dblclick', function() {
    console.log('Double Click event')
})

var overCount = 0
var over = document.getElementById('over')

over.addEventListener('mouseover', function() {
    var countElement = document.querySelector('#over > p')
    overCount += 1
    countElement.innerHTML = overCount
})


var enterCount = 0
var enter = document.getElementById('enter')

enter.addEventListener('mouseenter', function() {
    var countElement = document.querySelector('#enter > p')
    enterCount += 1
    countElement.innerHTML = enterCount
})


var moveCount = 0

var move = document.getElementById('move')

move.addEventListener('mousemove', function() {
    var countElement = document.querySelector('#move > p')
    moveCount += 1
    countElement.innerHTML = moveCount
})






















// var btn = document.getElementById('top-btn');

// btn.addEventListener('mousedown', function() {
//     console.log('Mouse Down Event')
// })

// btn.addEventListener('mouseup', function() {
//     console.log('Mouse Up Event')
// })

// btn.addEventListener('click', function() {
//     console.log('Click Event')
// })

// btn.addEventListener('dblclick', function() {
//     console.log('Double Click Event')
// })

// var overCount = 0
// var over = document.getElementById('over')
// over.addEventListener('mouseover', function() {
//     var countElement = document.querySelector('#over > p');
//     overCount += 1
//     countElement.innerHTML = overCount
// })

// var enterCount = 0
// var enter = document.getElementById('enter')

// enter.addEventListener('mouseenter', function() {
//     var countElement = document.querySelector('#enter > p');
//     enterCount += 1
//     countElement.innerHTML = enterCount
// })

// var moveCount = 0
// var move = document.getElementById('move')
// move.addEventListener('mousemove', function() {
//     var countElement = document.querySelector('#move > p');
//     moveCount += 1
//     countElement.innerHTML = moveCount
// })



