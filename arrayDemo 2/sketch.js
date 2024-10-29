// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myArray[3,5,7,9]
let shallowCopy

function setup() {
  let lastItem = myArray.pop()
  let secondLast = myArray.pop()
  
  myArray.unshift(lastItem)
  myArray.unshift(secondLast)

  print('My Array-'+myArray)
  shallowCopy = myArray
  deepCopy = structuredClone(myArray)
  myArray()
  deepCopy = structuredClone(myArray)
  print('My Array')
  myArray.shift();
  let n = random(0,3);

  for(let i = 0; i < n; i++){
  myArray.unshift(0);
 }
  print('My Array - '+ myArray);

 for(let i = 0; i<myArray.length; i++){
  if(myArray[i] === 9){
    myArray.splice(i,1)
  }
 }
  print('My Array -' + myArray);
  print('Shallow Array-'+shallowCopy)
  print('Deeo copy Array-'+deepCopy)
}

