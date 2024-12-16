// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let pilot;

function perload(){
  pilot = loadImage("assets/aviator.png")
}
function setup() {
  createCanvas(pilot.width, pilot.height);
}

function draw() {
  image(pilot,0,0 );
  loadPixels()
  pixels[100*4] = 255
  pixels[100*4+1] = 0
  pixels[100*4+2] = 0
  updatePixels() 
}
