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

// function puzzleOne() {
//   let visibleTrees = 0;

//   treeMap.forEach((treeRow, y) => {
//     treeRow.forEach((tree, x) => {
//       const ABOVE = treeMap[y - 1] != null ? treeMap[y - 1][x] : null;
//       const RIGHT = treeRow[x + 1] != null ? treeRow[x + 1] : null;
//       const BELOW = treeMap[y + 1] != null ? treeMap[y + 1][x] : null;
//       const LEFT = treeRow[x - 1] != null ? treeRow[x - 1] : null;
//       const surroundingTrees = [ABOVE, RIGHT, BELOW, LEFT];
//       const isVisible = surroundingTrees.some((t) => t === null || tree > t);

//       console.log(surroundingTrees, "of", tree, isVisible);

//       isVisible && visibleTrees++;
//     });
//     console.log("...");
//   });

//   return visibleTrees;
// }

function visibleFromX(row, position, height) {
  const tallestLeft = Math.max(...row.slice(null, position));
  const tallestRight = Math.max(...row.slice(position + 1));

  return height > tallestLeft || height > tallestRight;
}

function visibleFromY(row, position, height) {
  const tallestLeft = Math.max(...row.slice(null, position));
  const tallestRight = Math.max(...row.slice(position + 1));

  return height > tallestLeft || height > tallestRight;
}

function getTreeColumn(x) {
  const column = [];

  treeMap.forEach((row) => {
    column.push(row[x]);
  });

  return column;
}

function puzzleOne() {
  let visibleTrees = 0;

  treeMap.forEach((treeRow, y) => {
    treeRow.forEach((tree, x) => {
      const isXVisible = visibleFromX(treeRow, x, tree);
      const isYVisible = visibleFromY(getTreeColumn(x), y, tree);

      (isXVisible || isYVisible) && visibleTrees++;
    });
  });

  return visibleTrees;
}

generateTreeMap();
console.log(puzzleOne());
