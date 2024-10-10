// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSpacing =20
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function loopReview(){
  for (let x = 0; x < 4; x++){
    for (let y = 0; y < 4; y++){
     print(x,y)
    }
  }
}

function draw() {
  background(220);
  renderGrid
}
function circleDistance(x1,x2,y1,y2){
  let a = abs(x1-x2)
  let b = abs(y1-y2)
  let c = sqrt(pow(a,2)+pow(b,2))
  return

}

function renderGrid(){
  for(let x = 0, x < width; x = x+gridSpacing){
    for(let y = 0; y <height; y=y+gridSpacing)
      circle(x,y,gridSpacing)
  }
}