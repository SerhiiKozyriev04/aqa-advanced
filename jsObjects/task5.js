const users = [
    {
        name: "Moshe",
        email: "moshe@example.com",
        age: 30
    },
    {
        name: "Avishay",
        email: "avishay@example.com",
        age: 28
    },
    {
        name: "Shimon",
        email: "shimon@example.com",
        age: 35
    }
];

for (const { name, email, age } of users) {
    console.log(name, email, age);
}