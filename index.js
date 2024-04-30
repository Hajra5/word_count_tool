#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your Sentence to Count the Words : "
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence words count is ${words.length}`);
