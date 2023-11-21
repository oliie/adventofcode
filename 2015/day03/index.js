import input from "./input.js";

const example = `^^^^`; // 19

const data = input;

const map = [[true]];
let x = 0;
let y = 0;
let rx = 0;
let ry = 0;
let length = 1;

function puzzleOne() {
  data.split("").forEach((direction, i) => {
    // const isSanta = i % 2 === 0;

    switch (direction) {
      case "^":
        y--;
        if (y === -1) {
          map.unshift([...new Array(length)].fill(false));
          y = 0;
        }
        map[y][x] = true;

        break;
      case ">":
        x++;
        if (x > length - 1) {
          map.forEach((row) => row.push(false));
          length++;
        }
        map[y][x] = true;

        break;
      case "v":
        y++;
        if (y > map.length - 1) map.push(new Array(length).fill(false));
        map[y][x] = true;

        break;
      case "<":
        x--;
        if (x === -1) {
          map.forEach((row) => row.unshift(false));
          x = 0;
          length++;
        }
        map[y][x] = true;

        break;
    }
  });

  const uniqueDeliveries = map.flat().filter((delivered) => delivered);
  return uniqueDeliveries.length;
}

console.log(`Houses with at least one present: ${puzzleOne()}`);
