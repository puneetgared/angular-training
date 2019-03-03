let scores = [5,8,20,87,12,54]

const [one,two,...remaining] = scores;

console.log(one,two)
console.log(remaining)


//Addition example
// ES5
function sum () {
    console.log(arguments);
    let argsArray = Array.prototype.slice.call(arguments)
    return argsArray.reduce(function(sum, current) {
      return sum + current
    }, 0)
  }
//ES6
const sumNew = (...array) =>{
    return array.reduce((total,val) => total+val)
}

console.log(sumNew(5,20,30,55))
  console.log(sum(5,10,20,30))


//swapping numbers;
let a = 10;
let b = 20;
[a,b] = [b,a]
console.log(a,b)