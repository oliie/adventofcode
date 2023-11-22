import input from "./input.js";

const example = `aaaaa-bbb-z-y-x-123[abxyz]
a-b-c-d-e-f-g-h-987[abcde]
not-a-real-room-404[oarel]
totally-real-room-200[decoy]`;

const data = input.split("\n");

function isRealRoom(encrypt, checksum) {
  const charCount = {};

  // Check occurances
  encrypt.split("").forEach((char) => {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  });

  // Sort by occurance
  const sortedCharCount = Object.entries(charCount).sort((a, b) => {
    if (a[1] === b[1]) {
      // If occurance is the same, sort alphabetically
      return a[0] > b[0] ? 1 : -1;
    } else {
      // Sort by occurance
      return b[1] - a[1];
    }
  });

  const encryptChecksum = sortedCharCount
    .slice(0, 5)
    .map((a) => a[0])
    .join("");

  return encryptChecksum === checksum;
}

function puzzleOne() {
  let sectorIdSum = 0;

  data.map((room) => {
    const encrypts = room.split("-");
    const sectorIdAndChecksum = encrypts.pop();
    const sectorId = +sectorIdAndChecksum.split("[")[0].split("]")[0];
    const checksum = sectorIdAndChecksum.split("[")[1].split("]")[0];
    const fullEncrypt = encrypts.join("");

    if (isRealRoom(fullEncrypt, checksum)) sectorIdSum += sectorId;
  });

  return sectorIdSum;
}

console.log(`Total sector sum of real rooms is: ${puzzleOne()}`);
