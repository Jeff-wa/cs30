let hook;          
let swingLength;   
let angle = -Math.PI; 
let swingSpeed = 0.02;   
let maxLength = 800; 
let minLength = 200; 
let minerImage;
let golds = [];  
let stones = [];

function setup() {
  createCanvas(1000, 1000);
  
  hook = new Hook();
  swingLength = minLength; 

  for (let i = 0; i < 10; i++) {
    golds.push(new Gold());
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


}

class Hook {
  constructor() {
    this.x = width / 2; 
    this.y = 200; 
    this.originX = this.x; 
    this.originY = this.y; 
    this.angle = Math.PI / 2; 
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
    triangle(-7, -15, -7, 0, 0, 0);
    triangle(7, -15, 7, 0, 0, 0); // Triangle representing the hook
    arc(0, 0, 10, 10, PI, 0); 
    pop(); // Restore the previous drawing state
  }

  update() {
    // If the mouse is clicked, elongate the rope
    // Swinging logic (oscillate back and forth)
    this.angle += this.swingSpeed;
    
    // Reverse direction when reaching the limit of the swing
    if (this.angle > Math.PI  || this.angle < 0 ) {
      this.swingSpeed *= -1;
    }

    if (mouseIsPressed && mouseButton === LEFT) {
      this.swingSpeed = 0
      swingLength = constrain(swingLength + 2, minLength, maxLength);
    } else {
      // Otherwise, return to the minimum length
      swingLength = constrain(swingLength - 2, minLength, maxLength);
      this.swingSpeed = 0.01
    }
    
  }
}

class Gold {
  constructor() {
    this.x = random(0, width); // Random x position
    this.y = random(200, height); // Random y position in the brown area
    this.size = random(10, 30); // Random size
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
    this.y = random(200, height); // Random y position in the brown area
    this.width = random(30, 60); // Random width for stone
    this.height = random(20, 40); // Random height for stone
  }

  show() {
    fill(169, 169, 169); // Stone color (gray)
    noStroke();
    rect(this.x, this.y, this.width, this.height); // Draw stone as a rectangle
  }
}