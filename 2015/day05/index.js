import input from "./input.js";

const example = `ugknbfddgicrmopn
aaa
jchzalrnumimnmhp
haegwjzuvuyypxyu
dvszwmarrgswjxmb`;

const data = input.split("\n");

const naughty = ["ab", "cd", "pq", "xy"];
const vowels = ["a", "e", "i", "o", "u"];

function isNice(str) {
  let vowelCount = 0;
  let doubles = 0;
  let lastChar = null;
  const parts = str.split("");

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

console.log(`Number of nice strings is: ${puzzleOne()}`);
