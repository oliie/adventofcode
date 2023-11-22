// https://www.adventofcode.com/2016/day/3
import input from "./input.js";

const triangles = input.split("\n");

function puzzleOne() {
  let validTriangles = 0;

  triangles.forEach((triangle) => {
    const [a, b, c] = triangle
      .split(/\s+/)
      .filter(Boolean)
      .map((numString) => +numString);

    const isValidTriangle = a + b > c && b + c > a && c + a > b;

    isValidTriangle && validTriangles++;
  });

  return validTriangles;
}

function puzzleTwo() {
  let validTriangles = 0;
  let triangleGroups = [];

  let aLengths = [];
  let bLengths = [];
  let cLengths = [];

  triangles.forEach((triangle) => {
    const [a, b, c] = triangle
      .split(/\s+/)
      .filter(Boolean)
      .map((numString) => +numString);

    aLengths.push(a);
    bLengths.push(b);
    cLengths.push(c);

    if (aLengths.length === 3) {
      triangleGroups.push(aLengths, bLengths, cLengths);
      aLengths = [];
      bLengths = [];
      cLengths = [];
    }
  });

  triangleGroups.forEach((triangle) => {
    const [a, b, c] = triangle;

    const isValidTriangle = a + b > c && b + c > a && c + a > b;

    isValidTriangle && validTriangles++;
  });

  return validTriangles;
}

console.log(`Number of valid triangles is: ${puzzleOne()}`);
console.log(`Number of valid vertically triangles is: ${puzzleTwo()}`);
