import input from "./input.js";

function puzzleOne() {
  const visited = new Set();
  const santaPos = [0, 0];

  visited.add(santaPos.toString());

  for (const direction of input) {
    if (direction === "^") santaPos[1]++;
    if (direction === "v") santaPos[1]--;
    if (direction === ">") santaPos[0]++;
    if (direction === "<") santaPos[0]--;
    visited.add(santaPos.toString());
  }

  return visited.size;
}

console.log(`Houses with at least one present: ${puzzleOne()}`);
