let rlSync = require("readline-sync");
let age = Number(rlSync.question("What is your age? "));

function futureAge (age) {
    console.log(`You are ${age} years old`);
    for (let i = 10; i <= 30; i += 10) { 
    console.log(`In ${i} years you will be ${age + i} years old`);
    }
}

futureAge(age);