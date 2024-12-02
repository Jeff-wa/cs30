// Game variables
let player;
let obstacles = [];
let powerUps = [];
let score = 0;
let level = 1;
let gameSpeed = 1;
let gameOver = false;

function setup() {
  createCanvas(400, 600);
  player = new Player();
  frameRate(60);
}

function draw() {
  background(220);

  if (gameOver) {
    displayGameOver();
    return;
  }

  // Update and display player
  player.update();
  player.display();

  // Handle obstacles
  if (frameCount % (60 / gameSpeed) === 0) {
    obstacles.push(new Obstacle());
    if (random() < 0.2) {
      powerUps.push(new PowerUp());
    }
  }

  // Update and display obstacles
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].update();
    obstacles[i].display();

    // Check for collision with player
    if (obstacles[i].hits(player)) {
      gameOver = true;
    }

    // Remove obstacles that are offscreen
    if (obstacles[i].offscreen()) {
      obstacles.splice(i, 1);
      score++;
      if (score % 10 === 0) {
        levelUp();
      }
    }
  }

  // Update and display power-ups
  for (let i = powerUps.length - 1; i >= 0; i--) {
    powerUps[i].update();
    powerUps[i].display();

    // Check if player collects a power-up
    if (powerUps[i].hits(player)) {
      powerUps.splice(i, 1);
      score += 5; // Power-up gives extra points
    }

    // Remove power-ups that are offscreen
    if (powerUps[i].offscreen()) {
      powerUps.splice(i, 1);
    }
  }

  // Display score and level
  displayScore();
}

// Display score and level at the top left
function displayScore() {
  fill(0);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
  text("Level: " + level, 10, 30);
}

// Display Game Over screen
function displayGameOver() {
  fill(0);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("GAME OVER", width / 2, height / 2 - 50);
  textSize(24);
  text("Final Score: " + score, width / 2, height / 2 + 10);
  textSize(18);
  text("Press R to Restart", width / 2, height / 2 + 50);
}

// Handle player movement
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.move(-1);
  } else if (keyCode === RIGHT_ARROW) {
    player.move(1);
  }

  if (key === 'r' || key === 'R') {
    restartGame();
  }
}

function keyReleased() {
  player.move(0);
}

// Player class
class Player {
  constructor() {
    this.x = width / 2;
    this.y = height - 40;
    this.width = 40;
    this.height = 40;
    this.xSpeed = 0;
  }

  update() {
    this.x += this.xSpeed * 5;
    this.x = constrain(this.x, 0, width - this.width); // Prevent going off-screen
  }

  move(dir) {
    this.xSpeed = dir;
  }

  display() {
    fill(0, 255, 0);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }
}

// Obstacle class
class Obstacle {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.size = random(20, 50);
    this.speed = random(2, 5) * gameSpeed;
  }

  update() {
    this.y += this.speed;
  }

  display() {
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  offscreen() {
    return this.y > height;
  }

  hits(player) {
    let d = dist(this.x, this.y, player.x + player.width / 2, player.y + player.height / 2);
    return d < this.size / 2 + player.width / 2;
  }
}

// Power-up class
class PowerUp {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.size = 20;
    this.speed = 3;
  }

  update() {
    this.y += this.speed;
  }

  display() {
    fill(0, 0, 255);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  offscreen() {
    return this.y > height;
  }

  hits(player) {
    let d = dist(this.x, this.y, player.x + player.width / 2, player.y + player.height / 2);
    return d < this.size / 2 + player.width / 2;
  }
}

// Level up function
function levelUp() {
  level++;
  gameSpeed += 0.5; // Increase the speed of obstacles
}
  
// Restart the game
function restartGame() {
  player = new Player();
  obstacles = [];
  powerUps = [];
  score = 0;
  level = 1;
  gameSpeed = 1;
  gameOver = false;
}
