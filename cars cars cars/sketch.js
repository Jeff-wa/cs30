// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let vehicles 

function setup() {
  createCanvas(windowWidth, windowHeight);
  vehicles.push(new Vehicle(0, 'red', 100, 200, 1, 2));  // Car
  vehicles.push(new Vehicle(1, 'blue', 300, 250, 0, 3)); // Truck
}

function draw() {
  background(220);
  drawRoad();
  drawCar();
  drawTruck();
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
  constructor(vehicleType, color, x, y, direction, xSpeed) {
    this.type = vehicleType; 
    this.color = color;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
  }

  display() {
    if (this.type === 0) {
      this.drawCar();
    } else if (this.type === 1) {
      this.drawTruck();
    }
  }

  drawCar() {
    fill(this.color);
    rect(this.x, this.y, 50, 30); 
  }

  drawTruck() {
    fill(this.color);
    rect(this.x, this.y, 70, 40); 
    rect(this.x + 10, this.y - 20, 40, 20); 
  }
  }
