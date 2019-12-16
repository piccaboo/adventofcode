const dataStart = 240298;
const dataEnd = 784956;

const getCodeAsArray = (code) => {
    return code.toString().split('').map(n => +n);;
}

const hasDouble = (array) => {
    for (j = 1; j < 6; ++j) {
        if (array[j] === array[j - 1]) {
                return true
        }
    }
    return false;
}

const neverDescend = (array) => {
    for (k = 1; k < 6; ++k) {
        if (array[k] < array[k - 1]) {
            return false;
        }
    }
    return true;
}

const getAnswer1 = (start, stop) => {
    let count = 0;

    let double;
    let doNotDescend;
    let array = [];
    for (i = start; i < stop; i++) {
        array = getCodeAsArray(i);
        double = hasDouble(array);
        doNotDescend = neverDescend(array);
        if (double && doNotDescend) {
            count += 1;
        }
    }
    return count;
}

const getAnswer2 = (start, stop) => {
    let count = 0;
    for (i = start; i < stop; i++) {
        let array = getCodeAsArray(i);
        let doNotDescend = neverDescend(array);
        if (doNotDescend) {
            let double = hasDouble(array);
            if (double) {
                count += 1;
            }
        }
    }

    return count;
}

const day4 = (year, day) => {
    return {
        answer1: getAnswer1(240298, 784956),
        answer2: getAnswer2(240298, 784956),
        // test: test(123789),
    }
}

module.exports.day4 = day4;