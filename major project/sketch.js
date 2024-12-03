let hook;          // To hold the hook object
let swingLength;   // Length of the rope
let angle = -Math.PI ; // Starting angle of the rope (45 degrees)
let swingSpeed = 0.02;   // Speed of the swinging
let maxLength = 400; // Max length the rope can stretch
let minLength = 200; // Minimum length of the rope (resting position)
let minerImage;     // Placeholder for miner image


function setup() {
  createCanvas(1000, 1000);
  
  hook = new Hook();
  swingLength = minLength; // Start at minimum length
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
    this.x = width/2; // Starting position of the rope (center)
    this.y = 200; // Position where the rope is attached (the top of the circle)
    this.originX = this.x; // Store the original X position
    this.originY = this.y; // Store the original Y position
    this.angle = -Math.PI / 2; // Starting angle of the rope
    this.swingSpeed = 0.02; // Swing speed
  }

  show() {
    // Draw the rope (line)
    stroke(0);
    line(this.x, this.y, this.x + swingLength * cos(this.angle), this.y + swingLength * sin(this.angle));
    
    // Draw the hook (the end of the rope)
    fill(0);
    ellipse(this.x + swingLength * cos(this.angle), this.y + swingLength * sin(this.angle), 20, 20); // Hook
  }

  update() {
    // If the mouse is clicked, elongate the rope
    if (mouseIsPressed && mouseButton === LEFT) {
      swingLength = constrain(swingLength + 2, minLength, maxLength);
    } else {
      // Otherwise, return to the minimum length
      swingLength = constrain(swingLength - 2, minLength, maxLength);
    }

    // Swinging logic (oscillate back and forth)
    this.angle += this.swingSpeed;
    
    // Reverse direction when reaching the limit of the swing
    if (this.angle > Math.PI  || this.angle < -Math.PI ) {
      this.swingSpeed *= -1;
    }
  }
}
