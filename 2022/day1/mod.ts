import input from "./input.ts";

const totalCalories: number[] = [];
let currentCalories = 0;

input.forEach((n) => {
  if (n.length) {
    currentCalories += +n;
  } else {
    totalCalories.push(currentCalories);
    currentCalories = 0;
  }
});

console.log("The elf carrying the most has:", Math.max(...totalCalories));

const sortedCalories = totalCalories.sort((a, b) => a - b).reverse();
let topThreeTotalCalories = 0;

[...Array(3)].forEach((_n, i) => (topThreeTotalCalories += sortedCalories[i]));

console.log("Top three total calories:", topThreeTotalCalories);
