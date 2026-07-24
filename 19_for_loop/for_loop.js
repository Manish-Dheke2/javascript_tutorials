// var mList = [1, 2, 3, 4, 5]
// var pos
// for (pos = 0; pos < mList.length; pos++) {
//     console.log('Position => ' + pos + ' Value => ' + mList[pos])
// }


// // Break keyword

var mList = [1, 2, 3, 4, 5]
var pos
for (pos = 0; pos < mList.length; pos++) {
    if (pos >=4) break
    console.log('Position => ' + pos + ' Value => ' + mList[pos])
}


// Continue keyword

var mList = [1, 2, 3, 4, 5]
var pos
for (pos = 0; pos < mList.length; pos++) {
    if (pos % 2 !== 0) continue
    console.log('Position => ' + pos + ' Value => ' + mList[pos])
}

