console.clear()

// var currentDay = 'Thu'

// // if (currentDay === 'Mon') {
// //     console.log('Timings: 10:00-06:00')
// // } else if(currentDay === 'Tue') {
// //     console.log('Timings: 09:00-05:00')
// // } else if(currentDay === 'Wed') {
// //     console.log('Timings: 09:30-05:30')
// // } else if(currentDay === 'Thu') {
// //     console.log('Timings: 10:15-06:15')
// // } else if(currentDay === 'Fri') {
// //     console.log('Timings: 09:00-05:05')
// // } else if(currentDay === 'Sat') {
// //     console.log('Timings: 09:00-05:00')
// // } else if(currentDay === 'Sun') {
// //     console.log('Timings: 09:00-01:00')
// // } 


// switch(currentDay) {
//     case 'Mon':
//         console.log('Timings: 10:00-06:00')
//         break;
//     case 'Tue':
//         console.log('Timings: 09:00-05:00')
//         break;
//     case 'Wed':
//         console.log('Timings: 09:30-05:30') 
//         break;
//     case 'Thu':
//         console.log('Timings: 10:15-06:15')
//         break;
//     case 'Fri':
//         console.log('Timings: 09:00-05:05')
//         break;
//     case 'Sat':
//         console.log('Timings: 09:00-05:00')
//         break;
//     case 'Sun':
//         console.log('Timings: 09:00-01:00')
//         break;
//     default:
//     console.log('Timings: 09:00-01:00')
// }


// JavaScript – Conditional Statement: switch 
// Practice Problems  
// Answer the following questions and run the code in Codepen.  
// Q1. Write a program to print the number of days in a month using a switch case. Change 
// the value of monthNumber and check if your code works fine. 
// var monthNumber = 3; 
// Example: 
// monthNumber = 3 
// Output: 
// Month = March 
// Total number of days = 31 

var monthNumber = 3
var monthName = " "
var days = 0

switch (monthNumber) {
    case 1:
        monthName = "January"
        days = 31
        break
    case 2:
        monthName = "February"
        days = 28
        break
    case 3:
        monthName = "March"
        days = 31
        break
    case 4:
        monthName = "April"
        days = 30
        break
    case 5:
        monthName = "May"
        days = 31
        break
    case 6:
        monthName = "June"
        days = 30
        break
    case 7:
        monthName = "July"
        days = 31
        break
    case 8:
        monthName = "August"
        days = 31
        break
    case 9:
        monthName = "September"
        days = 30
        break
    case 10:
        monthName = "October"
        days = 31
        break
    case 11:
        monthName = "November"
        days = 30
        break
    case 12:
        monthName = "December"
        days = 31
        break
    default:
        console.log('Invalid month')

}

  if (monthNumber >=1 && monthNumber <=12) {
        console.log("Month= " + monthName)
        console.log("Total number of days: " + days)
    }
    

 
// Q2. Write a program to check vowel or consonant using switch case. Change the value 
// of enteredAlphabet and check if your code works fine. 
// var enteredAlphabet = 'd' 
// Example: 
// enteredAlphabet: c 
// Output:   'd' is consonant 

var enteredAlphabet = 'd'

switch (enteredAlphabet.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("'" + enteredAlphabet + "' + is vowel")
        break;

    default:
        console.log("'" + enteredAlphabet + "' + is consonant")

}

// Q3. Write a program to check even or odd number using switch case. Change the value 
// of enteredNumber and check if your code works fine. 
// var enteredNumber = 41 
// Example: 
// enteredNumber: 41 
// Output:   41 is an odd number 

var enteredNumber = 41

switch (enteredNumber % 2) {
    case 1:
        console.log(enteredNumber + " is an odd number")
        break
    case 2:
        console.log(enteredNumber + " is even number")
        break

    default:
        console.log("Invalid Number")

}