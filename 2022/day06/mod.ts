import input from "./input.ts";

const buffer = input.split("");
const currentPattern: string[] = [];

const isUniqueBuffer = (bufferLength: number, arr: string[]) =>
  [...new Set(arr)].length === bufferLength;

const puzzle = (bufferLength: number) => {
  for (let i = 0; i < buffer.length; i++) {
    const char = buffer[i];
    if (currentPattern.length !== bufferLength) currentPattern.push(char);
    if (isUniqueBuffer(bufferLength, currentPattern)) return i;

    currentPattern.shift();
    currentPattern.push(char);
  }
};

console.log(puzzle(4));
console.log(puzzle(14));
