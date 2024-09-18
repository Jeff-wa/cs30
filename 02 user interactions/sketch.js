// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,50,120);

  fill(110);
  triangle(0,700,1000,700,500,300);

  fill(160);
  triangle(150,700,500,700,350,130);

  fill(140)
  triangle(0,700,300,700,200,300)

  fill(90,150,0)
  rect(0,700,2000,700,0,0,0,0)

  fill(180,180,0)
  circle(0,0,300)

  fill(220)
  circle(mouseX,mouseY-105,100)
  circle(mouseX,mouseY,150)

  fill(255,0,0)
  triangle(mouseX-50,mouseY-155,mouseX,mouseY-185,mouseX+50,mouseY-155)
  fill(0)
  circle(mouseX-16,mouseY-119,14)
  circle(mouseX+16,mouseY-119,14)
  rect(mouseX-120,mouseY-30,70,10,30,30,0,0)
  rect(mouseX+50,mouseY-30,70,10,30,30,0,0)
  rect(mouseX-25,mouseY-100,50,5,30,30,0,0)
}