// Perlin Noise Project
// Jeff Wang
// 10.8
let start = 0;
let inc = 0.02;
let maxY = -Infinity; 
let xOffset = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50)
}
function draw() {
  background(220);
  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  maxY = -Infinity; 
  let highestPeakX = 0; 
  let highestPeakY = 0; 
  let sumY=0
  let count=0
  for (let x = 0; x < width; x++) {  
    let y = noise(xoff) * height; 
    xoff += inc;
    fill(0, 0, 0);
    rect(x, height-y, 2, y); 
    if (y > maxY) {
      maxY = y;
      highestPeakX = x; 
      highestPeakY = y; 
    }
    sumY += y;
    count++;
  }
  endShape();
  let averageY = sumY / count;
  stroke(0, 255, 0); 
  line(0, averageY, width, averageY); 
  fill(255,0,0,); 
  textAlign(CENTER,CENTER)
  text('🚩', highestPeakX+18, height - highestPeakY-15)
  xOffset += 0.01; 
  start += 0.16;
}