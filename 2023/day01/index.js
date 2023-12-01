import input from "./input.js";

const numberMatrix = new Map();
numberMatrix.set("one", "1");
numberMatrix.set("two", "2");
numberMatrix.set("three", "3");
numberMatrix.set("four", "4");
numberMatrix.set("five", "5");
numberMatrix.set("six", "6");
numberMatrix.set("seven", "7");
numberMatrix.set("eight", "8");
numberMatrix.set("nine", "9");
numberMatrix.set("1", "1");
numberMatrix.set("2", "2");
numberMatrix.set("3", "3");
numberMatrix.set("4", "4");
numberMatrix.set("5", "5");
numberMatrix.set("6", "6");
numberMatrix.set("7", "7");
numberMatrix.set("8", "8");
numberMatrix.set("9", "9");

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

function puzzleTwo() {
  let sum = 0;

  data.forEach((line) => {
    const indexes = [];

    [...numberMatrix.keys()].forEach((key) => {
      if (line.includes(key)) {
        indexes.push([line.indexOf(key), numberMatrix.get(key)]);
        indexes.push([line.lastIndexOf(key), numberMatrix.get(key)]);
      }
    });

    indexes.sort((a, b) => a[0] - b[0]);

    sum += +(indexes[0][1] + indexes[indexes.length - 1][1]);
  });

  return sum;
}

console.log(`Sum of all first and last values is ${puzzleOne()}`);
console.log(`Sum of all actual first and last values is ${puzzleTwo()}`);
