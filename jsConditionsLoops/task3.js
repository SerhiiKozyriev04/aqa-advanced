const number = 7;

console.log("Таблиця множення за допомогою for:");

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log("Таблиця множення за допомогою while:");

let i = 1;

while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}