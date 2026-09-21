const numbers = [5, 10, 15, 20, 25];

const sum = numbers.reduce((total, number)=> {
return total+number;
}, 0);

console.log(sum);
