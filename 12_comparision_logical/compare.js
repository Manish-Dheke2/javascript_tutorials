console.clear()

if (5 == '5') {console.log(true)}  // compares values but not types

if (5 === 5) {console.log(true)}  else {
    console.log(false)
}  // does both

if(5 != '5') {console.log(true)} else {console.log(false)}

if(5 !== '5') {console.log(true)} else {console.log(false)}

if(15 < 10) {console.log(true)} else {console.log(false)}

if(15 <= 15) {console.log(true)} else {console.log(false)}

if(15 >= 15) {console.log(true)} else {console.log(false)}


// logical operators &&, ||, !
if(5 > 10 && 10 > 15) {console.log(true)} else
{console.log(false)}
console.log(5 < 10 || 10 < 15)
console.log(!(5 < 10))

// Ternary Operator (expression) ? a : b
20 > 3 ? console.log(true) : console.log(false)
