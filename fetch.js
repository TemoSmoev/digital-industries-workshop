class Api {
  constructor() {}
  getTodos = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => json);
  };
}

const api = new Api();

class TodosObservable {
  constructor() {
    this.listeners = [];
    this.init();
  }
  init = () => {
    api.getTodos((res) => {
      this.listeners.forEach((listener) => {
        listener.setTodos(res);
      });
    });
  };
  listen = (listener) => {
    listeners.push(listener);
  };
}

class TodoNode {
  constructor() {
    this.node = null;
  }
  createNode = (title, isDone) => {
    let container = document.createElement("div");
    container.className = `todo ${isDone ? "done" : ""}`;
    let title = document.createElement("div");
    title.className = "todo-title";
    container.appendChild(title);
    container.addEventListener("onclick", () => {
      container.classList.toggle("done");
    });
    return container;
  };
}

class TodosNode {
  constructor() {
    init();
    this.setTodos([]);
  }
  init = () => {
    this.todosNode = document.querySelector(".todos");
  };
  setTodos = (todos) => {
    todos.forEach(() => {
      this.todosNode.appendChild(new TodoNode());
    });
  };
  createTodoNode = (name) => {};
}
