import input from "./input.js";

const example = "R5, L5, R5, R3";

const instructions = input.split(", ");

const Compass = {
  NORTH: 0,
  EAST: 1,
  SOUTH: 2,
  WEST: 3,
};

function puzzleOne() {
  // [x, y]
  const coords = [0, 0];
  let facing = Compass.NORTH;

  instructions.forEach((direction) => {
    const turn = direction[0];
    const distance = +direction.slice(1);

    turn === "R" ? facing++ : facing--;

    facing = (facing + 4) % 4;

    if (facing === Compass.NORTH) coords[1] -= distance;
    if (facing === Compass.EAST) coords[0] += distance;
    if (facing === Compass.SOUTH) coords[1] += distance;
    if (facing === Compass.WEST) coords[0] -= distance;
  });

  return Math.abs(coords[0]) + Math.abs(coords[1]);
}

function puzzleTwo() {
  // [x, y]
  const coords = [0, 0];
  const visited = new Set();
  let facing = Compass.NORTH;
  let firstVisitedTwice = null;

  instructions.forEach((direction) => {
    const turn = direction[0];
    const distance = +direction.slice(1);

    turn === "R" ? facing++ : facing--;

    facing = (facing + 4) % 4;

    const passingBlocks = [...Array(distance).fill(1)];

    const addOrIsVisited = (position) => {
      if (!firstVisitedTwice && visited.has(position.toString())) {
        firstVisitedTwice = structuredClone(position);
      } else {
        visited.add(position.toString());
      }
    };

    if (facing === Compass.NORTH) {
      passingBlocks.forEach((_) => {
        coords[1] -= 1;
        addOrIsVisited(coords);
      });
    }
    if (facing === Compass.EAST) {
      passingBlocks.forEach((_) => {
        coords[0] += 1;
        addOrIsVisited(coords);
      });
    }
    if (facing === Compass.SOUTH) {
      passingBlocks.forEach((_) => {
        coords[1] += 1;
        addOrIsVisited(coords);
      });
    }
    if (facing === Compass.WEST) {
      passingBlocks.forEach((_) => {
        coords[0] -= 1;
        addOrIsVisited(coords);
      });
    }
  });

  return Math.abs(firstVisitedTwice[0]) + Math.abs(firstVisitedTwice[1]);
}

console.log(`Blocks away from HQ: ${JSON.stringify(puzzleOne())}`);
console.log(
  `Blocks away from position visited twice: ${JSON.stringify(puzzleTwo())}`
);
