//different querySelectorกับ querySelectorAll
const meatElement = document.querySelector(".meat") 
console.log(meatElement)  // <li class="meat">Chicken Wings</li>

const meatAllElement = document.querySelectorAll(".meat") //return Node
console.log(meatAllElement) // <li class="meat">Chicken Wings</li> ทุกตัว

meatAllElement.forEach((ele) => console.log(ele)) // 4 meat element


//1. display all child node under <ul id="appetizer">
const appetizerChild = document.getElementById("appetizer")
// const ulElement = document.querySelector("#appetizzer")
console.log(appetizerChild.childNodes)

//2. find meat element that a text value contains "soup"
const MeatSoupElement = document.querySelectorAll(".meat")
MeatSoupElement.forEach((elemeat) => {
    if (elemeat.textContent.toLowerCase().includes("soup")) {
        console.log(elemeat)
    }
})

//3. goto the first child elemnet node under <ul id = "soup"> and display all sibling node
//output :
/* <li class="meat">Spicy Bacon-Corn Soup</li>
        <li class="vegan">Vegetable Soup</li>
        <li class="meat">Beef Soup</li>
        <li class="vegan">Coconut Soup</li> */
const ulElement = document.querySelector("#soup")
// let currentNode = ulElement.children[0]
let currentNode = ulElement.firstElementChild
while (currentNode !== null) {
    console.log(currentNode)
    currentNode = currentNode.nextElementSibling
}

// 1. getElementsByName(),return Nodelist (array-like) data type, implement forEach
const fnameElements = document.getElementsByName("fname")
console.log(fnameElements.length)
fnameElements.forEach((ele) => console.log(ele))
// 2. getElementsByTagName(),return HTMLCollection (array-like) data type
const inputElement = document.getElementsByTagName("input")
Array.from(inputElement).forEach((ele) => console.log(ele))
// 3. getElementsByClassName(),return HTMLCollection (array-like) data type
const veganElement = document.getElementsByClassName("vegan")
Array.from(inputElement).forEach((ele) => console.log(ele))
//4. find the first elements of doccument that has an ID values "appetizer" or "soup"
const ul = document.querySelector("appetizer", "soup")
console.log(ul)
//5. find all class "meat" elements under <ul id = "appetizer"> or <ul id = "soup"> only
const AllMeatItems = document.querySelectorAll("#appetizer .meat", "#soup .meat")
AllMeatItems.forEach((item) => console.log(item.textContent))

/* <ul id="soup">
<li class="meat">Spicy Bacon-Corn Soup</li>
<!-- 2. remove Vegetable Soup -->
<li class="vegan">Vegetable Soup</li>
<!-- 1. <li class="vegan">Cabbage Soup</li> -->
<li class="meat">Beef Soup</li>
<!-- 3. replace Beef Soup with Pork Soup -->
<li class="vegan">Coconut Soup</li>
</ul> */

// (insertBefore) 1. <li class="vegan">Cabbage Soup</li> 
// 1.1 get its parent
// const soupUlElement = document.getElementById("soup")
// 1.2 get ref node -Beef Soup
// let refNode = null
// Array.from(soupUlElement.children).forEach((element) => {
//     if (element.textContent.trim().includes("Beef Soup")) refNode = element
// })
//1.3 create node <li class="vegan">Cabbage Soup</li>
// const newNode = document.createElement("li")
// newNode.textContent = "Cabbage Soup"
// newNode.setAttribute("class", "vegan")
// 1.4 insertBefore(newNode, refNode) 
// soupUlElement.insertBefore(newNode, refNode)

// remove Vegetable Soup
// 2.1 get its parent
// const soupUlElement = document.getElementById("soup")
// 2.2 get ref node -Beef Soup
// let refNode = null
// Array.from(soupUlElement.children).forEach((element) => {
//     if (element.textContent.trim() === "Vegetable Soup") refNode = element
// })
// 2.3 remove
//soupUlElement.removeChild(refNode)

//  3. replace Beef Soup with Pork Soup
// 3.1 get its parent
const soupUlElement = document.getElementById("soup")
// 3.2 get ref node -Beef Soup
let refNode = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim() === "Beef Soup") refNode = element
})
// 3.3 create new node <li class="meat">Pork Soup</li>
const newNode = document.createElement("li")
newNode.textContent = "Pork Soup"
newNode.setAttribute("class", "meat")
// 3.4 replaceChild(newNode, refNode)
soupUlElement.replaceChild(newNode, refNode)