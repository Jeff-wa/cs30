// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond


  let rectWidth = 1; 
  let noiseScale = 0.01; 
  let frame = 0
  function setup() {
  createCanvas(500, 500);
}
  function setup() {
      createCanvas(windowWidth, windowHeight);
  }

  function draw() {
      background(220);
      frame = 0; 
      for (let x = 0; x < width; x += rectWidth) {
          let noiseValue = noise(frame);
          let rectHeight = map(noiseValue,0,1,2,height); 
          fill(110);
          rect(x, height - rectHeight, rectWidth, rectHeight,0,0,0,0);  
          frame += noiseScale; 
      }
  }
    function drawFlag(x,y){

  }