// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let names = ['John','Jane','Stefan']
function setup() {
  createCanvas(windowWidth, windowHeight);
  names.push('Liam');
  console.log(names);

  let nameLast = names.pop
  console.log(names);
  console.log(nameLast);

  let nameFirst = names.shift();
  console.log(names);
  console.log(nameFirst);

  names.push('mitsaal');
  names.push('bob');
  names.push('sampersand');
  names.push('mitsaal2');

  for(n of names){
    console.log(n);
  }

  console.log(random(names));
}

function draw() {
  background(220);
}
