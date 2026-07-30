let btn1 = document.querySelector("#btn1")

// btn1.onclick = (e) => {
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX, e.clientY)
// }


btn1.addEventListener("click", () => {
    console.log("Button1 was clicked - handler1")
})

btn1.addEventListener("click", () => {
    console.log("Button1 was clicked - handler2")
})

const handler3 = () => {
    console.log("button1 was clicked - handler3")
}

btn1.addEventListener("click", handler3)

btn1.addEventListener("click", () => {
    console.log("Button1 was clicked - handler4")
})

btn1.removeEventListener("click", handler3)













// let btn1 = document.querySelector("#btn1")
// // btn1.onclick = (e) => {
// //     console.log(e)
// //     console.log(e.type)  
// //     console.log(e.target) 
// //     console.log(e.clientX, e.clientY) 
// // }

// btn1.addEventListener("click", (e) => {
//     console.log("button1 was clicked - handler1")
// })

// btn1.addEventListener("click", (e) => {
//     console.log("button1 was clicked - handler2")
// })

// const handler3 = () => {
//     console.log("button1 was clicked - handler3")
// }

// btn1.addEventListener("click", handler3)

// btn1.addEventListener("click", (e) => {
//     console.log("button1 was clicked - handler4")
// })

// btn1.removeEventListener("click", handler3)

// let div = document.querySelector("div")
// div.addEventListener("mouseover", () => {
//     console.log("div was inside")
// })

