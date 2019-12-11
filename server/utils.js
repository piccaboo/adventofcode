const fs = require('fs');
const solutions = require('./solutions/index');

const readData = (year, day) => fs.readFileSync(`server/files/${year}/day${day}.txt`, {"encoding": "utf8"}, (error, data) => {
    if (error) {
        throw new Error(`could not read the file: ${error}`);
    } else {
        return data;
    }
});

const textToArray = (data, splitWithChar) => {
    const array = data.split(splitWithChar);
    return array;
};

module.exports = {
    readData: (year, day) => readData(year, day),
    textToArray: (data, splitWithChar) => textToArray(data, splitWithChar),
};