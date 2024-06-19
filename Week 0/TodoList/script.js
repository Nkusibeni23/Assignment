// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
//  without waiting for stylesheets, images,
//   and subframes to finish loading.

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
      <button class="updateButton">Update</button>
      <button class="deleteButton">Delete</button>
    `;

    // Add event listener for the complete button
    todoItem.querySelector(".completeButton").addEventListener("click", () => {
      toggleComplete(todo.id);
    });

    // Add event listener for the update button
    todoItem.querySelector(".updateButton").addEventListener("click", () => {
      updateTodoItem(todo.id);
    });

    // Add event listener for the delete button
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

  // Function to update a to-do item
  function updateTodoItem(id) {
    const todo = todoList.find((todo) => todo.id === id);
    if (todo) {
      document.getElementById("title").value = todo.title;
      document.getElementById("description").value = todo.description || "";
      document.getElementById("dueDateTime").value = todo.dueDateTime.slice(
        0,
        -1
      );

      // Change Add button to Update button
      const addButton = document.getElementById("addButton");
      addButton.textContent = "Update";
      addButton.removeEventListener("click", addTodoItem);
      addButton.addEventListener("click", () => saveUpdatedTodoItem(todo.id));
    }
  }

  // Function to save updated to-do item
  function saveUpdatedTodoItem(id) {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDateTime = document.getElementById("dueDateTime").value;

    if (!title || !dueDateTime) {
      alert("Title and due date/time are required.");
      return;
    }

    const index = todoList.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todoList[index].title = title;
      todoList[index].description = description;
      todoList[index].dueDateTime = new Date(dueDateTime).toISOString();
      renderTodoList();
      clearInputFields();
      document.getElementById("addButton").textContent = "Add To-Do";
      document
        .getElementById("addButton")
        .removeEventListener("click", saveUpdatedTodoItem);
      document
        .getElementById("addButton")
        .addEventListener("click", addTodoItem);
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
