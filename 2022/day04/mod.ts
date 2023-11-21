import input from "./input.ts";

function puzzle() {
  let contains = 0;
  let overlaps = 0;

  input.forEach((line) => {
    const [section1, section2] = line.split(",");
    const [start1, end1] = section1.split("-").map((x) => Number(x));
    const [start2, end2] = section2.split("-").map((x) => Number(x));

    const isContaining =
      (start1 <= start2 && end1 >= end2) || (start2 <= start1 && end2 >= end1);

    if (isContaining) contains++;

    const isOverlapping =
      (start1 >= start2 && start1 <= end2) ||
      (start2 >= start1 && start2 <= end1);

    if (isOverlapping) overlaps++;
  });

  return `No of contains: ${contains}. No of overlaps: ${overlaps}`;
}

console.log(puzzle());
