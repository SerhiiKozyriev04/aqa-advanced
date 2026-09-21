const numbers = [1,3,6,9,12];

const newNumbers = numbers.map((number, index) => {
    return number * index;
});

console.log(newNumbers);
