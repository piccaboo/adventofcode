const express = require("express");
const fs = require('fs');

const PORT = 3000;
const app = express();

const readData = (year, day) => fs.readFileSync(`server/files/${year}/day${day}.txt`, {"encoding": "utf8"}, (error, data) => {
    if (error) {
        throw new Error(`could not read the file: ${error}`);
    } else {
        return data;
    }
});

const day3 = () => 'fjant';

const getAnswerByYearAndDay = (year, day) => {
    let answer1;
    let answer2;

    switch(`${year}-${day}`) {
        case '2019-3':
            answer1 = 'hej';
            answer2 = 'svejs';
        default:
            break;
    }
    return {
        answer1,
        answer2,
    }
};

app.get("/year/:year/day/:day", async (req, res) => {
    const { year, day } = req.params;

    const answer = await getAnswerByYearAndDay(year, day);

    res.json({
        answer,
    });
});

app.listen(PORT, () => {
 console.log(`Server is listening on port: ${PORT}`);
});