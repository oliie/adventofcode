import input from "./input.js";
const example = `30373
25512
65332
33549
35390`;

const source = input;

const lines = source.split("\n");
const treeMap = [];

function generateTreeMap() {
  lines.forEach((line) => {
    const trees = line.split("").map((t) => +t);
    treeMap.push(trees);
  });
}

function getTreeColumn(x) {
  const column = [];

  treeMap.forEach((row) => {
    column.push(row[x]);
  });

  return column;
}

function isVisible(row, position, height) {
  const tallestLeft = Math.max(...row.slice(null, position));
  const tallestRight = Math.max(...row.slice(position + 1));

  return height > tallestLeft || height > tallestRight;
}

function puzzleOne() {
  let visibleTrees = 0;

  treeMap.forEach((treeRow, y) => {
    treeRow.forEach((tree, x) => {
      const isXVisible = isVisible(treeRow, x, tree);
      const isYVisible = isVisible(getTreeColumn(x), y, tree);

      (isXVisible || isYVisible) && visibleTrees++;
    });
  });

  return visibleTrees;
}

function getDirectionalScenicScore(tree, direction) {
  let score = 0;

  for (let i = 0; i < direction.length; i++) {
    const currentTree = direction[i];

    if (tree <= currentTree) {
      score++;
      break;
    } else {
      score++;
    }
  }

  return score;
}

function getScenicScore(row, column, x, y, tree) {
  const up = getDirectionalScenicScore(tree, column.slice(null, y).reverse());
  const down = getDirectionalScenicScore(tree, column.slice(y + 1));
  const left = getDirectionalScenicScore(tree, row.slice(null, x).reverse());
  const right = getDirectionalScenicScore(tree, row.slice(x + 1));

  return up * right * down * left;
}

function puzzleTwo() {
  let highestScenicScore = 0;

  treeMap.forEach((treeRow, y) => {
    treeRow.forEach((tree, x) => {
      const scenicScore = getScenicScore(treeRow, getTreeColumn(x), x, y, tree);

      if (highestScenicScore < scenicScore) {
        highestScenicScore = scenicScore;
      }
    });
  });

  return highestScenicScore;
}

generateTreeMap();
console.log(`The number of visible trees is: ${puzzleOne()}`);
console.log(`The highest scenic score is: ${puzzleTwo()}`);
