/**
 * https://adventofcode.com/2020/day/2
 */

import input from './puzzle.ts';

const example = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

const part1 = (data: string) => {
    let lines = data.split(/\n/);
    let validPasswords = 0;

    lines.forEach((line) => {
        const parts = line.split(':');
        const instructions = parts[0].split(' ');
        const password = parts[1].trim();
        const minMax = instructions[0].split('-');
        const letter = instructions[1];
        const min = +minMax[0];
        const max = +minMax[1];
        const occurances = password.match(new RegExp(letter, 'g'))?.length || 0;

        validPasswords += min <= occurances && occurances <= max ? 1 : 0;
    });

    console.log(`Part 1: ${validPasswords}`);
};

const part2 = (data: string) => {
    let lines = data.split(/\n/);
    let validPasswords = 0;

    lines.forEach((line) => {
        const parts = line.split(':');
        const instructions = parts[0].split(' ');
        const password = parts[1].trim();
        const minMax = instructions[0].split('-');
        const letter = instructions[1];
        const pos1 = +minMax[0];
        const pos2 = +minMax[1];
        const validPosition1 = password[pos1 - 1] === letter;
        const validPosition2 = password[pos2 - 1] === letter;

        if (
            (validPosition1 && !validPosition2) ||
            (!validPosition1 && validPosition2)
        ) {
            validPasswords += 1;
        }
    });

    console.log(`Part 2: ${validPasswords}`);
};

part1(input);
part2(input);
