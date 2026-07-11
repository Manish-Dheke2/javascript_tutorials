console.clear()

var myFirstString = "This is a string for Javascript string functions, Javascript"

// returns length of string
console.log(myFirstString.length)

// Find index of string inside another string
console.log(myFirstString.indexOf('Javascript'))
console.log(myFirstString.indexOf('This'))
console.log(myFirstString.indexOf('a'))

// Find LAST index of a string inside another string
console.log(myFirstString.lastIndexOf('Javascript'))

// Get a part of our string slice(start, end)
console.log(myFirstString.slice(2, 5))
console.log(myFirstString.slice(8,23))
console.log(myFirstString.slice(5))

// Get sub string function - substr(startPos, length)
console.log(myFirstString.substr(0, 4))
console.log(myFirstString.substr(21, 10))
console.log(myFirstString.substr(21))