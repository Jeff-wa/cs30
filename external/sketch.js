// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let started = false
let pos;let vel;
let totalBounces = 0;

function preload(){
  music = loudSound("assets/background.mp3")
}
function setup() {
  createCanvas(300, 200);
  textSize(30);
  textAlign(CENTER)

  pos = createVector(width/2,height/2);
  vel =createVector(5,3);

  if(localStorage.gentltem("bounce")===null){
    localStorage.setltem("bounce",0);
  }
  else{
    totalBounces = int(localStorage.getltem("bounce"));
  }
  localStorage.removeltem("bounce")
}

function draw() {
  background(220);
  if(started === false){
    text("Click to begin",width/2,height/2)
    if(mouseIsPressed){
      started = true;
    }
  }
  else{
    text(totalBounces,width/2,height/2)
    updateBall()
  }
}

function updateBall(){
  pos.add(vel);
  bounceSound.setVolume(0.9)
  if(pos.x<0||pos.x>width){
    totalBounces++
    bounceSound.play()
    vel.x*=-1
    localStorage.setltem("bounce",totalBounces)
  }

  if(pos.x<0||pos.x>width){
    totalBounces++;
    bounceSound.play()
    vel.x*=-1;
    localStorage.setltem("bounce",totalBounces);
  }
  if(pos.y<0||pos.y>width){
    totalBounces++;
    vel.y*=-1;
    localStorage.setltem
  }
  circle(pos.x,pos.y,20);
}