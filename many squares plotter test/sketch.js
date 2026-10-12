let rotationcounter = 0;
let squares = [];
let size = 0;

function setup() {
    createCanvas(800, 600);
    frameRate(20);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let eachSq = {
                x: j * 100 + width / 2 - 100,
                y: i * 100 + height / 2 - 100,
                w: 65,
                r: 0.0
            };
            squares.push(eachSq);
        }
    }

}

function draw() {
    rectMode(CENTER);
    background(220);

    for (let i = 0; i < squares.length; i++) {
        squares[i].w += sin(frameCount / 10.) * noise(i+frameCount);
        push();
        translate(squares[i].x, squares[i].y);
        rotate(noise(squares[i].x + frameCount / 100., squares[i].y + frameCount / 101.) * TWO_PI)
        rect(0, 0, squares[i].w, squares[i].w);
        pop();
    }
}
