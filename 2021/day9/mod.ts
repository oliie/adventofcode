import inputs from "./input.ts";
const exampleInputs = `2199943210
3987894921
9856789892
8767896789
9899965678`.split("\n");

interface Point {
  row: number;
  col: number;
  visited: boolean;
  value: number;
}

const puzzle = inputs;

const pointMap2d: Point[][] = [];

puzzle.forEach((row, x) => {
  const points: Point[] = [];

  row.split("").forEach((val, y) => {
    points.push({
      value: +val,
      visited: false,
      col: y,
      row: x,
    });
  });

  pointMap2d.push(points);
});

const getLowestPoints = (map: Point[][]): Point[] => {
  const lowestPoints = [];

  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      const current = map[row][col];
      const neighbours = getNeighbours(map, current);
      if (neighbours.some((neighbour) => neighbour.value <= current.value))
        continue;
      lowestPoints.push(current);
    }
  }

  return lowestPoints;
};

const getNeighbours = (map: Point[][], current: Point) => {
  const neighbours: Point[] = [];
  const { row, col } = current;

  if (row >= 1) neighbours.push(map[row - 1][col]);
  if (col >= 1) neighbours.push(map[row][col - 1]);
  if (row < map.length - 1) neighbours.push(map[row + 1][col]);
  if (col < map[row].length - 1) neighbours.push(map[row][col + 1]);

  return neighbours;
};

const puzzleOne = () => {
  let totalRiskLevel = 0;
  const lowestPoints: Point[] = getLowestPoints(pointMap2d);

  for (const point of lowestPoints) {
    totalRiskLevel += ++point.value;
  }

  console.log(totalRiskLevel);
};

// https://codepen.io/oliie/pen/OJxXvrN - Colored Map
const puzzleTwo = () => {
  const sizes: number[] = [];
  const lowestPoints: Point[] = getLowestPoints(pointMap2d);
  let totalLargestBasinSizes = 0;

  for (const point of lowestPoints) {
    let size = 0;
    const queue: Point[] = [point];

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (current.visited || current.value === 9) continue;
      current.visited = true;
      queue.push(...getNeighbours(pointMap2d, current));

      size++;
    }

    sizes.push(size);
  }

  sizes.sort((a, b) => (a > b ? -1 : b > a ? 1 : 0));

  totalLargestBasinSizes = sizes[0] * sizes[1] * sizes[2];

  console.log(totalLargestBasinSizes);
};

puzzleTwo();
