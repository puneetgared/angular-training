import {printNumbers} from './variable-declaration'

class Point {
    constructor(private _x: number, private _y: number){
    }

    drawPoint(){
        console.log(`Point Drawing x : ${this._x} Drawing Y : ${this._y}`);
    }

    get x(){
        return this._x;
    }

    set x(_x : number){
        if(_x < 0) throw new Error('X value should be more than 0');
        this._x = _x;
    }
    
}

const point = new Point(10,20);
point.x = 10
console.log('test', point.x)
point.drawPoint()
printNumbers();