const car1 = {
    brand: "Porshe",
    model: "911",
    year: 2024
};

const car2 = {
    brand: "Land Rover",
    model: "Discovery",
    owner: 2024
};

const car3 = {
    ...car1,
    ...car2
};

console.log(car3);