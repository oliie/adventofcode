import input from "./input.js";

const example = `ugknbfddgicrmopn
aaa
jchzalrnumimnmhp
haegwjzuvuyypxyu
dvszwmarrgswjxmb`;

const actualExample = `qjhvhtzxzqqjkmpb
xxyxx
uurcxstgmygtbstg
ieodomkazucvgmuy`;

const data = input.split("\n");

const naughty = ["ab", "cd", "pq", "xy"];
const vowels = ["a", "e", "i", "o", "u"];

function isNice(str) {
  const parts = str.split("");
  let vowelCount = 0;
  let doubles = 0;
  let lastChar = null;

  for (const char of parts) {
    if (lastChar === char) doubles++;
    if (vowels.includes(char)) vowelCount++;
    lastChar = char;
  }

  return vowelCount >= 3 && doubles >= 1;
}

function puzzleOne() {
  let nice = 0;

  for (const str of data) {
    if (naughty.some((n) => str.includes(n))) continue;
    if (isNice(str)) nice++;
  }

  return nice;
}

// Solution from GPT
// function isNicePart2(str) {
//   // Check for the first condition: Two non-overlapping pairs of the same letter
//   const condition1 = /(..).*\1/.test(str);

//   // Check for the second condition: One letter repeated with one letter between them
//   const condition2 = /(.).\1/.test(str);

//   // Return true if both conditions are met
//   return condition1 && condition2;
// }

function isActuallyNice(str) {
  const parts = str.split("");
  const doublePattern = /(..).*\1/;
  const doubles = doublePattern.test(str);
  let repeatedPair = 0;
  let repeatedGapChars = 0;
  let lastChars = [null, null];

  if (doubles) repeatedPair++;

  for (let i = 0; i < parts.length; i++) {
    const char = parts[i];

    if (lastChars[i % 2] === char) repeatedGapChars++;

    lastChars[i % 2] = char;
  }

  return repeatedGapChars >= 1 && repeatedPair >= 1;
}

function puzzleTwo() {
  let nice = 0;

  for (const str of data) if (isActuallyNice(str)) nice++;

  return nice;
}

console.log(`Number of nice strings is: ${puzzleOne()}`);
console.log(`Number of ACTUAL nice strings is: ${puzzleTwo()}`);
