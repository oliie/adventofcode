import input from "./input.ts";

const priorities =
  " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function puzzle1() {
  let sum = 0;

  input.forEach((rucksack) => {
    const compartment1 = rucksack.substring(0, rucksack.length / 2).split("");
    const compartment2 = rucksack.substring(rucksack.length / 2).split("");

    for (let i = 0; i < compartment1.length; i++) {
      const item = compartment1[i];
      const inCompartment2 = !!~compartment2.indexOf(item);

      if (inCompartment2) {
        sum += priorities.indexOf(item);
        break;
      }
    }
  });

  console.log(sum);
}

function puzzle2() {
  const groups: string[][] = [];
  let group: string[] = [];
  let sum = 0;

  input.forEach((rucksack) => {
    group.push(rucksack);

    if (group.length === 3) {
      groups.push(group);
      group = [];
    }
  });

  groups.forEach((group) => {
    let sack1 = group[0].split("");
    let sack2 = group[1];
    let sack3 = group[2];

    for (let i = 0; i < sack1.length; i++) {
      const item = sack1[i];
      if (!!~sack2.indexOf(item) && !!~sack3.indexOf(item)) {
        sum += priorities.indexOf(item);
        break;
      }
    }
  });

  console.log(sum);
}

console.log(puzzle2());
