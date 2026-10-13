class TodoService {
    async fetchTodo() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        const toDo = await response.json();
        return toDo;
    }
}

class UserService {
    async fetchUser() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        const user = await response.json();
        return user;
    }
}

const todoService = new TodoService();
const userService = new UserService();

const allPromises = Promise.all([
    todoService.fetchTodo(),
    userService.fetchUser()
]);

const racePromises = Promise.race([
    todoService.fetchTodo(),
    userService.fetchUser()
]);

const allResult = await allPromises;
console.log("Promise.all:", allResult);

const raceResult = await racePromises;
console.log("Promise.race:", raceResult);
