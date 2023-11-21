import input from "./input.js";

const example = "R5, L5, R5, R3";

const instructions = input.split(", ");

/**
 * 0 = North
 * 1 = East
 * 2 = South
 * 3 = West
 */

const Compass = {
  NORTH: 0,
  EAST: 1,
  SOUTH: 2,
  WEST: 3,
};

let facing = Compass.NORTH;

function puzzleOne() {
  const coords = [0, 0];

  instructions.forEach((direction) => {
    const turn = direction[0];
    const distance = +direction.slice(1);

    turn === "R" ? facing++ : facing--;

    if (facing < 0) facing = 3;
    if (facing > 3) facing = 0;

    if (facing === Compass.NORTH) coords[1] -= distance;
    if (facing === Compass.EAST) coords[0] += distance;
    if (facing === Compass.SOUTH) coords[1] += distance;
    if (facing === Compass.WEST) coords[0] -= distance;
  });

  return Math.abs(coords[0]) + Math.abs(coords[1]);
}

console.log(`Blocks away from HQ: ${JSON.stringify(puzzleOne())}`);
