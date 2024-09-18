// Project Title
// Your Name
// Date

let rX = 450; let rY = 450;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}

function draw() {
  background(220);

  fill(0,255,75); 
  rect(rX,rY,90,105,100,100,0);
  
  fill(0,0,0)
  circle(rX-25,rY-5,10)

  fill(0,0,0)
  circle(rX+25,rY-5,10)

  fill(0,0,0)
  rect(rX,rY+20,40,5,0,0,0,0)

}