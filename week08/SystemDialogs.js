const yourName=prompt("what is your name?", "typing your name...")
console.log(yourName)

let nameConfirm = null
if (yourName?.trim().length!==0 && yourName?.trim()!==null){
    nameConfirm = confirm (`Are you ${yourName}?`)
}       
    nameConfirm ? alert(`Hello, ${yourName}`) : alert(`Hello, Guest`)

