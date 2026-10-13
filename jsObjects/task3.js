const car1 = {
    brand: "Porsche",
    model: "911",
    year: 2024
};

const car2 = {
    brand: "Land Rover"
};

const car3 = {
    ...car1,
    ...car2,
    brand: car2.brand ?? "Default brand",
    model: car2.model ?? "Default model",
    year: car2.year ?? "Default year"

};


console.log(car3);