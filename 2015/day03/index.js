import input from "./input.js";

const example = `>>^>vv<>>^^^<<<<<vv>>>>>`; // 19

const data = input;

const map = [[true]];
let x = 0;
let y = 0;
let length = map[0].length;

function puzzleOne() {
  data.split("").forEach((direction) => {
    switch (direction) {
      case "^":
        if (y === 0) {
          map.unshift(new Array(length).fill(false));
        } else {
          y--;
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
        if (x === 0) {
          map.forEach((row) => row.unshift(false));
          length++;
        } else {
          x--;
        }
        map[y][x] = true;
        break;
    }
  });

  const uniqueDeliveries = map.flat().filter((delivered) => delivered);
  return uniqueDeliveries.length;
}

console.log(`Houses with at least one present: ${puzzleOne()}`);
