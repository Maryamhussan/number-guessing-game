#!/usr/bin/env node

import inquirer from "inquirer"

const randomnumber=Math.floor(Math.random()*6+1);

// console.log(randomnumber);
const answer = await inquirer.prompt([{
name:"userguess",
type:"number",
message:"Please Guess a Number Between 1-6 :"
}]);

if (answer.userguess===randomnumber)
     {
console.log("congratulations! You Guessed The Right Number.")
    }
else{
console.log( "Oops! you Guessed The Wrong Number,Game Over.")
    };