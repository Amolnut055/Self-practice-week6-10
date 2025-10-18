// const SubmitButton = document.querySelector("div>button") 
// console.log(Submitbutton)

// 1. add event with annonymous handle function 
// const SubmitButton = document.querySelector("div>button") 
// SubmitButton.addEventListener
// ("click",() => {
//     console.log("Submit button was clicked!")
// })


// 2. add event with named function
// const SubmitButton = document.querySelector("div>button") 
// const handleButton = () => {
//     console.log("submit button was clicked!")
// }
// SubmitButton.addEventListener
// ("click", handleButton)
// SubmitButton.removeEventListener
// ("click", handleButton)

// ดูทิศทางการไหลแบบ Bubble phase(Default) false ล่างขึ้นบน
// const SubmitButton = document.querySelector("div>button") 
// SubmitButton.addEventListener(
//     "click", () => {
//         console.log("Submit button was clicked!")
//     }
// )

// const divElement = document.querySelector("div")
// divElement.addEventListener(
//     "click", () => {
//         console.log("Div button was clicked!")
//     }
// )

// const bodyElement = document.querySelector("body")
// bodyElement.addEventListener(
//     "click", () => {
//         console.log("Body button was clicked!")
//     }
// )

// ดูทิศทางการไหลแบบ Capture phase (true) บนลงล่่าง
// const SubmitButton = document.querySelector("div>button") 
// SubmitButton.addEventListener(
//     "click", () => {
//         console.log("Submit button was clicked!")
//     },true
// )

// const divElement = document.querySelector("div")
// divElement.addEventListener(
//     "click", () => {
//         console.log("Div button was clicked!")
//     },true
// )

// const bodyElement = document.querySelector("body")
// bodyElement.addEventListener(
//     "click", () => {
//         console.log("Body button was clicked!")
//     },true
// )

// เอา <button>Submit</button> อยู่นอกbody
// const SubmitButton = document.querySelector("button") 
// SubmitButton.addEventListener(
//     "click", 
//     (event) => {
//         console.log(event.eventPhase)
//         console.log("Submit button was clicked!")
//     },true
// )

// const divElement = document.querySelector("div") // ไม่ถูกทำงานถ้ากดปุ่มsubmitเพราะตัวปุ่มไม่ได้อยู่ในdiv
// divElement.addEventListener(
//     "click",  
//     (event) => {
//         console.log(event.eventPhase)
//         console.log("Div button was clicked!")
//     },true
// )

// const bodyElement = document.querySelector("body")
// bodyElement.addEventListener(
//     "click",  
//     (event) => {
//         console.log(event.eventPhase)
//         console.log("Body button was clicked!")
//     },true
// )


// เอา <button>Submit</button> ไว้ข้างในbody
// const SubmitButton = document.querySelector("button") 
// SubmitButton.addEventListener(
//     "click", 
//     (event) => {
//         console.log(event.target)
//         console.log(event.target.id)
//         console.log(event.target.nodeName)
//         console.log(event.target.nodeType)
//         console.log(event.target.nodeValue)
//         console.log(event.target.parentElement)
//         console.log(event.currentTarget)
//         console.log(event.eventPhase)
//         console.log("Submit button was clicked!")
//     },true
// )

// const divElement = document.querySelector("div") // ไม่ถูกทำงานถ้ากดปุ่มsubmitเพราะตัวปุ่มไม่ได้อยู่ในdiv
// divElement.addEventListener(
//     "click",  
//     (event) => {
//         console.log(event.target)
//         console.log(event.currentTarget)
//         console.log(event.eventPhase)
//         console.log("Div button was clicked!")
//     },true
// )

// const bodyElement = document.querySelector("body")
// bodyElement.addEventListener(
//     "click",  
//     (event) => {
//         console.log(event.target)
//         console.log(event.currentTarget)
//         console.log(event.eventPhase)
//         console.log("Body button was clicked!")
//     },true
// )

// ทำให้สั้น
const SubmitButton = document.querySelector("button")
const displayMessage = (ele) => {
       console.log(ele.target)
        console.log(ele.target.id)
        console.log(ele.target.nodeName)
        console.log(ele.target.nodeType)
        console.log(ele.target.nodeValue)
        console.log(ele.target.parentElement)
        console.log(ele.currentTarget)
        console.log(ele.eventPhase)
        console.log("Submit button was clicked!")
}
SubmitButton.addEventListener("click", displayMessage)

const divElement = document.querySelector("button")
divElement.addEventListener("click", displayMessage)

const bodyElement = document.querySelector("button")
SubmitButton.addEventListener("click", displayMessage)

// preventDefault()
const alink = document.querySelector("a")
alink.addEventListener("click",(e) => {
    e.preventDefault()
    console.log("web visit")
})





