import input from "./input.ts";
const exampleInput = "3,4,3,1,2".split(",");

interface Bucket {
  fishes: number;
  timer: number;
}

const states = input;

const puzzleOne = () => {
  const days = 80;
  const buckets: Bucket[] = [];
  const initialBuckets: string[] = [...states];
  let totalFishes = 0;

  initialBuckets.forEach((state) => {
    buckets.push({ timer: +state, fishes: 1 });
  });

  for (let i = 0; i < days; i++) {
    buckets.map((bucket) => {
      bucket.timer -= 1;

      if (bucket.timer === -1) {
        bucket.timer = 6;
        buckets.push({ timer: 8, fishes: bucket.fishes });
      }

      return bucket;
    });
  }

  buckets.forEach((bucket) => {
    totalFishes += bucket.fishes;
  });

  console.log("Total fishes: ", totalFishes);
};

const puzzleTwo = () => {
  const days = 256;
  const counts = Array(9).fill(0);

  states.forEach((n) => counts[+n]++);

  for (let i = 0; i < days; i++) {
    const newCount = counts.shift();
    counts[6] += newCount;
    counts.push(newCount);
  }

  return counts.reduce((total, count) => total + count);
};

// puzzleOne();

puzzleTwo();
