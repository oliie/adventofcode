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

const data = example.split("\n");

function puzzleOne() {
  const columns = new Array(data[0].length).fill(null).map(() => []);
  let message = "";

  data.forEach((line) => {
    const chars = line.split("");
    chars.forEach((char, i) => columns[i].push(char));
  });

  columns.forEach((col) => {
    // sort col by occurrance and += message with first char
  });

  return message;
}

console.log(`The error-corrected version of the message is ${puzzleOne()}`);
