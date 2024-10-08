let start = 0;
let inc = 0.02;
let maxY = -Infinity; 
let xOffset = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
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
    rect(x, height - y, xoff, y); 
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
  //rect(highestPeakX, height - highestPeakY, 10, -50); 
  textAlign(CENTER,CENTER)
  //text('',hightestPeakX, highestPeakY)
  text('🚩', highestPeakX, height - highestPeakY - 30)
  xOffset += 0.01; 
  start += inc;
}