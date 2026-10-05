function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            return response.json();
        });
}

function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            return response.json();
        });
}

const allPromises = Promise.all([
    fetchTodo(),
    fetchUser()
]);

const racePromises = Promise.race([
    fetchTodo(),
    fetchUser()
]);

allPromises
    .then((results) => {
        console.log("Promise.all:", results);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

racePromises
    .then((result) => {
        console.log("Promise.race:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });