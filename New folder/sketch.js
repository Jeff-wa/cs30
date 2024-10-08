let start = 0;
let inc = 0.02;
let maxY = -Infinity; // 初始化为最小可能值
let xOffset = 0; // 用于随着时间递增 x 值

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  maxY = -Infinity; // 重置最大 y 值
  let highestPeakX = 0; // 用于存储最高峰的 x 坐标
  let highestPeakY = 0; // 用于存储最高峰的 y 值
  
  // 绘制噪声矩形和寻找最高峰
  for (let x = 0; x < width; x++) {  
    let y = noise(xoff) * height; // 计算噪声 y 值
    xoff += inc;
    
    // 绘制矩形
    fill(0, 0, 0);
    rect(x, height - y, 1, y); // 宽度为1以形成线条
    
    // 更新最高峰
    if (y > maxY) {
      maxY = y;
      highestPeakX = x; // 更新最高峰的 x 坐标
      highestPeakY = y; // 更新最高峰的 y 值
    }
  }
  endShape();
  
  // 绘制当前 y 值的线
  stroke(0);
  let currentY = noise(xOffset) * height; 
  line(0, currentY, width, currentY); 
  
  // 绘制最大 y 值的线
  stroke(255, 0, 0); 
  line(0, maxY, width, maxY); 
  
  // 在最高峰处绘制矩形
  fill(0, 255, 0, 150); // 绿色半透明矩形
  rect(highestPeakX, height - highestPeakY, 10, 10); // 在最高峰处绘制一个小矩形

  // 增加 xOffset 用于下次计算
  xOffset += 0.01; 
  // 增加 start 用于下次计算
  start += inc;
}