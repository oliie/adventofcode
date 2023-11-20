/**
 * https://adventofcode.com/2020/day/1
 */

import input from './puzzle.ts';

const example = `1721
979
366
299
675
1456`;

const part1 = (data: string) => {
    const parts = data.split(/\n/);
    let currentIndex = 0;
    let sum = 0;
    let firstNumber = 0;
    let secondNumber = 0;

    for (let i = 0; i < parts.length; i++) {
        currentIndex = i;

        for (let j = 0; j < parts.length; j++) {
            let staticNumber = +parts[currentIndex];
            let currentNumber = +parts[j];

            if (j !== currentIndex) {
                if (staticNumber + currentNumber === 2020) {
                    firstNumber = staticNumber;
                    secondNumber = currentNumber;

                    sum = staticNumber * currentNumber;
                    break;
                }
            }
        }
    }

    console.log(`The sum of ${firstNumber} × ${secondNumber} is ${sum}`);
};

const part2 = (data: string) => {
    const parts = data.split(/\n/);
    let currentIndexNo1 = 0;
    let currentIndexNo2 = 0;
    let sum = 0;

    for (let i = 0; i < parts.length; i++) {
        currentIndexNo1 = i;

        for (let j = 0; j < parts.length; j++) {
            if (j !== currentIndexNo1) {
                currentIndexNo2 = j;

                for (let k = 0; k < parts.length; k++) {
                    if (k !== currentIndexNo1 && k !== currentIndexNo2) {
                        if (+parts[i] + +parts[j] + +parts[k] === 2020) {
                            sum = +parts[i] * +parts[j] * +parts[k];
                            break;
                        }
                    }
                }
            }
        }
    }

    console.log(`The sum is ${sum}`);
};

part1(input);
part2(input);
