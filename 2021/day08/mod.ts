import input from "./input.ts";
const exampleInput =
  `be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
  edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
  fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
  fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
  aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
  fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
  dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
  bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
  egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
  gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce`.split(
    "\n"
  );

const signals = input;

const puzzleOne = () => {
  const VALID_LENGTHS = [2, 4, 3, 7];
  let occurrances = 0;

  signals.forEach((row) => {
    const outputPatterns = row.split(" | ")[1].split(" ");

    outputPatterns.forEach((pattern) => {
      !!~VALID_LENGTHS.indexOf(pattern.length) && occurrances++;
    });
  });

  return occurrances;
};

const puzzleTwo = () => {
  let sum = 0;
  const outputs: string[] = [];

  signals.forEach((row) => {
    const inputPatterns = row.split(" | ")[0].split(" ");
    const outputPatterns = row.split(" | ")[1].split(" ");
    const zeroSixOrNine: string[] = [];
    const twoThreeOrFive: string[] = [];
    let finalOutput = "";

    const NUMBERS: { [key: string]: string } = {
      ZERO: "",
      ONE: "",
      TWO: "",
      THREE: "",
      FOUR: "",
      FIVE: "",
      SIX: "",
      SEVEN: "",
      EIGHT: "",
      NINE: "",
    };

    const CODE: { [key: string]: string } = {};

    inputPatterns.forEach((inputPattern) => {
      const segments = inputPattern.split("").sort();
      const part = segments.join("");
      const isOne = segments.length === 2;
      const isSeven = segments.length === 3;
      const isFour = segments.length === 4;
      const isEight = segments.length === 7;
      const possibleTwoThreeFive = segments.length === 5;
      const possibleZeroSixNine = segments.length === 6;

      if (isOne) {
        NUMBERS.ONE = part;
        CODE[part] = "1";
      }

      if (isSeven) {
        NUMBERS.SEVEN = part;
        CODE[part] = "7";
      }

      if (isFour) {
        NUMBERS.FOUR = part;
        CODE[part] = "4";
      }

      if (isEight) {
        NUMBERS.EIGHT = part;
        CODE[part] = "8";
      }

      if (possibleTwoThreeFive) {
        twoThreeOrFive.push(part);
      }

      if (possibleZeroSixNine) {
        zeroSixOrNine.push(part);
      }
    });

    const getHalfFourSegments = NUMBERS.FOUR.split("").filter((char) => {
      const ignoredSegments = NUMBERS.ONE.split("");
      return !~ignoredSegments.indexOf(char);
    });

    // Find 0
    for (let i = 0; i < zeroSixOrNine.length; i++) {
      let zeroFound = false;
      const unknownSegment = zeroSixOrNine[i];

      for (let j = 0; j < getHalfFourSegments.length; j++) {
        const fourCharSegments = getHalfFourSegments[j];

        if (!unknownSegment.includes(fourCharSegments)) {
          NUMBERS.ZERO = unknownSegment;
          CODE[unknownSegment] = "0";
          zeroFound = true;
          break;
        }
      }

      if (zeroFound) {
        zeroSixOrNine.splice(i, 1);
        break;
      }
    }

    // Find 6
    for (let i = 0; i < zeroSixOrNine.length; i++) {
      let sixFound = false;
      const unknownSegment = zeroSixOrNine[i];
      const numberOneParts = NUMBERS.ONE.split("");

      for (let j = 0; j < numberOneParts.length; j++) {
        const oneChar = numberOneParts[j];

        if (!unknownSegment.includes(oneChar)) {
          NUMBERS.SIX = unknownSegment;
          CODE[unknownSegment] = "6";
          sixFound = true;
          break;
        }
      }

      if (sixFound) {
        zeroSixOrNine.splice(i, 1);
        break;
      }
    }

    NUMBERS.NINE = zeroSixOrNine[0];
    CODE[zeroSixOrNine[0]] = "9";

    // Find 3
    for (let i = 0; i < twoThreeOrFive.length; i++) {
      let threeFound = false;
      let hits = 0;
      const unknownSegment = twoThreeOrFive[i];
      const numberOneParts = NUMBERS.ONE.split("");

      for (let j = 0; j < numberOneParts.length; j++) {
        const oneChar = numberOneParts[j];

        if (unknownSegment.includes(oneChar)) {
          hits++;
          if (hits === 2) {
            NUMBERS.SIX = unknownSegment;
            CODE[unknownSegment] = "3";
            threeFound = true;
            break;
          }
        }
      }

      if (threeFound) {
        twoThreeOrFive.splice(i, 1);
        break;
      }
    }

    let nineSegment = "";

    // Find Nine Segment
    for (let i = 0; i < NUMBERS.EIGHT.length; i++) {
      const char = NUMBERS.EIGHT[i];
      if (!NUMBERS.NINE.includes(char)) {
        nineSegment = char;
      }
    }

    // Find 5
    for (let i = 0; i < twoThreeOrFive.length; i++) {
      let fiveFound = false;
      const unknownSegment = twoThreeOrFive[i];

      if (!unknownSegment.includes(nineSegment)) {
        fiveFound = true;
        NUMBERS.FIVE = unknownSegment;
        CODE[unknownSegment] = "5";
      }

      if (fiveFound) {
        twoThreeOrFive.splice(i, 1);
        break;
      }
    }

    NUMBERS.TWO = twoThreeOrFive[0];
    CODE[twoThreeOrFive[0]] = "2";

    outputPatterns.forEach((outputPattern) => {
      const segments = outputPattern.split("").sort();
      const part = segments.join("");
      finalOutput += CODE[part];
    });

    outputs.push(finalOutput);
  });

  outputs.forEach((output) => {
    sum += +output;
  });

  return sum;
};

console.log(puzzleTwo());
