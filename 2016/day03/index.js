// https://www.adventofcode.com/2016/day/3
import input from "./input.js";

const triangles = input.split("\n");

function puzzleOne() {
  let validTriangles = 0;

  triangles.forEach((triangle) => {
    const t = triangle.split(/\s+/gm);

    console.log(t);
  });

  return validTriangles;
}

console.log(`Number of valid triangles is: ${puzzleOne()}`);
