import input from "./input.js";

const example = `NNCB

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
CN -> C`;

const data = example;
let template = data.split("\n")[0];

let templates = {};
const rules = {};

data
  .split("\n\n")[1]
  .split("\n")
  .forEach((rule) => {
    const [pair, insert] = rule.split(" -> ");
    rules[pair] = insert;
  });

for (let i = 0; i < template.length - 1; i++) {
  const pair = template[i] + template[i + 1];
  templates[pair] = 1;
}

function puzzle() {
  const sum = 0;
  const charCount = {};
  const steps = 10;

  template.split("").forEach((char) => {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  });

  for (let i = 0; i < steps; i++) {
    const nextTemplates = {};

    for (const pair of Object.keys(templates)) {
      const iterations = templates[pair];

      for (let j = 0; j < iterations; j++) {
        const nextPairsString = pair.split("").join(rules[pair]);
        const first = nextPairsString[0] + nextPairsString[1];
        const second = nextPairsString[1] + nextPairsString[2];

        charCount[rules[pair]] = charCount[rules[pair]]
          ? charCount[rules[pair]] + 1
          : 1;

        nextTemplates[first]
          ? nextTemplates[first]++
          : (nextTemplates[first] = 1);
        nextTemplates[second]
          ? nextTemplates[second]++
          : (nextTemplates[second] = 1);
      }
    }

    templates = nextTemplates;
  }

  console.log(charCount);

  return sum;
}

console.log(
  `The most common element minus the least common element is ${puzzle()} after 10 iterations.`
);
