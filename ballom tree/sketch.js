// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Project Title: Dynamic Tree Branching
// Your Name
// Date

let scale = 15;

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  background(255); // Clear canvas every frame
  drawTree(width / 2, height * 0.9, 90, 6); // Draw tree at the center bottom of the canvas
}

function drawLine(x1, y1, x2, y2, depth) {
  stroke(0);
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    // Adjust the angle range based on mouseX position
    let spread = map(mouseX, 0, width, 5, 45); // Map mouseX to angle spread between 5 and 45 degrees
    let x2 = x1 + cos(radians(angle)) * depth * scale;  // Calculate endpoint of the current branch
    let y2 = y1 - sin(radians(angle)) * depth * scale;  // Get shorter based on depth

    drawLine(x1, y1, x2, y2, depth);
    
    // Draw a small circle at the end of the branch with a random color
    noStroke();
    let circleColor = color(random(255), random(255), random(255)); 
    fill(circleColor);
    ellipse(x2, y2, 12, 12);  // Draw circle at the branch's end

    // Recursively draw the three branches with increasing angles based on the mouse position
    drawTree(x2, y2, angle - spread, depth - 1);  // Left branch
    drawTree(x2, y2, angle, depth - 1);           // Center branch
    drawTree(x2, y2, angle + spread, depth - 1);  // Right branch
  }
}
