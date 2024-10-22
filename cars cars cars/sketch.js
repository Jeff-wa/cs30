// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let eastbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].action(); 
  }
}

function mouseClicked() {
  eastbound.push(new Vehicle(mouseX, mouseY, 1, 2)); 
}

function drawRoad() {
  fill(50);
  rect(0, 0, width, height);
  
  stroke(255); 
  strokeWeight(4);
  
  let dashLength = 10; 
  let spaceLength = 10; 
  let y = height / 2; 
  
  for (let i = 0; i < width; i += dashLength + spaceLength) {
    line(i, y, i + dashLength, y);
  }
}

class Vehicle {
  constructor(x, y, dir, xSpeed) {
    this.type = int(random(2)); 
    this.c = color(random(255), random(255), random(255));
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.xSpeed = xSpeed;
  }

  action() {
    this.display();
    this.x += this.xSpeed; // Move the vehicle east
  }

  display() {
    if (this.type === 0) {
      this.drawCar();
    } else if (this.type === 1) {
      this.drawTruck();
    }
  }

  drawCar() {
    fill(220)
    rect(this.x+5,this.y-15,20,70) 
    rect(this.x+75,this.y-15,20,70)
    fill(this.c);
    rect(this.x, this.y, 100, 40);
    
  }

  drawTruck() {
    fill(this.c); // Use this.c for the color
    rect(this.x, this.y, 180, 60); 
    rect(this.x + 150, this.y, 30, 60); 
  }
}
