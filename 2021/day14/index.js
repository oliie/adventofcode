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

let templates = [];
const pairs = {};

data
  .split("\n\n")[1]
  .split("\n")
  .forEach((rule) => {
    const [pair, insert] = rule.split(" -> ");
    pairs[pair] = insert;
  });

for (let i = 0; i < template.length - 1; i++) {
  templates.push(template.slice(i, i + 2));
}

function puzzle() {
  const sum = 0;
  const pairCount = {};

  for (let i = 0; i < 10; i++) {
    const nextTemplates = [];

    for (const t of templates) {
      pairCount[t[0]] ? pairCount[t[0]]++ : (pairCount[t[0]] = 1);
      pairCount[t[1]] ? pairCount[t[1]]++ : (pairCount[t[1]] = 1);
      const nextPairsString = t.split("").join(pairs[t]);
      const first = nextPairsString[0] + nextPairsString[1];
      const second = nextPairsString[1] + nextPairsString[2];
      nextTemplates.push(first, second);
    }

    templates = nextTemplates;
  }

  console.log(pairCount);

  return sum;
}

console.log(
  `The most common element minus the least common element is ${puzzle()} after 10 iterations.`
);
