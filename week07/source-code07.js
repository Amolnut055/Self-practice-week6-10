console.log(window.document)
console.log(document) // root node
console.log(typeof document) // root node  (document คือ rootnode)
console.log(document.getElementById("123"))
const htmlElement = document.documentElement //htmสElement เก็บ node element
console.log(htmlElement)

console.log(htmlElement.parentElement) // null
console.log(htmlElement.parentNode) //root node
if(htmlElement.parentNode === document){
    console.log("parent of html is a root node") // true
}

console.log(document.firstChild) // <!DOCTYPE html>
console.log(document.firstChild.nextSibling) // <!--sample comment #1-->
console.log(document.firstChild.previousSibling) // null
console.log(document.firstElementChild) // <html lang="en">
console.log(document.firstElementChild.previousSibling) // <!--sample comment #1-->
console.log(document.lastChild) // <!--sample comment #3  -->
console.log(document.lastElementChild) // <html lang="en">

//เข้าถึงChild(ลูก)
//1. get all child nodes under <div id='123'>
const divElement = document.getElementById("123")
//2. get all node types children (return (static) NodeList, can use forEach)
const divChildNode = divElement.childNodes 
console.log(divChildNode.length)// เอาNode typeทั้งหมดรวมถึง white space 
divChildNode.forEach((child) => console.log(child)) // show Node type ทั้งหมด
//3. get only Element node type children (retunr (dynamic) HTMLCollection, cannot use forEach)
const divChildren = divElement.children 
console.log(divChildren.length)//2 เอาแค่Element

// showว่ามี element Node อะไรบ้าง
// แบบ1
 for (let i = 0; i < divChildren.length; i++) {
   console.log(divChildren[i])
 }
 // แบบ2
 Array.from(divChildren).forEach((child) => console.log(child))

// เข้าถึงattribute
// const divElement = document.getElementById("123")
//1. get all attributes on <div id='123'>
const divAttrs = divElement.attributes
console.log(divAttrs.length) //2

//แบบ1
for (let i = 0; i < divAttrs.length; i++) {
  const attrName = divAttrs[i].name //get attribute name
  const attrValue = divAttrs[i].value //get attribute value
  console.log(`attribute name: ${attrName}, attribute value: ${attrValue}`)
  console.log(divAttrs[i].ownerElement)
}

//แบบ2
console.log(divElement.getAttribute("id")) //find attribute value
console.log(divElement.getAttribute("style")) //find attribute value