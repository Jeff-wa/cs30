// state variables
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let currentcolor=0;
let myColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(200,120,210);
}

function draw() {
  background(220);

  switch(currentcolor){
   case 0:
     fill(255,0,0); 
     break;
   case 1:
     fill(myColor); 
     break;
   case 2:
     fill(0,50,210); 
     break;
  }

  circle(width/2,height/2,circleSize);

  if(frameCount % 30===0){
    currentcolor+=1;
    if(currentcolor > 2) currentcolor=0;
    
    if(growing)circleSize+=2
    else circleSize-=2

    circle(width/2,height/2,circleSize)
}
}