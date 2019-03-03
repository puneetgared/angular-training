const newProperty = 'team'

//ES5
const employee = {
    firstName : 'puneet',
    lastName : 'kumar'
}

employee[newProperty] = 'GDW'

console.log(employee)

//ES6
const newEmployee = {
    firstName : 'puneet',
    lastName : 'kumar',
    [newProperty] : 'GDW'
}

console.log(employee)