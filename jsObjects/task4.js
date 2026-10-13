const person = {
    firstName: "John",
    lastName: "Gold",
    age: 30
};

person.email = "johnGold@example.com";

delete person.age;

console.log(person);