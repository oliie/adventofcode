import input from "./input.ts";

const opponentChoices = input.map((row) => row.split(" ")[0]);
const playerChoices = input.map((row) => row.split(" ")[1]);
let playerTotalScore = 0;

const SCORES: { [key: string]: number } = {
  X: 1,
  Y: 2,
  Z: 3,
};

const CHOICES: { [key: string]: string } = {
  A: "r",
  X: "r",
  B: "p",
  Y: "p",
  C: "s",
  Z: "s",
};

const isDraw = (playerChoice: string, opponentChoice: string) => {
  return CHOICES[playerChoice] === CHOICES[opponentChoice];
};

const isWin = (playerChoice: string, opponentChoice: string) => {
  return (
    (CHOICES[playerChoice] === "r" && CHOICES[opponentChoice] === "s") ||
    (CHOICES[playerChoice] === "s" && CHOICES[opponentChoice] === "p") ||
    (CHOICES[playerChoice] === "p" && CHOICES[opponentChoice] === "r")
  );
};

// X: Lose
// Y: Draw
// Z: Win

const getChoice = (
  opponentChoice: string,
  instruction: string
): { choice: string; outcome: string } => {
  if (instruction === "X") {
    if (opponentChoice === "A") return { choice: "Z", outcome: "l" };
    if (opponentChoice === "B") return { choice: "X", outcome: "l" };
    if (opponentChoice === "C") return { choice: "Y", outcome: "l" };
  } else if (instruction === "Y") {
    if (opponentChoice === "A") return { choice: "X", outcome: "d" };
    if (opponentChoice === "B") return { choice: "Y", outcome: "d" };
    if (opponentChoice === "C") return { choice: "Z", outcome: "d" };
  }

  if (opponentChoice === "A") return { choice: "Y", outcome: "w" };
  if (opponentChoice === "B") return { choice: "Z", outcome: "w" };

  return { choice: "X", outcome: "w" };
};

const calculateOutcome = (
  playerChoice: string,
  opponentChoice: string
): number => {
  let outcomeTotal = SCORES[playerChoice];

  if (isDraw(playerChoice, opponentChoice)) {
    outcomeTotal += 3;
  } else if (isWin(playerChoice, opponentChoice)) {
    outcomeTotal += 6;
  }

  return outcomeTotal;
};

const calculateOutcome2 = (
  playerChoice: string,
  opponentChoice: string
): number => {
  const { choice, outcome } = getChoice(opponentChoice, playerChoice);
  let outcomeTotal = SCORES[choice];

  if (outcome === "d") {
    outcomeTotal += 3;
  } else if (outcome === "w") {
    outcomeTotal += 6;
  }

  return outcomeTotal;
};

playerChoices.forEach((_c, i) => {
  playerTotalScore += calculateOutcome2(playerChoices[i], opponentChoices[i]);
});

console.log(playerTotalScore);
