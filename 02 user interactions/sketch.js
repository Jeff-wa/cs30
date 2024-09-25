// snowman party
// jeff wang
// 2024/9/24
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,50,120);
  if(keyIsPressed === true){//press the keyboard can change the background to random colour. like sparkling lights
  background(random(0,255),random(0,255),random(0,255))}

  fill(220)//snowman npc1
  circle(1200,505,100)
  circle(1200,630,150)
  fill(0)
  circle(1200-16,500,14)
  circle(1200+16,500,14)
  fill(255,0,0)
  triangle(1200-50,630-155,1200,630-185,1200+50,630-155)

  fill(220)//snowman npc2
  circle(1400,505,100)
  circle(1400,630,150)
  fill(0)
  circle(1400-16,500,14)
  circle(1400+16,500,14)
  fill(255,0,0)
  triangle(1400-50,630-155,1400,630-185,1400+50,630-155)

  fill(220)//snowman npc3
  circle(1600,505,100)
  circle(1600,630,150)
  fill(0)
  circle(1600-16,500,14)
  circle(1600+16,500,14)
  fill(255,0,0)
  triangle(1600-50,630-155,1600,630-185,1600+50,630-155)


  fill(110);//mountains
  triangle(0,700,1000,700,500,300);

  fill(160);
  triangle(150,700,500,700,350,130);

  fill(140)
  triangle(0,700,300,700,200,300)

  fill(90,150,0)//ground
  rect(0,700,2000,700,0,0,0,0)

  fill(180,180,0)//sun
  circle(0,0,300)

  fill(220)//the character
  circle(mouseX,mouseY-105,100)
  circle(mouseX,mouseY,150)
  fill(0)
  circle(mouseX-16,mouseY-119,14)
  circle(mouseX+16,mouseY-119,14)
  fill(255,0,0)
  triangle(mouseX-50,mouseY-155,mouseX,mouseY-185,mouseX+50,mouseY-155)

  textSize(50)//my name
  fill(0)
  text('Jeff Wang',50,900)
  
 if(mouseIsPressed === true){//if you press the mouse, the character and npc will smile
  arc(mouseX, mouseY-100, 25, 25, 100, 10, PI + QUARTER_PI, CHORD);   
  arc(1200, 530, 25, 25, 100, 10, PI + QUARTER_PI, CHORD)
  arc(1400, 530, 25, 25, 100, 10, PI + QUARTER_PI, CHORD)
  arc(1600, 530, 25, 25, 100, 10, PI + QUARTER_PI, CHORD)
  rect(mouseX-120,mouseY-30,70,10,30,30,0,0)
  rect(mouseX+50,mouseY-30,70,10,30,30,0,0)
 }

  else{fill(255,0,0)//else they have a cold expression
  fill(0)
  rect(1200-25,630-100,50,5,30,30,0,0)
  rect(1400-25,630-100,50,5,30,30,0,0)
  rect(1600-25,630-100,50,5,30,30,0,0)
  rect(mouseX-120,mouseY-30,70,10,30,30,0,0)
  rect(mouseX+50,mouseY-30,70,10,30,30,0,0)
  rect(mouseX-25,mouseY-100,50,5,30,30,0,0)

  
}  
}
