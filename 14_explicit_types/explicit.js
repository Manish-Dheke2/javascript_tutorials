console.clear()

var a = 15
console.log(typeof(String(a)))
console.log(typeof(String(true)))
console.log(typeof(String(-89.2)))
console.log(typeof(String(null)))

// To Number
console.log(typeof(Number('2')))
console.log(Number(true), typeof(Number(true)))
console.log(Number(false), typeof(Number(true)))
console.log(Number('-90.23'), typeof(Number('-90.23')))

// To Boolean
console.log(Boolean(1), typeof(Boolean(1)))
console.log(Boolean(0), typeof(Boolean(0)))
console.log(Boolean('Apple'), typeof(Boolean('Apple')))
console.log(Boolean(null), typeof(Boolean(null)))
console.log(Boolean(undefined), typeof(Boolean(undefined)))
console.log(Boolean(''), typeof(Boolean('')))