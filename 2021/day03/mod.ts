import input from "./input.ts";

const example = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`.split("\n");

const puzzle = input;

const puzzleOne = () => {
  const noOfZeroes = Array(puzzle[0].length).fill(0);
  const noOfOnes = Array(puzzle[0].length).fill(0);
  const gammaRate = Array(puzzle[0].length);
  const epsilonRate = Array(puzzle[0].length);
  let gammaRateDecimal = 0;
  let epsilonRateDecimal = 0;
  let powerConsumption = 0;

  for (let i = 0; i < puzzle.length; i++) {
    const bits = puzzle[i].split("");

    bits.forEach((bit, j) => {
      bit === "0" ? noOfZeroes[j]++ : noOfOnes[j]++;
    });
  }

  noOfZeroes.forEach((_n, i) => {
    if (+noOfZeroes[i] > +noOfOnes[i]) {
      gammaRate[i] = "0";
      epsilonRate[i] = "1";
    } else {
      gammaRate[i] = "1";
      epsilonRate[i] = "0";
    }
  });

  gammaRateDecimal = parseInt(gammaRate.join(""), 2);
  epsilonRateDecimal = parseInt(epsilonRate.join(""), 2);
  powerConsumption = gammaRateDecimal * epsilonRateDecimal;

  console.log(powerConsumption);
};

const findRating = (
  binaries: string[],
  startIndex: number,
  isOxygenGeneratorRating: boolean
): string => {
  const equalWinner = isOxygenGeneratorRating ? "1" : "0";
  let zeroIsMostFrequent = false;
  let zeroes = 0;
  let ones = 0;

  binaries.forEach((binary) =>
    binary[startIndex] === "0" ? zeroes++ : ones++
  );

  zeroIsMostFrequent = zeroes > ones;

  const mostFrequentBinaries = binaries.filter((binary) => {
    if (zeroes === ones) {
      return binary[startIndex] === equalWinner;
    }

    if (zeroIsMostFrequent) {
      return isOxygenGeneratorRating
        ? binary[startIndex] === "0"
        : binary[startIndex] === "1";
    }

    return isOxygenGeneratorRating
      ? binary[startIndex] === "1"
      : binary[startIndex] === "0";
  });

  console.log(mostFrequentBinaries);

  if (mostFrequentBinaries.length !== 1) {
    const nextIndex = startIndex + 1;
    return findRating(mostFrequentBinaries, nextIndex, isOxygenGeneratorRating);
  }

  return mostFrequentBinaries[0];
};

const puzzleTwo = () => {
  const oxygenGeneratorRating = findRating(puzzle, 0, true);
  const co2ScrubberRating = findRating(puzzle, 0, false);
  const lifeSupportRating =
    parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);

  console.log(lifeSupportRating);
};

puzzleTwo();
