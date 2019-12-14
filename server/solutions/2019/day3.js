const { readData, readTestData, textToArray } = require('../../utils');

const getVector = (startX, startY, length, direction) => {
    const vector = [];
    if (direction === 'R') {
        for(i = startX; i <= length; ++i) {
            vector.push([i, startY]);
        }
    } else if (direction === 'L') {
        for (i = startX; i >= startX - length; --i) {
            vector.push([i, startY]);
        }
    } else if (direction === 'U') {
        for (i = startY; i <= length; ++i) {
            vector.push([startX, i]);
        }
    } else if (direction === 'D') {
        for (i = startY; i >= startY - length; --i) {
            vector.push([startX, i]);
        }
    }
    return vector;
}

const getPath = (pos = [], posData, i) => {
    const direction = posData.substring(0,1);
    const move = +posData.substring(1);
    const lastX = pos.length && pos[pos.length - 1][0] || 0;
    const lastY = pos.length && pos[pos.length - 1][1] || 0;
    const newVector = getVector(lastX, lastY, move, direction);
    const updatedPos = [];
    pos.map(p => updatedPos.push(p));
    newVector.map(v => updatedPos.push(v));
    console.log('v: ', i);
    return updatedPos;
};

function day3(year, day) {
    const data = readData(year, day);
    // const testData = readTestData(year, day, 1);

    const wires = textToArray(data, new RegExp(/\n/));
    let wireA = textToArray(wires[0], ',');
    let wireB = textToArray(wires[1], ',');

    // const testW = textToArray(testData, new RegExp(/\n/));
    // let testWireA = textToArray(testW[0], ',');
    // let testWireB = textToArray(testW[1], ',');

    // const testPathA = testWireA.reduce((pos, posData, i) => getPath(pos, posData, i), []);
    // const testPathB = testWireB.reduce((pos, posData, i) => getPath(pos, posData, i), []);

    const pathA = wireA.reduce((pos, posData, i) => getPath(pos, posData, i), []);
    const pathB = wireB.reduce((pos, posData, i) => getPath(pos, posData, i), []);

    const answer1 = (A, B) => {
        let distance;
        B.forEach(moveB=> A.forEach(moveA => {
            console.log(`matching B: ${moveB} => A: ${moveA}`)
            if (moveB[0] === moveA[0] && moveB[1] === moveA[1]) {
                const newDistance = Math.abs(moveA[0]) + Math.abs(moveA[1]);
                if (!distance && newDistance !== 0) {
                    distance = newDistance;
                } else if (newDistance !== 0 && newDistance < distance) {
                    distance = newDistance
                }
            }
        }))

        return distance;
    };
    let answer2;

    return {
        answer1: answer1(pathA, pathB),
        answer2,
    }
};

module.exports.day3 = day3;