interface Point {
    x: number
    y: number
}

function drawPoint(point: Point) {
    console.log(`X Point: ${point.x} Y Point : ${point.y}`);
}

drawPoint(
    {
        x: 10,
        y: 20
    }
);

