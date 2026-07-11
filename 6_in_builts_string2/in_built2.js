console.clear()

var exampleString = "This is Javascript tutorial"

// toUpperCase() - It converts our string -> uppercase characters
console.log(exampleString.toUpperCase())

// toUpperCase() - It converts our string -> lowercase characters
console.log(exampleString.toLowerCase())

// concat() - It merges two or more strings
var firstName = "Javascript"
var lastName = "Coding"
console.log(firstName.concat(lastName))
console.log(exampleString.concat(' ', firstName, ' ', lastName))

// We can also use '+' to concat two or more strings
console.log(firstName + ' ' + lastName + ' ' + exampleString)