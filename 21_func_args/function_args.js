console.clear()

// function greetings(person) {
//     console.log('Welcome ' + person)
// }

// greetings('Manish')
// greetings('Ajay')
// greetings('Suman')


function totalSum(num1, num2, num3) {
    console.log('num1 => ' + num1)
    console.log('num2 => ' + num2)
    console.log('num3 => ' + num3)
    if(num3 !== undefined){
        console.log(num1 + num2 + num3)
    } else {
        console.log(num1 + num2)
    }
    
}

totalSum(2, 8)
// totalSum(12, 18, 20, 30, 40, 50) // extra value not added after 20
// totalSum()