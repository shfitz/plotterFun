let a,b,c,d;

let x = 0.1;
let y = 0.1;

let xNext, yNext;
let xScreen, yScreen;

let grid = [];

let startAngle;

let totalLoops = 0;
let loopsPerFrame = 500;
let frames = 10;

let doExport =true;

function setup() {
  createCanvas(800, 800);
  a = random() * 6 - 3;
  b = random() * 6 - 3;
  c = random() * 6 - 3;
  d = random() * 6 - 3;
  startAngle = random() * 6 - 3;
  background(255);
  grid = Array(width)
    .fill()
    .map(() => Array(height).fill(0));

       
    
}
function draw() {
    if(doExport) beginRecordSvg("myOutput" + millis() + ".svg");


  for (let i = 0; i < loopsPerFrame; i++) {
    xNext = sin(a * y) - cos(b * x);
    yNext = sin(c * x) - cos(d * y);

    x = xNext;
    y = yNext;

    xScreen = round(map(x, -2, 2, 0, width - 1));
    yScreen = round(map(y, -2, 2, 0, height - 1));

    grid[xScreen][yScreen] += 0.1;
    // let colorAngle = constrain(grid[xScreen][yScreen], 0, 30);

    stroke(0);
    point(map(x, -2, 2, 0, width), map(y, -2, 2, 0, height));
  }

  if(frameCount==100){
doExport=false;
        endRecordSvg();
        // noLoop();
  }
}

function keyPressed() {
  if (key == "s") {

  }
}
