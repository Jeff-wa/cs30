// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let seed
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  seed=random(100);
}

function draw() {
  background(220);
  randomSeed(seed);
  squareFractal(width/2,height/2,width/2);
}
function squareFractal(x,y,len){
  if(len>10){
    rectMode(CENTER);
    fill(ramdom(255),random(255),random(255));
    push();
    translate(x,y);
    rotate(radians(frameCount));
    square(0,0,len);
    pop();
    squareFractal(x-len/2,y-len/2,len/2);
    squareFractal(x+len/2,y-len/2,len/2);
    squareFractal(x-len/2,y+len/2,len/2);
    squareFractal(x+len/2,y+len/2,len/2);
  }
}
function circleFractal(x,y,d){
  if(d>2){
    circle(x,y,d);
  }
}
function cantor(x,y,len,depth){
  if(depth>0){
    line(x,y,x+len,y)
    let newY=y+20;
    cantor(x,newY,len/3,depth-1)
    cantor(x+2/3*len,newY,len/3,depth-1)

  }
}
function circleInCircle(x,y,d){
  if(d>10){
    circle(x,y,d)
    let den = map(mouseX,0,width,1.01,1.5)
    circleInCircle(x,y,d/den)
  }
}
