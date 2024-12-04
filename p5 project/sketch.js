let hook;
let swingLength;
let angle = -Math.PI;
let swingSpeed = 0.02;
let maxLength = 400;
let minLength = 200;

function setup() {
  createCanvas(1000, 1000);
  
  hook = new Hook();
  swingLength = minLength; 
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
    this.angle = Math.PI / 2; // Initial angle of the rope
    this.swingSpeed = 0.01;
  }

  show() {
    // Calculate the end position of the rope
    let ropeX = this.x + swingLength * cos(this.angle);
    let ropeY = this.y + swingLength * sin(this.angle);
    
    // Draw the rope with stronger stroke weight
     // Increase the stroke weight for a stronger rope
    stroke(0);
    line(this.x, this.y, ropeX, ropeY);
    
    // Draw the hook (triangle)
    push(); // Save the current drawing state
    
    // Move to the end of the rope (ropeX, ropeY)
    translate(ropeX, ropeY);
    
    // Rotate the hook so that it remains perpendicular to the rope (90 degrees)
    rotate(this.angle + Math.PI / 2); // The hook should be perpendicular to the rope

    // Draw the triangle hook
    fill(0);
    triangle(0, -15, -5, 0, 5, 0);
    triangle(-10,-15,-10,0,0,0)
    triangle(10,-15,10,0,0,0) // Triangle representing the hook
    
    pop(); // Restore the previous drawing state
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
    if (this.angle > Math.PI || this.angle < 0) {
      this.swingSpeed *= -1;
    }
  }
}
