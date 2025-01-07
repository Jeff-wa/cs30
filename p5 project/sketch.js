let hook;
let swingLength;
let angle = -Math.PI;
let swingSpeed = 0.02;
let maxLength = 900;
let minLength = 100;

let golds = [];
let stones = [];
let score = 0;  // Score variable to keep track of the score
let gameOver = false;  // Flag to track if the game is over



function setup() {
  createCanvas(1000, 1000);

  hook = new Hook();
  swingLength = minLength;

  for (let i = 0; i < 10; i++) {
    golds.push(new Gold());
  }
  for (let i = 0; i < 6; i++) {
    stones.push(new Stone());
  }
}

function draw() {
  background(255, 255, 0);
  fill(255, 255, 0);
  rect(0, 0, 1000, 200);

  fill(120, 70, 25);
  rect(0, 200, 1000, height - 200);

  fill(0, 0, 110);
  arc(500, 200, 350, 350, PI, 0);

  stroke(0);
  line(0, 200, 1000, 200);
  
  
    hook.update();
    hook.show();

    for (let gold of golds) {
      gold.show();
    }
    for (let stone of stones) {
      stone.show();
    }
    image(img, 475, 150, 50, 50);

    // Display the score in the top-left corner
    fill(0);
    textSize(24);
    text("Score: " + score, 20, 30);
}

class Hook {
  constructor() {
    this.x = width / 2;
    this.y = 200;
    this.originX = this.x;
    this.originY = this.y;
    this.angle = Math.PI / 2;
    this.swingSpeed = 0.01;
    this.swingDirection = 1;
  }

  show() {
    let ropeX = this.x + swingLength * cos(this.angle);
    let ropeY = this.y + swingLength * sin(this.angle);
    line(this.x, this.y, ropeX, ropeY);
    push();
    translate(ropeX, ropeY);
    rotate(this.angle + Math.PI / 2);
    fill(0);
    triangle(0, -15, -5, 0, 5, 0);
    triangle(-7, -15, -7, 0, 0, 0);
    triangle(7, -15, 7, 0, 0, 0);
    arc(0, 0, 10, 10, PI, 0);
    pop();
  }

  update() {
    if (mouseButton === LEFT) {
      swingLength = constrain(swingLength + 4, minLength, maxLength);
      this.swingSpeed = 0;
    } else {
      if (swingLength === maxLength) {
        this.swingSpeed = 0.01;
      }
      if (mouseButton === RIGHT) {
        swingLength = constrain(swingLength - 4, minLength, maxLength);
        this.swingSpeed = 0;
      }
      if (swingLength === minLength) {
        this.swingSpeed = 0.01;
      }
      this.angle += this.swingSpeed * this.swingDirection;
      if (this.angle > Math.PI || this.angle < 0) {
        this.swingDirection *= -1;
      }
    }
    this.checkForObjects();
  }

  checkForObjects() {
    // Calculate the position of the hook based on the current swing length and angle
    let ropeX = this.x + swingLength * cos(this.angle);
    let ropeY = this.y + swingLength * sin(this.angle);

    for (let gold of golds) {
      let distance = dist(ropeX, ropeY, gold.x, gold.y);
      if (distance < 50 && swingLength > minLength) { // If close enough
        gold.followHook(ropeX, ropeY);
      }
    }
    // Check for collision with stone objects
    for (let stone of stones) {
      let distance = dist(ropeX, ropeY, stone.x, stone.y);
      if (distance < 50 && swingLength > minLength) { // If close enough
        stone.followHook(ropeX, ropeY);
      }
    }
    // If hook is at minimum length, check for collision with gold or stone
    if (swingLength === minLength) {
      // Check for collision with gold objects
      for (let i = golds.length - 1; i >= 0; i--) {
        let gold = golds[i];
        let distance = dist(ropeX, ropeY, gold.x, gold.y);
        if (distance < 50) { // If close enough
          golds.splice(i, 1); // Remove the gold from the array
          score += 50;
        }
      }

      // Check for collision with stone objects
      for (let i = stones.length - 1; i >= 0; i--) {
        let stone = stones[i];
        let distance = dist(ropeX, ropeY, stone.x, stone.y);
        if (distance < 50) { // If close enough
          stones.splice(i, 1); // Remove the stone from the array
          score += 10;
        }
      }
       

    }
  }
}

class Gold {
  constructor() {
    this.x = random(0, width);
    this.y = random(400, 900);
    this.size = random(30, 80);
  }

  show() {
    fill(255, 215, 0); 
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }

  followHook(x, y) {
    this.x = x;
    this.y = y;
  }

  resetPosition() {
    this.x = this.originalPosition.x;
    this.y = this.originalPosition.y;
  }
}

class Stone {
  constructor() {
    this.x = random(0, width);
    this.y = random(300, 900);
    this.width = random(30, 60);
    this.height = random(20, 40);
  }

  show() {
    fill(169, 169, 169); 
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }

  followHook(x, y) {
    this.x = x;
    this.y = y;
  }

  resetPosition() {
    this.x = this.originalPosition.x;
    this.y = this.originalPosition.y;
  }
}
