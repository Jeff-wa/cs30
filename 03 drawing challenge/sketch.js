// Drawing Challenge
// Jeff Wang
// sept 13, 2024
//

let rX = 50;   let rY = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  //moving rectangle
  if(keyIsPressed) {
    if(key === "a") {
      rY += 10; //rY = rY + 10
      if(rY > height) rY = 0;
     }  
  }


  fill(50,150,255);
  rect(rX,rY,70, 25, 10, 0,);
}


function keypressed(){
  if(keyCode===DOWN_ARROW){
    rY += 100
  }
}