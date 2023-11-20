var advInput = require('./input');

function validatePassPhrases1(phrases) {
    var validInputs;
    var invalidInputs = 0;
    var inputs = phrases.split('\n');
    var noOfInputs = inputs.length;

    for (var i = 0; i < inputs.length; i++) {
        var words = inputs[i].split(' ');

        for (var w = words.length - 1; w > 0; w--) {
            var word = words.shift();
            var wordIsInWords = !!~words.indexOf(word);

            if (wordIsInWords) {
                invalidInputs++;
                break;
            }
        }
    }

    validInputs = (noOfInputs - invalidInputs);
}

function isAnagram(input, words) {
    var validAnagram = false;

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var hasSameLength = (input.length === word.length);

        if (hasSameLength) {
            var letters1 = input.split('');
            var letters2 = word.split('');

            for (var j = 0; j < letters1.length; j++) {
                var letter = letters1[j];
                var letterIndex = letters2.indexOf(letter);

                if (letterIndex === -1) {
                    validAnagram = false;
                    break;
                } else {
                    letters2.splice(letterIndex, 1);
                    validAnagram = true;
                    continue;
                }
            }
        }
    }

    return validAnagram;
}

function validatePassPhrases2(phrases) {
    var validInputs = 0;
    var invalidInputs = 0;
    var inputs = phrases.split('\n');
    var noOfInputs = inputs.length;

    for (var i = 0; i < inputs.length; i++) {
        var words = inputs[i].split(' ');

        for (var w = words.length - 1; w > 0; w--) {
            var word = words.shift();

            if (isAnagram(word, words)) {
                console.log(word, words);
                validInputs++;
                break;
            }
        }
    }

    console.log(validInputs);
}

// validatePassPhrases1(advInput); // 455 Valid
validatePassPhrases2(`abcde fghij
abcde xyz ecdab
a ab abc abd abf abj
iiii oiii ooii oooi oooo
oiii ioii iioi iiio`);
