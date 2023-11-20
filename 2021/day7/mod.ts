import input from "./input.ts";
const positions = input.map((n) => +n);
const examplePositions = `16,1,2,0,4,2,7,1,2,14`.split(",").map((n) => +n);
const puzzle = positions;

const fuelCosts: number[] = [];
const maxPos = Math.max(...puzzle);
const minPos = Math.min(...puzzle);

const puzzleOne = () => {
  for (let p = minPos; p < maxPos; p++) {
    let totalFuelCost = 0;

    for (let i = 0; i < puzzle.length; i++) {
      const currentPosition = puzzle[i];
      const fuelConsumtion = Math.abs(currentPosition - p);

      totalFuelCost += fuelConsumtion;
    }

    fuelCosts.push(totalFuelCost);
  }

  return {
    totalFuelConsumption: Math.min(...fuelCosts),
    atPosition: fuelCosts.indexOf(Math.min(...fuelCosts)),
  };
};

const fuelConsumtionRate = (a: number, b: number) => {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  let totalFuelConsumption = 0;
  let increaser = 0;

  for (let i = start; i < end; i++) {
    ++increaser;
    totalFuelConsumption += increaser;
  }

  return totalFuelConsumption;
};

const puzzleTwo = () => {
  for (let p = minPos; p < maxPos; p++) {
    let totalFuelCost = 0;

    for (let i = 0; i < puzzle.length; i++) {
      const currentPosition = puzzle[i];
      const fuelConsumtion = fuelConsumtionRate(currentPosition, p);

      totalFuelCost += fuelConsumtion;
    }

    fuelCosts.push(totalFuelCost);
  }

  return {
    totalConsumptionRate: Math.min(...fuelCosts),
    atPosition: fuelCosts.indexOf(Math.min(...fuelCosts)),
  };
};

console.log(puzzleTwo());
