import inquirer from "inquirer";
import chalk from "chalk";
// step 01
const answers = {
    num1: Number,
    num2: Number,
    operation: String,
} = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your first number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your second number",
    },
    {
        type: "list",
        name: "operator",
        message: "Enter your operation",
        choices: ["+", "-", "*", "/",]
    }
]);
// step 02
const { num1, num2, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        console.log("Invalid operator");
}
console.log(chalk.red(`${num1}  ${num2} ${operator} = ${result}`));
