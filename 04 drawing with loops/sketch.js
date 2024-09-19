// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)
}

function draw() {
  myBackground();
  myForeground();
  //this is where the screen actually draws the frameRate
}

function myBackground(){
   //use some loops to create gradient background
   //assuming height ===800
   //y: 800 700 600 .....
   let rectHeight = 40;
   noStroke();
   for(let y = height; y >= 0; y -= rectHeight){
    let value = map(y,0,height,0,255);
    fill(value,255-value,255-value);
    rect(0,y,width,rectHeight);
   }
}

function myForeground(){
  //draw some shapes using FOR / while loops
   //var    //cond. //modification of var
  for(let x = 0; x < width; x += 40) {
    fill(0);
    circle(x, height/2, 40);
    fill(255)
    text(x,x,height/2);
  }

  //create stars x100
  let starCount = 0;
  randomSeed(5);
  while(starCount < 100){
    fill(255,0,0);
    let x = random(0,width);
    let y = random(0,height);
    circle(x,y,10)
    starCount++;
  }
}