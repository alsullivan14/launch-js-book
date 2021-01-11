let rlSync = require("readline-sync");
let name = rlSync.question("What's your name?\n");
console.log(`Good morning ${name}`);

let number1 = Number(rlSync.question("Please pick a number: "));
let number2 = Number(rlSync.question("Please pick another number: "));

let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);


let greetingMessage = "Good Morning";
function greetPeople () {
    console.log(greetingMessage);
}

greetPeople();


let thisArray = [1, 2, "six", null]
thisArray.push("Jasmine")
console.log(thisArray);