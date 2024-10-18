// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){ 
  background(220)
    fill(100); 
    rect(0, 200, width, 600); 
    stroke(255); 
    strokeWeight(4); 
    line(0,500,width,500)
  }

class car{
  constructor(x,y){
    this.x = x
    this.y = y
  }
}