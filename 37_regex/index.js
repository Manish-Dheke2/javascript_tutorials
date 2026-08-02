// /{pattern}/{flags}

// new RegExp('pattern', 'flags')

var str = "This is a black ball pen. This pen is really smooth. It is a parker PEN."

// var pattern = /pen/g;
var pattern = new RegExp('pen', 'g');

console.log(str.search(pattern))