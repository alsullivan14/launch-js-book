let rlSync = require("readline-sync");
let age = Number(rlSync.question("What is your age?"));
function futureAge (age) {
    console.log(`You are ${age} years old`);
    console.log(`In 10 years you will be ${age + 10} years old`);
    console.log(`In 20 years you will be ${age + 20} years old`);
    console.log(`In 30 years you will be ${age + 30} years old`);
}

futureAge(age);