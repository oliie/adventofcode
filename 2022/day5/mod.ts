import instructions from "./input.ts";

// [V]         [T]         [J]
// [Q]         [M] [P]     [Q]     [J]
// [W] [B]     [N] [Q]     [C]     [T]
// [M] [C]     [F] [N]     [G] [W] [G]
// [B] [W] [J] [H] [L]     [R] [B] [C]
// [N] [R] [R] [W] [W] [W] [D] [N] [F]
// [Z] [Z] [Q] [S] [F] [P] [B] [Q] [L]
// [C] [H] [F] [Z] [G] [L] [V] [Z] [H]
//  1   2   3   4   5   6   7   8   9

const crates: string[][] = [
  [],
  "CZNBMWQV".split(""),
  "HZRWCB".split(""),
  "FQRJ".split(""),
  "ZSWHFNMT".split(""),
  "GFWLNQP".split(""),
  "LPW".split(""),
  "VBDRGCQJ".split(""),
  "ZQNBW".split(""),
  "HLFCGTJ".split(""),
];

function puzzle1() {
  let message = "";

  instructions.forEach((instruction) => {
    const [_, iteration, from, to] = instruction
      .split(/\D+/g)
      .map((n) => Number(n));

    for (let i = 0; i < iteration; i++) {
      const crate = crates[from].pop()!;
      crates[to].push(crate);
    }
  });

  crates.forEach((crate, i) => i > 0 && (message += crate.pop()));

  return message;
}

function puzzle2() {
  let message = "";

  instructions.forEach((instruction) => {
    const crateStack = [];

    const [_, iteration, from, to] = instruction
      .split(/\D+/g)
      .map((n) => Number(n));

    for (let i = 0; i < iteration; i++) {
      crateStack.push(crates[from].pop()!);
    }

    crates[to] = [...crates[to], ...crateStack.reverse()];
  });

  crates.forEach((crate, i) => i > 0 && (message += crate.pop()));

  return message;
}

// console.log(puzzle1());
console.log(puzzle2());
