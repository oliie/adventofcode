import input from "./input.js";

const example = `aaaaa-bbb-z-y-x-123[abxyz]
a-b-c-d-e-f-g-h-987[abcde]
not-a-real-room-404[oarel]
totally-real-room-200[decoy]`;

const data = example.split("\n");

function puzzleOne() {
  let sectorIdSum = 0;

  return sectorIdSum;
}

console.log(`Total sector sum of real rooms is: ${puzzleOne()}`);
