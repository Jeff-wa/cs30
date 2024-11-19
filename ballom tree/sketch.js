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
let leafDepth = 5; // Start with a leaf threshold of depth 5

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  background(255); // Clear canvas every frame
  randomSeed(100); // Ensure that random values are consistent across frames
  drawTree(width / 2, height * 0.9, 90, 6); // Draw tree at the center bottom of the canvas
}

function keyPressed() {
  if (key === 'z' || key === 'Z') {
    leafDepth = max(1, leafDepth - 1); // Decrease leaf depth, but don't go below 1
  } else if (key === 'x' || key === 'X') {
    leafDepth = min(6, leafDepth + 1); // Increase leaf depth, but don't go above 6
  }
}

function drawLine(x1, y1, x2, y2, depth) {
  stroke(0);
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let spread = map(mouseX, 0, width, 5, 15); // Map mouseX to angle spread between 5 and 15 degrees
    let x2 = x1 + cos(radians(angle)) * depth * scale;
    let y2 = y1 - sin(radians(angle)) * depth * scale;

    drawLine(x1, y1, x2, y2, depth);

    // Draw leaves if depth is less than or equal to leafDepth
    if (depth <= leafDepth) {
      noStroke();
      let leafSize = map(depth, 1, leafDepth, 10, 30); // Smaller leaf size at higher depths
      let circleColor = color(random(255), random(255), random(255)); // Random color for leaves
      fill(circleColor);
      ellipse(x2, y2, leafSize, random(leafSize * 0.5, leafSize)); // Randomize leaf shape
    }

    // Recursively draw branches
    let newDepth = depth - 1;
    drawTree(x2, y2, angle - spread, newDepth);  // Left branch
    drawTree(x2, y2, angle, newDepth);           // Center branch
    drawTree(x2, y2, angle + spread, newDepth);  // Right branch
  }
}
