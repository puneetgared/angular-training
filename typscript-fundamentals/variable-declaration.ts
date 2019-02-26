export function printNumbers() {

    for(var j=0;j<10;j++){
        console.log('Number', j);
    }

    console.log('Outside Access : ',j);
}

printNumbers();