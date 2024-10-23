// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let vehicles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
  
  for (let vehicle of vehicles) {
    vehicle.action(); 
  }
}

function mouseClicked() {

  if (mouseY < height / 2) {
    this.dir = -1;
    this.xSpeed = random(-15, -1); 
  } else {
    this.dir = 1;
    this.xSpeed = random(1, 15); 
  }

  vehicles.push(new Vehicle(mouseX, mouseY, this.dir, this.xSpeed)); 
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

  move() {
    this.x += this.xSpeed; 
    if (this.x > width) {
      this.x = 0; 
    } else if (this.x < 0) {
      this.x = width; 
    }
  }

  Speedup() {
    if (this.dir === 1) { 
      if (random() < 0.02) {
        this.xSpeed = min(this.xSpeed + random(0.1, 0.5), 15); 
      }
    } else { 
      if (random() < 0.02) {
        this.xSpeed = max(this.xSpeed - random(0.1, 0.5), -15); 
      }
     
    }
  }

  SpeedDown(){
    if(this.dir === -1){
      if (random() < 0.02) {
        this.xSpeed = max(this.xSpeed - random(0.1, 0.5), 1); // Slow down
      } 
    }else{
      if (random() < 0.02) {
        this.xSpeed = min(this.xSpeed + random(0.1, 0.5), -1); // Slow down
      }
    }
  }
  action() {
    this.SpeedDown();
    this.Speedup(); // Adjust speed before moving
    this.move(); // Move the vehicle
    this.display(); // Render the vehicle
  }

  display() {
    if (this.type === 0) {
      this.drawCar();
    } else if (this.type === 1) {
      this.drawTruck();
    }
  }

  drawCar() {
    fill(220);
    rect(this.x + 5, this.y - 15, 20, 70); 
    rect(this.x + 75, this.y - 15, 20, 70);
    fill(this.c);
    rect(this.x, this.y, 100, 40);
  }

  drawTruck() {
    fill(this.c);
    rect(this.x, this.y, 180, 60); 
    rect(this.x + 150, this.y, 30, 60); 
  }
}
