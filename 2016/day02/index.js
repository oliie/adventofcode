// https://adventofcode.com/2016/day/2
import input from "./input.js";

const instructions = input.split("\n");

const keypad1 = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

function puzzleOne() {
  // Starts from 5
  const xy = [1, 1];
  const code = [];

  for (const instruction of instructions) {
    instruction.split("").forEach((direction) => {
      if (direction === "U") xy[1] !== 0 && xy[1]--;
      if (direction === "R") xy[0] !== 2 && xy[0]++;
      if (direction === "D") xy[1] !== 2 && xy[1]++;
      if (direction === "L") xy[0] !== 0 && xy[0]--;
    });

    code.push(keypad1[xy[1]][xy[0]]);
  }

  return code.join("");
}

const keypad2 = [
  [null, null, "1", null, null],
  [null, "2", "3", "4", null],
  ["5", "6", "7", "8", "9"],
  [null, "A", "B", "C", null],
  [null, null, "D", null, null],
];

function puzzleTwo() {
  // Starts from 5
  const xy = [0, 2];
  const code = [];

  const canMove = (pos) => keypad2[pos[1]]?.[pos[0]] != null;

  for (const instruction of instructions) {
    instruction.split("").forEach((direction) => {
      if (direction === "U") {
        const nextStep = [xy[0], xy[1] - 1];
        if (canMove(nextStep)) xy[1] = nextStep[1];
      }
      if (direction === "D") {
        const nextStep = [xy[0], xy[1] + 1];
        if (canMove(nextStep)) xy[1] = nextStep[1];
      }
      if (direction === "L") {
        const nextStep = [xy[0] - 1, xy[1]];
        if (canMove(nextStep)) xy[0] = nextStep[0];
      }
      if (direction === "R") {
        const nextStep = [xy[0] + 1, xy[1]];
        if (canMove(nextStep)) xy[0] = nextStep[0];
      }
    });

    code.push(keypad2[xy[1]][xy[0]]);
  }

  return code.join("");
}

console.log("Code for first keypad is: ", puzzleOne());
console.log("Code for second keypad is: ", puzzleTwo());
