let NUM_ROWS = 4; // 4 squares vertically
let NUM_COLS = 5; // 5 squares horizontally
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 255, 0, 0, 0],
                 [255, 255, 255, 0, 0]];

let isCrossPattern = true; // Initialize pattern type

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS; // Width of each square
  rectHeight = height / NUM_ROWS; // Height of each square
  randomizeBoard(); // Randomize the starting board
}

function draw() {
  background(220);
  determineActiveSquare(); // Determine which tile the mouse cursor is over
  drawPreview(); // Draw the overlay indicating affected squares
  drawGrid(); // Render the current game board to the screen
  Win(); // Check win condition
}

function mousePressed() {
  if (keyIsDown(SHIFT)) { // Check for shift key press
    flip(currentCol, currentRow); // Flip only the square under the mouse
  } else { // Flip based on current pattern type
    flip(currentCol, currentRow); // Flip center square
    if (isCrossPattern) { // Cross-shaped pattern flips
      flip(currentCol - 1, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow - 1);
      flip(currentCol, currentRow + 1);
    } else { // Square pattern flips
      flip(currentCol - 1, currentRow);
      flip(currentCol, currentRow - 1);
      flip(currentCol - 1, currentRow - 1);
    }
  }
}

function flip(col, row) { // Flip the value from 0 to 255 or 255 to 0
  if (col >= 0 && col < NUM_COLS) {
    if (row >= 0 && row < NUM_ROWS) {
      gridData[row][col] = gridData[row][col] === 0 ? 255 : 0;
    }
  }
}

function determineActiveSquare() { // Determine where the mouse currently is
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid() { // Render the grid of squares
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function drawPreview() { // Draw overlay for the impacted squares
  fill(0, 255, 0, 150); // Semi-transparent green
  noStroke(); // No border for the overlay
  
  if (isCrossPattern) {
    // Draw rectangles for cross-shaped pattern
    rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); // Center square
    if (currentCol > 0) {
      rect((currentCol - 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); // Left
    }
    if (currentCol < NUM_COLS - 1) {
      rect((currentCol + 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); // Right
    }
    if (currentRow > 0) {
      rect(currentCol * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight); // Above
    }
    if (currentRow < NUM_ROWS - 1) {
      rect(currentCol * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight); // Below
    }
  } else {
    // Draw rectangles for square-shaped pattern
    if (currentCol > 0 && currentRow > 0) {
      rect((currentCol - 1) * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight); // Top-left
    }
    if (currentRow > 0) {
      rect(currentCol * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight); // Top-center
    }
    if (currentCol > 0) {
      rect((currentCol - 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); // Center-left
    }
  }
}

function Win() {
  let firstValue = gridData[0][0];
  for (let row of gridData) { // Check if all rows are the same color
    for (let cell of row) {
      if (cell !== firstValue) {
        return;
      }
    }
  }
  displayWin();
}

function displayWin() {
  fill(255, 0, 0);
  textSize(32);
  textAlign(CENTER);
  text("You Win!", width / 2, height / 2); // Show win text in the middle
}

function randomizeBoard() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      gridData[y][x] = random([0, 255]); // Randomize each square at the beginning
    }
  }
}

function keyPressed() { // Change cross-shape or square shape
  if (key === ' ') {
    isCrossPattern = !isCrossPattern;
  }
}

