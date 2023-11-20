import input from "./input.ts";
const exampleInput = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`.split("\n");

const puzzle = exampleInput;
const templateString = puzzle.shift()!;

puzzle.shift(); // Removes blank line

const rules: { [key: string]: string } = {};
const counts: { [key: string]: number } = {};

puzzle.forEach((pairInsertion) => {
  const parts: string[] = pairInsertion.split(" -> ");
  rules[parts[0]] = parts[1];
  counts[parts[0]] = 0;
});

const getTemplatePairs = (template: string[]): string[] => {
  return new Array(template.length - 1).fill(undefined).map((_char, i) => {
    return template[i] + template[i + 1];
  });
};

const getTemplate = (template: string) => {
  return template.split("");
};

const getPolymerSum = (polymer: string[]) => {
  const polymers: { [key: string]: number } = {};
  let sum = 0;

  polymer.forEach((char) => {
    char in polymers ? polymers[char]++ : (polymers[char] = 1);
  });

  sum =
    Math.max(...Object.values(polymers)) - Math.min(...Object.values(polymers));

  return sum;
};

const puzzleOne = () => {
  let template = getTemplate(templateString);
  let templatePairs = getTemplatePairs(template);
  const newTemplate: string[] = [...template];
  let index = 0;

  for (let n = 0; n < 10; n++) {
    template.forEach((_char, i) => {
      index++;
      if (rules[templatePairs[i]]) {
        newTemplate.splice(index, 0, rules[templatePairs[i]]);
        index++;
      }
    });

    template = [...newTemplate];
    templatePairs = getTemplatePairs(template);
    index = 0;
  }

  console.log(getPolymerSum(newTemplate));
};

// https://www.reddit.com/r/adventofcode/comments/rfzq6f/2021_day_14_solutions/hokc9ma/?utm_source=reddit&utm_medium=web2x&context=3

// The key idea in the fast (possible) technique is to realize that you don't need the actual string,
// just the counts of the pairs, and that is possible since the rules only create new pairs based on
// the number of times the "from" pair appears. So if you count the number of times pairs
// appear in the initial template, the pairs in the next version are simply create that number of
// each of the "to" pairs (note that each transform creates two new pairs one of the left character
// of the "from" + the "to" character, and the "to" character + the right character of the "from".

const puzzleTwo = () => {
  const steps = 2;
  const templates = getTemplatePairs(templateString.split(""));
  // console.log(counts);

  for (let i = 0; i < steps; i++) {
    Object.entries(rules).forEach((rule) => {
      const [pair, value] = rule;
      const [left, right] = pair.split("");

      templates.includes(pair) && counts[pair]++;
      // counts[pair]++;
      // counts[left + value]
      //   ? counts[left + value]++
      //   : (counts[left + value] = 1);
      // counts[value + right]
      //   ? counts[value + right]++
      //   : (counts[value + right] = 1);
    });
  }

  console.log(templates);

  console.log(counts);
};

// puzzleOne();

puzzleTwo();
