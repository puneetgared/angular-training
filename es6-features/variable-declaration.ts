function printNumbers() {
    var i=0;
    for(var j=0;j<10;j++){
        console.log('Number', j);
    }

    console.log('Outside Access : ',j);
}
// console.log(i);
printNumbers();

const number = 20;
// number = 10;