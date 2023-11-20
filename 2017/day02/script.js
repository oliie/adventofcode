var advInput = require('./input.js');

function checksum1(input) {
    var rows = input.split('\n');
    var highest = 0;
    var lowest = Infinity;
    var sum = 0;

    for(var r = 0; r < rows.length; r++) {
        var row = rows[r].split(/\s+/g);

        for (var c = 0; c < row.length; c++) {
            var num = +row[c];
            var isLastIndex = (row.length - 1) === c;

            highest = (num > highest) ? num : highest;
            lowest = (num < lowest) ? num : lowest;

            if (isLastIndex) {
                sum += (highest - lowest);
                highest = 0;
                lowest = Infinity;
            }
        }
    }
}

function checksum2(input) {
    var rows = input.split('\n');
    var currentCellVal = 0;
    var sum = 0;

    for (var r = 0; r < rows.length; r++) {
        var row = rows[r].split(/\s+/g);

        for (var c = 0; c < row.length; c++) {
            var cell = +row[c];
            currentCellVal = cell;

            for (var i = 0; i < row.length; i++) {
                var cellDivider = +row[i];

                if ((i !== c) && (currentCellVal % cellDivider === 0)) {
                    sum += (currentCellVal / cellDivider);
                    break;
                }
            }

            continue;
        }
    }
}

checksum1(advInput); // 34581
checksum2(advInput); // 214
