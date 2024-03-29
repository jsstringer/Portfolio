var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;


  // Render a new li for each todo
  renderTodos.createElement("li")
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
  renderTodos();
}

function init() {
  localStorage.getItem("todos"), JSON.parse(todo)
  // Write code here to check if there are todos in localStorage
  // If so, parse the value from localStorage and assign it to the todos variable

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
}

function storeTodos() {
  // Add code here to stringify the todos array and save it to the "todos" key in localStorage
  
  localStorage.setItem("todos", JSON.stringify(todoList))
  localStorage.setItem("todos", todostring);

  storeTodos();
  renderTodos();

}



// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  localStorage.getItem("todos"), JSON.parse(todo)
  todos.push(todoText);
  todoInput.value = "";

  renderTodos();

  // Store updated todos in localStorage, re-render the list
  storeTodos();
localStorage.setItem("todos", JSON.stringify (todos));

  renderTodos();

});

