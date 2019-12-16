const { readData, readTestData, textToArray } = require('../../utils');

const getVector = (startX, startY, length, direction, vectorNo) => {
    const vector = [];
    if (direction === 'R') {
        for (i = 0; i <= length; ++i) {
            if (vectorNo === 1 || i !== 0) {
                vector.push([startX + i, startY]);
            }
        }
    } else if (direction === 'L') {
        for (i = 0; i <= length; ++i) {
            if (vectorNo === 1 || i !== 0) {
                vector.push([startX - i, startY]);
            }
        }
    } else if (direction === 'U') {
        for (i = 0; i <= length; ++i) {
            if (vectorNo === 1 || i !== 0) {
                vector.push([startX, startY + i]);
            }
        }
    } else if (direction === 'D') {
        for (i = 0; i <= length; ++i) {
            if (vectorNo === 1 || i !== 0) {
                vector.push([startX, startY - i]);
            }
        }
    }
    return vector;
}

const getPath = (pos = [], posData, i) => {
    const direction = posData.substring(0,1);
    const move = +posData.substring(1);
    const lastX = (pos.length && pos[pos.length - 1][0]) || 0;
    const lastY = (pos.length && pos[pos.length - 1][1]) || 0;
    const newVector = getVector(lastX, lastY, move, direction, i);

    return [...pos, ...newVector];
};

const getShortestDistance = (vectorA = [], vectorB = []) => {
    let distance;
    let steps;
    for (i = 0; i < vectorA.length; ++i) {
        for (j = 0; j < vectorB.length; ++j) {
            const match = vectorA[i][0] === vectorB[j][0] && vectorA[i][1] === vectorB[j][1];
            if (match) {
                const newDistance = Math.abs(vectorB[j][0]) + Math.abs(vectorB[j][1]);
                if (!distance || (newDistance !== 0 && newDistance < distance)) {
                    distance = newDistance;
                }
                const newSteps = i + j;
                if (!steps || (newSteps !== 0 && newSteps < steps)) {
                    steps = newSteps;
                }
            }
        }
    }
    return { distance, steps };
}

function day3(year, day) {
    const answer1 = () => {
        const data = readData(year, day);
        const wires = textToArray(data, new RegExp(/\n/));
        let wireA = textToArray(wires[0], ',');
        let wireB = textToArray(wires[1], ',');
    
        const A = wireA.reduce((pos, posData, i) => getPath(pos, posData, i), []);
        const B = wireB.reduce((pos, posData, i) => getPath(pos, posData, i), []);

        const shortestDistance = getShortestDistance(A, B);
        return shortestDistance;
    };
    let answer2;

    const test = (testNumber) => {
        const testData = readTestData(year, day, testNumber);
        const testW = textToArray(testData, new RegExp(/\n/));
        let testWireA = textToArray(testW[0], ',');
        let testWireB = textToArray(testW[1], ',');
    
        const testA = testWireA.reduce((pos, posData, i) => getPath(pos, posData, i), []);
        const testB = testWireB.reduce((pos, posData, i) => getPath(pos, posData, i), []);

        const shortestDistance = getShortestDistance(testB, testA);
        return shortestDistance;
    }

    return {
        answer1: answer1(),
        answer2,
        // test: {
        //     test1: test(1),
        //     test2: test(2),
        //     test3: test(3),
        // }
    }
};

module.exports.day3 = day3;