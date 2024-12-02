// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let minerImage;

function setup() {
  createCanvas(1000, 1000);
}

function preload() {
  minerImage = loadImage('M:/Screenshot 2024-12-02 115726.png');
}

function draw() {
  background(255, 255, 0); 
  
  fill(255, 255, 0); 
  rect(0, 0, 1000, 200); 
  
  fill(120, 70, 25); 
  rect(0, 200, 1000, height - 200); 
  
  fill(0, 0, 50); 
  arc(500, 200, 350, 350, PI, 0); 
  
  stroke(0);
  line(0, 200, 1000, 200); 

  image(minerImage, 500, 200); 
}

