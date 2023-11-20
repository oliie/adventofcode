import input from "./input.js";
const example = `30373
25512
65332
33549
35390`;

const source = example;

const lines = source.split("\n");
const treeMap = [];

lines.forEach((line) => {
  const trees = line.split("").map((t) => +t);
  treeMap.push(trees);
});

console.log(treeMap);
