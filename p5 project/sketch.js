let NUM_ROWS = 4; // 4 squares in vertical
let NUM_COLS = 5; // 5 squares in horizontal
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 255, 0, 0, 0],
                 [255, 255, 255, 0, 0]];

let isCrossPattern = true; // Initialize pattern type

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS; // Average each square
  rectHeight = height / NUM_ROWS;
  randomizeBoard(); // Randomize the starting board
}

function draw() {
  background(220);
  determineActiveSquare();
  drawGrid(); // Render the current game board to the screen
  overLay(); // Draw the overlay indicating affected squares
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

function flip(col, row) { // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
  }

function determineActiveSquare() { // Determine where the mouse currently is
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid() { // Render a grid of squares
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function Win() {
  let firstValue = gridData[0][0];
  for (let row of gridData) { // Check all rows are the same color
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
  text("You Win!", width / 2, height / 2); // Show the win text in the middle
}

function randomizeBoard() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      gridData[y][x] = random([0, 255]); // Random square every time at beginning
    }
  }
}

function keyPressed() { // Change cross-shape or square shape
  if (key === ' ') { 
    isCrossPattern = !isCrossPattern;
  }
}

function overLay() {
  fill(0, 255, 0, 100); // Semi-transparent green for the overlay

  if (isCrossPattern) {
    rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    // Cross pattern overlay
    if (currentRow > 0) {
      rect(currentCol * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight); // Above
    }
    if (currentCol > 0) {
      rect((currentCol - 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); // Left
    }
    if (currentCol < NUM_COLS - 1) {
      rect((currentCol + 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); // Right
    }
    if (currentRow < NUM_ROWS - 1) {
      rect(currentCol * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight); // Below
    }
  } else {
    // New pattern overlay
    rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); // Center square
    if (currentRow > 0) {
      rect(currentCol * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight); // Above
    }
    if (currentCol > 0) {
      rect((currentCol - 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); // Left
    }
    if (currentCol > 0 && currentRow > 0) {
      rect((currentCol - 1) * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight); // Left above
    }
  }
}


