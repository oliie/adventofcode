const input = require('./input');
const fuels = input.split(/\n/);

let totalFuel = 0;


function puzzle1(fuels) {
    for (fuel of fuels) {
        totalFuel += Math.floor((+fuel / 3)) - 2;
    }

    return totalFuel;
}

function puzzle2(fuels) {

}

console.log(puzzle2(fuels));