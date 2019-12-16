const express = require("express");
const solutions = require('./solutions/index');

const PORT = 3000;
const app = express();

const getSolutionsByYearAndDay = async (year, day) => {
    let payload;
    switch(`${year}-${day}`) {
        case '2019-3':
            payload = await solutions[2019].day3(year, day);
        case '2019-4':
            payload = await solutions[2019].day4(year, day);
        default:
            break;
    }
    return payload;
};

app.get("/year/:year/day/:day", async (req, res) => {
    const { year, day } = req.params;
    const answers = await getSolutionsByYearAndDay(year, day);
    res.json({
        ...answers,
    });
});

app.listen(PORT, () => {
 console.log(`Server is listening on port: ${PORT}`);
});