class Api {
  constructor() {}
  fetchTodos = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos").then((r) => r.json());
  };
}

const api = new Api();

class Todo {
  constructor() {}
  createElement = (todoData) => {
    let todo = document.createElement("div");
    todo.className = "todo";
    todo.innerHTML = todoData.title;
    todo.addEventListener("click", () => {
      todo.classList.toggle("done");
    });
    this.node = todo;
  };
  getElement = () => {
    return this.node;
  };
}

class Todos {
  constructor() {
    this.todosNode = document.querySelector(".todos");
    this.fetchData();
  }
  fetchData = () => {
    api.fetchTodos().then((res) => {
      this.addData(res);
    });
  };
  addData = (todos) => {
    todos.forEach((todoData) => {
      const todo = new Todo();
      todo.createElement(todoData);
      this.todosNode.appendChild(todo.getElement());
    });
  };
}

const todos = new Todos();
