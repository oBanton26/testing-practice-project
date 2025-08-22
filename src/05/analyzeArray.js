export function analyzeArray (array) {
    if (!Array.isArray(array)) {return}
    if (!hasOnlyNumbers(array)) {return}

    const averageValue = getAverage(array);
    const minValue = Math.min(...array);
    const maxValue = Math.max(...array);

    return {
        average: averageValue,
        min: minValue,
        max: maxValue,
        length: array.length
    }
};

function getAverage(array) {
    let sum = 0;
    for (let numb of array) {
        sum = sum + numb;
    };
    return sum/array.length;
};

function hasOnlyNumbers(array) {
    const result = array.reduce((prev, curr)=>{
        return prev + curr;
    }, 0);
    return typeof result === 'number';
};
