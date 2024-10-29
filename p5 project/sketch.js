/*
 * Puzzle Game
 * Author: [Your Name]
 * Description: A simple puzzle game where clicking toggles squares. 
 * Features include randomized starting arrangement, win condition,
 * shift-click functionality, and the ability to toggle between cross and square flipping.
 */

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 255, 0, 0, 0],
                 [255, 255, 255, 0, 0]];

let isCrossPattern = true; // Initialize pattern type

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomizeBoard(); // Randomize the starting board
}

function draw() {
  background(220);
  determineActiveSquare();   // Determine which tile the mouse cursor is over            // Draw the overlay indicating affected squares
  drawGrid();                // Render the current game board to the screen
  checkWinCondition();       // Check for win condition
}

function mousePressed() {
  if (keyIsDown(SHIFT)) { // Check for shift key press
    flip(currentCol, currentRow); // Flip only the square under the mouse
  } else {
    // Flip based on current pattern type
    flip(currentCol, currentRow); // Flip center square
    if (isCrossPattern) {
      // Cross-shaped pattern flips
      flip(currentCol - 1, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow - 1);
      flip(currentCol, currentRow + 1);
    } else {
      // Square pattern flips
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          flip(currentCol + j, currentRow + i);
        }
      }
    }
  }
}

function flip(col, row) {
  // Flip the value from 0 to 255 or 255 to 0 if within bounds
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    gridData[row][col] = gridData[row][col] === 0 ? 255 : 0;
  }
}

function determineActiveSquare() {
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}


function drawGrid() {
  // Render a grid of squares based on the 2D array
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function checkWinCondition() {
  // Check if all elements are the same
  let firstValue = gridData[0][0];
  for (let row of gridData) {
    for (let cell of row) {
      if (cell !== firstValue) {
        return; // Not all the same
      }
    }
  }
  displayWinMessage(); // Display win message
}

function displayWinMessage() {
  fill(0);
  textSize(32);
  textAlign(CENTER);
  text("You Win!", width / 2, height / 2);
}

function randomizeBoard() {
  // Randomly assign 0 or 255 to each cell in the board
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      gridData[y][x] = random([0, 255]);
    }
  }
}

function keyPressed() {
  if (key === ' ') { // Toggle between cross and square patterns
    isCrossPattern = !isCrossPattern;
  }
}
