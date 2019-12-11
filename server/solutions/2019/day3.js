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
        return {
            end: +w.substring(1),
            move: w.substring(0,1)
        };
    }).map(data => {
        linesA.push({
            start,
            end: data.end,
            move: data.move,
        });
        start = data.end;
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