// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  //happens once,at function setup
  createCanvas(500,400);
}

function draw() {
  //when possible, try to
  //keep draw() clean...
  background(220);
  drawCircles()
 
}

function drawCircles(){
  //contains the code to
  //draw 5 circles
  fill(101,0,255)
  circle(0,0,50) 

  fill(0,255,0) // rgb
  circle(100,50,30)
}