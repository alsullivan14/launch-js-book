function multiply (left, right){
    return left * right;
}


function getNum(prompt) {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(prompt);
  return number;
}

let left = getNum('What is your first number? ');
let right = getNum("What is your second number? ");
console.log(`${left} * ${right} = ${left * right}`);