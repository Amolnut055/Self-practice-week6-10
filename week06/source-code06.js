// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  quotes.push(quote)
  // TODO: Add the quote object to the quotes array
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
   const index = quotes.findIndex(q => q.id === id)
if (index !== -1) {
  quotes.splice(index, 1)
}
  // TODO: Remove the quote object from the array using the given id
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  const index = quotes.findIndex(q => q.id === id)
if (index !== -1) {
  quotes[index] = { ...quotes[index], ...updatedQuote }
}
  // TODO: Find the quote by id and update its properties
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  return quotes
  // TODO: Return the quotes array
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({ id: 1, content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" })
addQuote({ id: 2, content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" })
addQuote({ id: 3, content: "Happiness depends upon ourselves.", author: "Aristotle" })

// TODO: Delete 1 quote using deleteQuote()
deleteQuote(1)
// TODO: Update 1 quote using updateQuote()
updateQuote(1, { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" })
updateQuote(3, { content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" })

// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes())


// First-Class and Higher-Order function
// 1. 
const greet = (name,formatter) => formatter(name)
const  shout = text => text + '✋'
console.log (greet("Hi",shout))
 
// 2.
function calculate(nums, compute) {
  return compute(nums)
}

// 3.
function sum(elements) {
  return elements.reduce((total,current) => total + current)
}

// 4. 
function sort(elements){
  return elements.sort((a,b) => a - b)
}

function max(elements) {
  return Math.max(...elements)
}
function min(elements) {
  return Math.min(...elements)
}
console.log(calculate([1, 3, 5, 7], sum))
console.log(calculate([100, 3, 5, 7], max))
console.log(calculate([10, 2, 0, 7], min))
console.log(calculate([10, 2, 0, 7], sort))

// inner (nested) function
// 1. 
function q() {}
function w() {}
function x() {
  function y() {
    function z() {}
  }
  function r() {}
  function n() {}
}

// 2.
function j() { // Higher-Order function
  return sum
}
function k() {
  return sum(1, 5)
}
function l(x) { // Higher-Order function
  return x
}
function sum(n1, n2) {
  return n1 + n2
}

console.log(typeof j())
console.log(typeof k())
console.log(typeof l(sum))

// function scope
//1. ไม่ได้อยู่ในscopeไม่สามารถอ้างถึงได้ (error) 
// ถ้าตัวแปรภายใน function ก็อ้างได้แค่ภายในfunction ภายนอกอ้างถึงไม่ได้
function dosomething() {
  let greet = 'Hello'
  return `Hello, ${x}`
}
// console.log(x) ตัวแปรในfunction dosomething
// console.log(greet) ตัวแปรในfunction dosomething

//2.
let a = 1 //global scope
function doSomething(x) { //global scope
  let a = 10 //local scope
  let greet = "Hello"
  function echo() {
    let a = 555
    let b = "Bob"
    console.log(a, b, greet)
  }
  echo()
  return `${greet}, ${x}, a=${a}`
}
console.log(doSomething("guest"))
a = 100
console.log(`a= ${a}`)

//เรียกecho
function doSomething(x) {
  function echo() {
    return `hello,${x}`
  }
  return echo
}
console.log (doSomething("guest")())

// Closures function
//1. 
function makeAdder(x) {
  return function(y) { 
    return x+ y 
  }
}
const add5 = makeAdder(5) //add5 จำค่า x =5 
const add10 = makeAdder(10) //add10 จำค่า x =10
console.log(add5(3)) // 8
console.log(add10(3)) // 13

// 2.
function counter() {
  let count = 0
  function increment() {
    return ++count
  }
  function decrement() {
    return --count
  }
  function getCount() {
    return count
  }
  return {
    add: increment,
    decrese: decrement,
    getCountValue: getCount,
  }
}
const { add, getCountValue } = counter()
console.log(add())
console.log(getCountValue())
// const c = counter()
// console.log(c.increment()) //1
// console.log(c.increment()) //2
// console.log(c.decrement()) //1
// console.log(c.getCount()) //1

// Practice
//1. 
function idGenerator() {
  let count = 1
  return function () {
    return count++
  } 
}

const idGen = idGenerator()

console.log(idGen()) //1
console.log(idGen()) //2
console.log(idGen()) //3

//2.
function outerFunction(a) {
  function innerFunction(b){
    return a+b
  }
  return innerFunction
}

const addFive = outerFunction(5)
console.log(addFive(3)) //8

const addTen =  outerFunction(10)
console.log(addTen(2)) //12