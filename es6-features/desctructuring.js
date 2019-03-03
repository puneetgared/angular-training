

//ES6
const employee = {
    firstName : 'puneet',
    lastName : 'kumar'
}

const {firstName,lastName} = employee;
console.log(firstName,lastName)


let name = 'puneet kumar'
let team = {
    name : 'Global Digital Wealth'
}

//Get the error
// let {name} = team 
let {name : teamName} = team
console.log(teamName);
