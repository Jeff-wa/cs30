// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let vehicles = [];
let trafficLight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  trafficLight = new TrafficLight();
}

function draw() {
  background(220);
  drawRoad();
  
  trafficLight.update();
  trafficLight.display();
  
  for (let vehicle of vehicles) {
    vehicle.action();
  }
}


function mouseClicked() {
  if (trafficLight.isMouseOver(mouseX, mouseY)) {
    trafficLight.toggle();
    return; 
  }
  let dir, xSpeed;
  if (mouseButton === LEFT) {
    dir = 1; 
    xSpeed = random(1, 15); 
  } 
  if (mouseButton === LEFT && keyIsDown(SHIFT)) {
    dir = -1; 
    xSpeed = random(-15, -1); 
  } 
    vehicles.push(new Vehicle(mouseX, mouseY, dir, xSpeed)); 
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
    if (this.xSpeed < 15, dir === 1) {
      if(random() < 0.02){
        this.xSpeed = min(this.xSpeed + random(0.1, 0.5), 15);
      }
    }
    if (this.xSpeed > -15, dir === -1) {
      if(random() < 0.02){
        this.xSpeed = min(this.xSpeed - random(0.1, 0.5), -15);
    }
  }
}

  SpeedDown() {
    if (this.xSpeed > 1, dir === 1) {
      if (random() < 0.02){
        this.xSpeed = max(this.xSpeed - random(0.1, 0.5), 1);
      }
    }
    if(this.xSpeed <-1, dir === -1){
      if(random() < 0.02){
      this.xSpeed = min(this.xSpeed + random(0.1, 0.5), -1)
    }
  }
}

  action() {
    if (!trafficLight.isRed) { 
      this.SpeedDown();
      this.Speedup(); 
      this.move(); 
    }
    this.display(); 
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

class TrafficLight {
  constructor() {
    this.isRed = false;
    this.width = 50;
    this.height = 100;
    this.x = width / 2 - this.width / 2;
    this.y = 10; 
  }

  display() {
    fill(this.isRed ? 'red' : 'green');
    rect(this.x, this.y, this.width, this.height);
  }

  toggle() {
    this.isRed = !this.isRed;
  }

  isMouseOver(mx, my) {
    return mx > this.x && mx < this.x + this.width && my > this.y && my < this.y + this.height;
  }
  update(){

  }
}