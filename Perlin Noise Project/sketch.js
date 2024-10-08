// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond
let start =0;
let inc = 0.02;
let i = -Infinity; // 初始化为最小可能值
let xOffset = 0; // 用于随着时间递增 x 值
function setup() {
       createCanvas(windowWidth, windowHeight);
}

function draw() {
      background(220);
      stroke(255)
      noFill()
      beginShape()
      let xoff=start
      for (let x = 0; x < width; x++) {  
        stroke(255)
        let y = noise(xoff)*height
        xoff+=inc 
        fill(0,0,0);
        rect(x,height-y,xoff,y,0,0,0,0)
       
} endShape()
start += inc;
}


//for (let i = 0; i < width; i++)
  if (y > i) {
    i = y;
  }
  stroke(0);
  line(0, y, width, y); 
  stroke(255, 0, 0); 
  line(0, i, width, i); 
  xoff += 0.01; 
  

//function drawFlag(){
  //let xOffset = 0; // 噪声的起始偏移
 // let step = 0.01; // 噪声采样的步长
 // for (let i = 0; i < width; i++) {
 //   let i = noise(xOffset) * height; // 获取噪声值并进行缩放
 //   if (i > highestPeak) {
  //    highestPeak = i; // 如果当前 y 值更高，则更新最高峰
 //   }
 //   xOffset += step; // 增加偏移量
  //}

 //rect(x,highestPeak,50,50,0,0,0,0)

 //let highestPeak = 0;
 //let currentFramePeak = 0 // 用于跟踪最高峰的变量
 //function drawFlag() {
  // stroke(255);
   //noFill();
  // let xOffset = start; // 初始化本帧的 xoff
  // beginShape();
  // for (let x = 0; x < width; x++) {  
  //   stroke(255);
  //   let y = noise(xOffset) * height; // 获取噪声值
  //   xOffset += inc; // 增加 xoff 以获function drawFlag() {
  // 使用噪声计算 y 值
 
 //    if (y > currentFramePeak) {
  //     currentFramePeak = y;
  //   }
  //   fill(0,255,0);
  ///   rect(x, height - y, 10, y, 0, 0, 0, 0);
 //  }
 //  endShape();
// }
 



