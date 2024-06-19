document.addEventListener("DOMContentLoaded", () => {
  const todoList = [];
  const todoListContainer = document.getElementById("todoList");

  // Helper function to create a to-do item element
  function createTodoElement(todo) {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    if (todo.completed) {
      todoItem.classList.add("completed");
    }

    todoItem.innerHTML = `
          <span>${todo.title}</span>
          <span>${todo.description || ""}</span>
          <span>${new Date(todo.dueDateTime).toLocaleString()}</span>
          <button class="completeButton">${
            todo.completed ? "Undo" : "Complete"
          }</button>
          <button class="deleteButton">Delete</button>
      `;

    todoItem.querySelector(".completeButton").addEventListener("click", () => {
      toggleComplete(todo.id);
    });

    todoItem.querySelector(".deleteButton").addEventListener("click", () => {
      deleteTodoItem(todo.id);
    });

    return todoItem;
  }

  // Function to render the to-do list
  function renderTodoList() {
    todoListContainer.innerHTML = "";
    todoList.forEach((todo) => {
      const todoElement = createTodoElement(todo);
      todoListContainer.appendChild(todoElement);
    });
  }

  // Function to add a new to-do item
  function addTodoItem() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDateTime = document.getElementById("dueDateTime").value;

    if (!title || !dueDateTime) {
      alert("Title and due date/time are required.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      description,
      dueDateTime: new Date(dueDateTime).toISOString(),
      completed: false,
    };

    todoList.push(newTodo);
    renderTodoList();
    clearInputFields();
  }

  // Function to clear input fields
  function clearInputFields() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDateTime").value = "";
  }

  // Function to toggle completion status
  function toggleComplete(id) {
    const todo = todoList.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      renderTodoList();
    }
  }

  // Function to delete a to-do item
  function deleteTodoItem(id) {
    const index = todoList.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todoList.splice(index, 1);
      renderTodoList();
    }
  }

  // Function to sort to-do items
  function sortTodoList(order = "asc") {
    todoList.sort((a, b) => {
      return order === "asc"
        ? new Date(a.dueDateTime) - new Date(b.dueDateTime)
        : new Date(b.dueDateTime) - new Date(a.dueDateTime);
    });
    renderTodoList();
  }

  // Event listeners
  document.getElementById("addButton").addEventListener("click", addTodoItem);
  document
    .getElementById("sortAscButton")
    .addEventListener("click", () => sortTodoList("asc"));
  document
    .getElementById("sortDescButton")
    .addEventListener("click", () => sortTodoList("desc"));
});
