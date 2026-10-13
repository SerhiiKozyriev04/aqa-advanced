async function fetchTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const toDo = await response.json();
    return toDo;
}

async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    return user;
}

const allPromises = Promise.all([
    fetchTodo(),
    fetchUser()
]);

const racePromises = Promise.race([
    fetchTodo(),
    fetchUser()
]);

const results = await allPromises;
console.log("Promise.all:", results);

const result = await racePromises;
console.log("Promise.race:", result);