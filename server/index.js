const express = require("express");
const fs = require('fs');
const { day3_2019 } = require('./functions/2019/day3');

const PORT = 3000;
const app = express();

const readData = (year, day) => fs.readFileSync(`server/files/${year}/day${day}.txt`, {"encoding": "utf8"}, (error, data) => {
    if (error) {
        throw new Error(`could not read the file: ${error}`);
    } else {
        return data;
    }
});

const getAnswerByYearAndDay = (year, day) => {
    let answers;
    switch(`${year}-${day}`) {
        case '2019-3':
            answers = day3_2019();
        default:
            break;
    }
    return {...answers
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