// Codewars: Sum Of Pairs

function sumPairs(ints, s) {
    for (let i = 0; i < ints.length; i++) {
        for (let j = i + 1; j < ints.length; j++) {
            console.log('i: ', ints[i], " j: ", ints[j]);
            if (ints[i] + ints[j] === s) {

                return [ints[i], ints[j]];
            }
        }
    }
    return [0, 0] || undefined ;
}

let input = [10, 5, 2, 3, 7, 5];
let expectedSum = 10;

let response = sumPairs(input, expectedSum);
console.log(response);