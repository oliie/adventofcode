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

/**
 * It contains a pair of any two letters that appears at least twice in the string without overlapping,
 * like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
 *
 * ✅ It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
 */

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
