// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 255, 0, 0, 0],
                 [255, 255, 255, 0, 0]];

let isCrossPattern = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomizeBoard(); 
}

function draw() {
  background(220);
  determineActiveSquare();   
  drawGrid();                
  Win();      
}

function mousePressed() {
  if (keyIsDown(SHIFT)) { 
    flip(currentCol, currentRow); 
  } else {
    flip(currentCol, currentRow);
    if (isCrossPattern) {
      flip(currentCol - 1, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow - 1);
      flip(currentCol, currentRow + 1);
    } else {
      flip(currentCol -1, currentRow  );
      flip(currentCol , currentRow -1 );
      flip(currentCol -1, currentRow -1 );
        }
      }
    }

function flip(col, row) {
if (col >= 0 && col < NUM_COLS ){
  if (row >= 0 && row < NUM_ROWS){
    if (gridData[row][col] === 0) gridData[row][col] = 255;
    else gridData[row][col] = 0;
  }
}
}

function determineActiveSquare() {
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}


function drawGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function Win() {
  let firstValue = gridData[0][0];
  for (let row of gridData) {
    for (let cell of row) {
      if (cell !== firstValue) {
        return; 
      }
    }
  }
  displayWin(); 
}

function displayWin() {
  fill(255,0,0);
  textSize(32);
  textAlign(CENTER);
  text("You Win!", width / 2, height / 2);
}

function randomizeBoard() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      gridData[y][x] = random([0, 255]);
    }
  }
}

function keyPressed() {
  if (key === ' ') { 
    isCrossPattern = !isCrossPattern;
  }
}

