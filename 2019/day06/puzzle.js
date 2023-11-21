var input = require('./input');
var planets = input.split(/\n/);

var orbitMap = {};
var orbitCount = 0;

for (var planet of planets) {
    let orbit = planet.split(')');
    let inside = orbit[0];
    let outside = orbit[1];

    if (inside in orbitMap) {
        orbitMap[inside].push(outside);
    } else {
        orbitMap[inside] = [outside];
    }
}

for (var key of Object.keys(orbitMap)) {

    // for (var planet of orbitMap[key]) {
    //     console.log(planet)

    // }
}


// {
//     FOO: {
//         orbitedBy: ['BAR', 'KYP']
//     }
//     BAZ: {
//         orbitedBy: ['FOO']
//     }
// }

// FOO)BAR
// BAZ)FOO
// FOO)KYP