let array = [5,20,40,8,35,78]

const greaterThan30 = array.filter(function(value) {
    return value > 30;
})

console.log(greaterThan30)

const greaterThan30Es6 = array.filter(value => value > 30)

console.log(greaterThan30);