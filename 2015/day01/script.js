var advInput = require('./input');

function getFloor(input) {
    var floors = input.split('');
    var currentlevel = 0;

    for (var i = 0; i < floors.length; i++) {
        var direction = floors[i];
        var isUp = direction === '(';

        if (isUp) {
            currentlevel++;
        } else {
            currentlevel--;
        }
    }
}

getFloor(advInput); // 74
