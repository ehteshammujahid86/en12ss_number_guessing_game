#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "guessNumber",
        type: "number",
        message: "Please select a number between 1 ~ 5\n",
    },
]);
function guessingNum(Num) {
    if (randomNumber === answer.guessNumber) {
        console.log("You Won");
        return;
    }
    else {
        console.log("Please Guess Again");
    }
}
guessingNum(answer.prompt);
