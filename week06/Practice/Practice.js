/* Design a function idGenerator that generates unique IDs automatically.
Each time the function is called it should return the next ID number,
starting from 1 and increasing by 1 */

function idGenerator() {
    let count = 1
    return function () {
        return count++
    }
}

const idGen = idGenerator()

console.log(idGen())
console.log(idGen())
console.log(idGen())

/*write a function outerFunction(a) that contains a nested function innerFunction(b).
the outFunction shold return the result of a */
function outerFunction(x){
  function innerFunction(y){
    return x + y
  }
  return innerFunction
}

const add5 = outerFunction(5)
console.log(add5(3)) //8

const add10 =  outerFunction(10)
console.log(add10(2)) //12