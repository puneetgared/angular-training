let array1=['a','b','c']
let array2=['d','e','f']
let array3 = ['g','h','i']

//ES5
const contacted = array1.concat(array2).concat(array3)
console.log(contacted)

//ES6
const summed = [...array1,...array2,...array3]
console.log(summed)



//Replacing the variable
const employee = {
    firstName : 'puneet',
    lastName : 'kumar',
    team : 'Global Digital Wealth'
}

//ES5
console.log(Object.assign(employee,{team : 'FAS'}))

//ES6
console.log({...employee, team : 'FAS'})

