import input from "./input.js";

function puzzleOne() {
  const floors = input.split("");
  let currentlevel = 0;

  floors.forEach((direction) => {
    const isUp = direction === "(";

    isUp ? currentlevel++ : currentlevel--;
  });

  return currentlevel;
}

function puzzleTwo() {
  const floors = input.split("");
  let currentlevel = 0;
  let basementPosition = null;

  for (let i = 0; i < floors.length; i++) {
    const direction = floors[i];
    const isUp = direction === "(";

    isUp ? currentlevel++ : currentlevel--;

    if (currentlevel < 0) {
      basementPosition = i + 1;
      break;
    }
  }

  return basementPosition;
}

console.log(`End destination is ${puzzleOne()}`);
console.log(`Entering basement at position ${puzzleTwo()}`);
