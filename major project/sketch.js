let hook;          
let swingLength;   
let angle = -Math.PI ; 
let swingSpeed = 0.02;   
let maxLength = 900; 
let minLength = 200; 
let minerImage; 
let golds = [];  
let stones = [];
let img;

function preload() {
  img = loadImage('M:\cs30\Github Repo\cs30\major project\Screenshot 2024-12-02 115726.png');
}

function setup() {
  createCanvas(1000, 1000);

  image(img, 0, 0)
  
  hook = new Hook();
  swingLength = minLength; 

  for (let i = 0; i < 10; i++) {
    golds.push(new Gold());
    
  }
  for(let i = 0; i < 6; i++){
    stones.push(new Stone());
  }
}

function draw() {
  background(255, 255, 0); 
  fill(255, 255, 0); 
  rect(0, 0, 1000, 200); 
  
  fill(120, 70, 25); 
  rect(0, 200, 1000, height - 200); 
  
  fill(0, 0, 50); 
  arc(500, 200, 350, 350, PI, 0); 
  
  stroke(0);
  line(0, 200, 1000, 200); 
  hook.update();
  hook.show();

  for (let gold of golds) {
    gold.show();
  }
  for (let stone of stones) {
    stone.show();
  }
}

class Hook {
  constructor() {
    this.x = width/2; 
    this.y = 200; 
    this.originX = this.x; 
    this.originY = this.y; 
    this.angle = Math.PI/2; 
    this.swingSpeed = 0.01; 
    this.swingDirection = 1;
  }

  show() {
    // Calculate the end position of the rope
    let ropeX = this.x + swingLength * cos(this.angle);
    let ropeY = this.y + swingLength * sin(this.angle);
    line(this.x, this.y, ropeX, ropeY);
    push(); 
    translate(ropeX, ropeY);
    rotate(this.angle + Math.PI / 2); 
    fill(0);
    triangle(0, -15, -5, 0, 5, 0);
    triangle(-7,-15,-7,0,0,0)
    triangle(7,-15,7,0,0,0) // Triangle representing the hook
    arc(0, 0, 10, 10, PI, 0); 
    pop(); // Restore the previous drawing state
  }
    
    
  update() {
    if (mouseButton === LEFT) {
      swingLength = constrain(swingLength + 4, minLength, maxLength);
      this.swingSpeed = 0;  
    }else{
      if (swingLength === maxLength) {
        this.swingSpeed = 0.01;
      }
      if(mouseButton === RIGHT){
        swingLength = constrain(swingLength - 4, minLength, maxLength);
        this.swingSpeed = 0;
      }
      if(swingLength === minLength){
        this.swingSpeed = 0.01;
      }
      this.angle += this.swingSpeed * this.swingDirection;
      if (this.angle > Math.PI || this.angle < 0) {
        this.swingDirection *= -1;
} 
}
}
}
class Gold {
  constructor() {
    this.x = random(0, width); // Random x position
    this.y = random(400, 900); // Random y position in the brown area
    this.size = random(30,  80); // Random size
  }

  show() {
    fill(255, 215, 0); // Gold color
    noStroke();
    ellipse(this.x, this.y, this.size, this.size); // Draw gold as a circle
  }
}

class Stone {
  constructor() {
    this.x = random(0, width); // Random x position
    this.y = random(300, 900); // Random y position in the brown area
    this.width = random(30, 60); // Random width for stone
    this.height = random(20, 40); // Random height for stone
  }

  show() {
    fill(169, 169, 169); // Stone color (gray)
    noStroke();
    rect(this.x, this.y, this.width, this.height); // Draw stone as a rectangle
  }
}