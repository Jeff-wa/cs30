// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tiles = []
let level = [
  [0,1,0,0,0],
  [0,0,1,1,0],
  [1,1,0,0,0],
  [0,0,0,0,1],
  [0,1,0,1,1]
]

const COLUMMS = 5, ROWS = 5, TILE_SIZE = 100;
let playerX = 3, playerY = 4;

function preload(){
  for(let i = 0; i < 3; i++){
    tiles.push(loadImage("assets/"+i+".png"))
  }
}
function setup() {
  createCanvas(COLUMMS*TILE_SIZE,ROWS*TILE_SIZE);
  level[playerY][playerX] = 2
}

function draw() {
  renderBoard()  
}

function swap(x1,y1,x2,y2){
  let temp = level[y1][x1]
  level[y1][x1]=level[y2][x2]
  level[y2][x2]= temp
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    swap(playerX, playerY, playerX, playerY - 1)
    playerY--;
  }
  if(keyCode === DOWN_ARROW){
    swap(playerX, playerY, playerX, playerY + 1)
    playerY++;
  }
  if(keyCode === LEFT_ARROW){
    if(level[playerY][playerX-1]===0){
    swap(playerX, playerY, playerX - 1, playerY)
    playerY--;
  }else if(level[playerY][playerX-1]===1){
    if(playerX > 1 &&level[playerY][playerX-2] === 0){
      swap(playerX-1,playerY,playerX-2,playerY)
      swap(playerX-1,playerY,playerX,playerY)
      playerX--;
  }
}
  }
  if(keyCode === UP_ARROW){
    swap(playerX, playerY, playerX + 1, playerY)
    playerY--;
  }
}

function renderBoard(){
  for(let col = 0;col < COLUMMS;col++){
    for(let row = 0;row<ROWS;row++){
      let pos = level[row][col];
      let currentImage = tiles[pos]
      image(currentImage,col*TILE_SIZE,row*TILE_SIZE)
    }
  }
}