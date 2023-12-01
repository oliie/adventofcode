import input from "./input.js";

const data = input.split("\n");

function puzzleOne() {
  let sum = 0;

  data.forEach((line) => {
    const chars = line.split("");
    const lineNumbers = chars.filter((char) => !isNaN(Number(char)));

    sum += +(lineNumbers[0] + lineNumbers[lineNumbers.length - 1]);
  });

  return sum;
}

console.log(`Sum of all first and last values is ${puzzleOne()}`);
