import generateLoveScore, { getLoveMessage } from "./utils.js";
import chalk from "chalk";

const person1 = "Samrat";
const person2 = "X";
const score = generateLoveScore();
const message = getLoveMessage(score);

console.log(chalk.magenta(`${person1} ❤️  ${person2}`));
console.log(chalk.cyan(`Love Score: ${score}%`));
console.log(chalk.green(message));
