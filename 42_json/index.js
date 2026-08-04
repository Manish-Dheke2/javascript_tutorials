var Obj = {
    "name": "John",
    "age": 30
}

// console.log(Obj.age)
// console.log(JSON.stringify(Obj))

var strJson = JSON.stringify(Obj) 
console.log(strJson)
console.log(JSON.parse(strJson))

var Arr = [
    {
        "name": "John",
        "age": 30
    },
    {
        "name": "Claire",
        "age": 25
    },
    {
        "name": "Smith",
        "age": 32
    }
]

console.log(Arr[1].name)
