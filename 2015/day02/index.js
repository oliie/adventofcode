import input from "./input.js";

const example = `2x3x4
1x1x10`;

const data = input;

function puzzleOne() {
  let total = 0;

  data.split("\n").forEach((line) => {
    const [l, w, h] = line.split("x").map((x) => +x);
    const lw = 2 * l * w;
    const wh = 2 * w * h;
    const hl = 2 * h * l;
    const slack = Math.min(...[lw / 2, wh / 2, hl / 2]);

    total += lw + wh + hl + slack;
  });

  return total;
}

function puzzleTwo() {
  let total = 0;

  data.split("\n").forEach((line) => {
    const [l, w, h] = line.split("x").map((x) => +x);
    const [sm, md] = [l, w, h].sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
    const ribbon = sm * 2 + md * 2;
    const bow = l * w * h;

    total += ribbon + bow;
  });

  return total;
}

console.log(`Square feet of wrapping paper required: ${puzzleOne()}`);
console.log(`The length of ribbon required: ${puzzleTwo()}`);
