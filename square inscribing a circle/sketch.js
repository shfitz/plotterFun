let bDoExportSvg = true;
let inc;
let scribble = new Scribble();

function setup() {
    // These canvas dimensions are 8.5"x11" at 96 dpi
    createCanvas(512, 512);
    setSvgFlattenTransforms(false);
    frameRate(20);
    // createLoop({ duration: 5,  gif: {
    //         options: { quality: 5 },
    //         fileName: "noiseLoop.gif"
    //     } });

    createLoop({ duration: 5, gif: false });


    // rectMode(CENTER);
    inc = TWO_PI / 5;
    // randomSeed(1234);
    scribble.numEllipseSteps = 45;
    scribble.roughness = .5;
    scribble.bowing = .5;
    fill(255);
}


function draw() {
    background(255);
    if (bDoExportSvg) {
        beginRecordSvg("myOutput" + frameCount + ".svg");
    }
    stroke("black");
    scribble.scribbleEllipse(width / 2, height / 2, 480, 480);
    // Draw stuff here, such as:
    push();
    translate(width / 2, height / 2)
    // const radius = height / 3
    let r = cos(animLoop.theta) * inc;
    rotate(r);
    scribble.scribbleRect(0, 0, 340, 340);
    // the x coordinates of the border points of the hachure
    let xCoords = [-170, 170, 170, -170];
    // the y coordinates of the border points of the hachure
    let yCoords = [-170, -170, 170, 170];
    // the gap between two hachure lines
    let gap = 6;
    // the angle of the hachure in degrees
    let angle = r * 180 / PI;
    stroke(255, 0, 0);
    scribble.scribbleFilling(xCoords, yCoords, gap, angle);
    pop();
    stroke("black");
    scribble.scribbleEllipse(width / 2, height / 2, 340, 340);

    push();
    translate(width / 2, height / 2)
    // const radius = height / 3
    let r1 = sin(animLoop.theta) * inc;
    rotate(r1);
    scribble.scribbleRect(0, 0, 240, 240);
    // the x coordinates of the border points of the hachure
    let xCoords1 = [-120, 120, 120, -120];
    // the y coordinates of the border points of the hachure
    let yCoords1 = [-120, -120, 120, 120];
    // the gap between two hachure lines
    let gap1 = 8;
    // the angle of the hachure in degrees
    let a1 = 360 - (r1 * 180 / PI);
    stroke(255, 0, 0);
    scribble.scribbleFilling(xCoords1, yCoords1, gap1, a1);
    pop();
    stroke("black");
    scribble.scribbleEllipse(width / 2, height / 2, 240, 240);

    push();
    translate(width / 2, height / 2)
    // const radius = height / 3
    let r2 = cos(animLoop.theta) * inc * 2;
    rotate(r2);
    scribble.scribbleRect(0, 0, 170, 170);

    // the x coordinates of the border points of the hachure
    let xCoords2 = [-85, 85, 85, -85];
    // the y coordinates of the border points of the hachure
    let yCoords2 = [-85, -85, 85, 85];
    // the gap between two hachure lines
    let gap2 = 3;
    // the angle of the hachure in degrees
    let a2 = 315;
    stroke(255, 0, 0);
    scribble.scribbleFilling(xCoords2, yCoords2, gap2, a2);
    pop();
    stroke("black");
    scribble.scribbleEllipse(width / 2, height / 2, 170, 170);

    push();
    translate(width / 2, height / 2)
    // const radius = height / 3
    let r3 = animLoop.theta;
    rotate(r3);
    scribble.scribbleRect(0, 0, 120, 120);

    // the x coordinates of the border points of the hachure
    let xCoords3 = [-60, 60, 60, -60];
    // the y coordinates of the border points of the hachure
    let yCoords3 = [-60, -60, 60, 60];
    // the gap between two hachure lines
    let gap3 = 8;
    // the angle of the hachure in degrees
    let a3 = (r3 * 180 / PI);
    stroke(255, 0, 0);
    scribble.scribbleFilling(xCoords3, yCoords3, gap3, a3);


    pop();
    stroke("black");
    scribble.scribbleEllipse(width / 2, height / 2, 120, 120);

    push();
    translate(width / 2, height / 2)
    // const radius = height / 3
    let r4 = TWO_PI - animLoop.theta;
    rotate(r4);
    scribble.scribbleRect(0, 0, 85, 85)

    // the x coordinates of the border points of the hachure
    let xCoords4 = [-43, 43, 43, -43];
    // the y coordinates of the border points of the hachure
    let yCoords4 = [-43, -43, 43, 43];
    // the gap between two hachure lines
    let gap4 = 5;
    // the angle of the hachure in degrees
    let a4 = 270 + (r4 * 180 / PI);
    stroke(255, 0, 0);
    scribble.scribbleFilling(xCoords4, yCoords4, gap4, a4);


    pop();
    stroke("black");
    scribble.scribbleEllipse(width / 2, height / 2, 85, 85);

    push();
    translate(width / 2, height / 2)
    // const radius = height / 3
    let r5 = animLoop.theta / 4;
    rotate(r5);
    scribble.scribbleRect(0, 0, 60, 60)

    // the x coordinates of the border points of the hachure
    let xCoords5 = [-30, 30, 30, -30];
    // the y coordinates of the border points of the hachure
    let yCoords5 = [-30, -30, 30, 30];
    // the gap between two hachure lines
    let gap5 = 2;
    // the angle of the hachure in degrees
    let a5 = -r5 * 180 / PI;
    stroke(255, 0, 0);
    scribble.scribbleFilling(xCoords5, yCoords5, gap5, a5);




    pop();
    stroke("black");
    scribble.scribbleEllipse(width / 2, height / 2, 60, 60);

    push();
    translate(width / 2, height / 2)
    // const radius = height / 3
    // let r5 = animLoop.theta/4;
    rotate(r1);
    scribble.scribbleRect(0, 0, 42.5, 42.5);


    // the x coordinates of the border points of the hachure
    let xCoords6 = [-21, 21, 21, -21];
    // the y coordinates of the border points of the hachure
    let yCoords6 = [-21, -21, 21, 21];
    // the gap between two hachure lines
    let gap6 = 10;
    // the angle of the hachure in degrees
    let a6 = r1 * 180 / PI;
    stroke(255, 0, 0);
    scribble.scribbleFilling(xCoords6, yCoords6, gap6, a6);


    pop();
    stroke("black");
        scribble.scribbleEllipse(width / 2, height / 2, 42.5, 42.5);

    if (bDoExportSvg) {
        endRecordSvg();
    }

    if (frameCount == 100) {
        bDoExportSvg = false;
        // noLoop();
    }
}