import input from "./input.js";

function puzzleOne() {
  const visited = new Set();
  const santaPos = [0, 0];

  visited.add(santaPos.toString());

  input.split("").forEach((direction) => {
    if (direction === "^") santaPos[1]++;
    if (direction === "v") santaPos[1]--;
    if (direction === ">") santaPos[0]++;
    if (direction === "<") santaPos[0]--;
    visited.add(santaPos.toString());
  });

  return visited.size;
}

function puzzleTwo() {
  const visited = new Set();
  const santaPos = [0, 0];
  const roboSantaPos = [0, 0];

  visited.add(santaPos.toString());

  input.split("").forEach((direction, i) => {
    const currentSanta = i % 2 === 0 ? santaPos : roboSantaPos;
    if (direction === "^") currentSanta[1]++;
    if (direction === "v") currentSanta[1]--;
    if (direction === ">") currentSanta[0]++;
    if (direction === "<") currentSanta[0]--;
    visited.add(currentSanta.toString());
  });

  return visited.size;
}

console.log(`Houses with at least one present: ${puzzleOne()}`);
console.log(
  `Houses with at least one present with RoboSanta 3000: ${puzzleTwo()}`
);
