import input from "./input.js";

const example = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const data = input.split("\n");

const MAX = {
  RED: 12,
  GREEN: 13,
  BLUE: 14,
};

function puzzleOne() {
  let sum = 0;

  data.forEach((row) => {
    const game = row.split(": ");
    const gameId = +game[0].split(" ")[1];
    const cubes = game[1].split(/[;,]/g).map((s) => s.trim());
    const shows = { red: [], green: [], blue: [] };

    cubes.forEach((cube) => {
      const [count, color] = cube.split(" ");
      shows[color].push(+count);
    });

    if (
      Math.max(...shows.red) <= MAX.RED &&
      Math.max(...shows.green) <= MAX.GREEN &&
      Math.max(...shows.blue) <= MAX.BLUE
    ) {
      sum += gameId;
    }
  });

  return sum;
}

function puzzleTwo() {
  let sum = 0;

  data.forEach((row) => {
    const game = row.split(": ");
    const cubes = game[1].split(/[;,]/g).map((s) => s.trim());
    const shows = { red: [], green: [], blue: [] };

    cubes.forEach((cube) => {
      const [count, color] = cube.split(" ");
      shows[color].push(+count);
    });

    const multipliedCubes =
      Math.max(...shows.red) *
      Math.max(...shows.green) *
      Math.max(...shows.blue);

    sum += multipliedCubes;
  });

  return sum;
}

console.log(`The sum of each possible game ids is: ${puzzleOne()}`);
console.log(`The sum of minimum set of cubes is: ${puzzleTwo()}`);
