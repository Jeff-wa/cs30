let hook;          // To hold the hook object
let swingLength;   // Length of the rope
let angle = -Math.PI / 2; // Starting angle of the rope (horizontal left)
let swingSpeed = 0.02;   // Speed of the swinging
let maxLength = 400; // Max length the rope can stretch
let minLength = 200; // Minimum length of the rope (resting position)

function setup() {
  createCanvas(1000, 1000);
  
  hook = new Hook();
  swingLength = maxLength; // Start at maximum length (horizontal left)
}

function draw() {
  background(255, 255, 0); 
  
  // Draw the background (sky and ground)
  fill(255, 255, 0); 
  rect(0, 0, 1000, 200); 
  
  fill(120, 70, 25); 
  rect(0, 200, 1000, height - 200); 
  
  fill(0, 0, 50); 
  arc(500, 200, 350, 350, PI, 0); // Arc representing a circular path
  
  stroke(0);
  line(0, 200, 1000, 200); // Ground line
  
  hook.update();
  hook.show();
}

class Hook {
  constructor() {
    this.x = width / 2; // Starting position of the rope (center)
    this.y = 200; // Position where the rope is attached (top of the circle)
    this.originX = this.x; // Store the original X position
    this.originY = this.y; // Store the original Y position
    this.angle = -Math.PI / 2; // Starting angle of the rope (horizontal left)
    this.swingSpeed = 0.02; // Swing speed
  }

  show() {
    // Draw the rope (line)
    stroke(0);
    line(this.originX, this.originY, this.originX + swingLength * cos(this.angle), this.originY);
    
    // Draw the hook (the end of the rope)
    fill(0);
    ellipse(this.originX + swingLength * cos(this.angle), this.originY, 20, 20); // Hook
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
    
    // Ensure the swing moves from left (angle = -PI/2) to right (angle = PI/2)
    if (this.angle > Math.PI / 2 || this.angle < -Math.PI / 2) {
      this.swingSpeed *= -1;
    }
  }
}
