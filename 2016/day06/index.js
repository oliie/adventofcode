// https://www.adventofcode.com/2016/day/6
import input from "./input.js";

const example = `eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar`;

const data = input.split("\n");

function puzzleOne() {
  const columns = new Array(data[0].length).fill(null).map(() => []);
  let message = "";

  data.forEach((line) => {
    const chars = line.split("");
    chars.forEach((char, i) => columns[i].push(char));
  });

  columns.forEach((col) => {
    const chars = {};
    col.forEach((char) => (chars[char] = chars[char] ? chars[char] + 1 : 1));

    const sortedChars = Object.entries(chars).sort((a, b) =>
      a[1] > b[1] ? -1 : b[1] > a[1] ? 1 : 0
    );

    sortedChars.forEach((arr, i) => {
      if (i === 0) message += arr[0];
    });
  });

  return message;
}

function puzzleTwo() {
  const columns = new Array(data[0].length).fill(null).map(() => []);
  let message = "";

  data.forEach((line) => {
    const chars = line.split("");
    chars.forEach((char, i) => columns[i].push(char));
  });

  columns.forEach((col) => {
    const chars = {};
    col.forEach((char) => (chars[char] = chars[char] ? chars[char] + 1 : 1));

    const sortedChars = Object.entries(chars).sort((a, b) =>
      a[1] > b[1] ? 1 : b[1] > a[1] ? -1 : 0
    );

    sortedChars.forEach((arr, i) => {
      if (i === 0) message += arr[0];
    });
  });

  return message;
}

console.log(`The error-corrected version of the message is ${puzzleOne()}`);
console.log(`The actual version of the message is ${puzzleTwo()}`);
