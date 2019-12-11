const { readData, textToArray } = require('../../utils');

function day3(year, day) {
    const data = readData(year, day);
    const wires = textToArray(data, new RegExp(/\n/));
    const wireA = textToArray(wires[0], ',');
    const wireB = textToArray(wires[1], ',');
    let answer1;
    let answer2;

    let start = 0;
    const linesA = [];
    let move;
    wireA.map(w => {
        return [+w.substring(1), w.substring(0,1)];
    }).map(data => {
        linesA.push([start, data[0], data[1]]);
        start = data[0];
    });

    return {
        answer1,
        answer2,
        input: {
            wireA,
            wireB,
            linesA,
        },
    }
};

module.exports.day3 = day3;