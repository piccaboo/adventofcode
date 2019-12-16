const { day3 } = require('./2019/day3');
const { day4 } = require('./2019/day4');

module.exports = {
    "2019": {
        day3: (year, day) => day3(year, day),
        day4: (year, day) => day4(year, day),
    },
};