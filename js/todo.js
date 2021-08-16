const todoForm = document.querySelector("#todoForm")
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todoList")

let todos = [];
const savedTodos = localStorage.getItem("todos")



function saveTodo(newTodo) {
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
    const listItem = event.target.parentElement;
    listItem.remove();
    todos = todos.filter((value) => value.id !== parseInt(listItem.id));
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showTodo(newTodo) {
    const listItem = document.createElement("div");
    listItem.id = newTodo.id;

    const li = document.createElement("li");
    li.innerText = newTodo.value;

    const button = document.createElement("button");
    button.innerHTML = "&#x274C";
    button.addEventListener("click", deleteTodo)
    
    listItem.appendChild(li);
    listItem.appendChild(button);
    todoList.appendChild(listItem);
}

function handleTodoFormSubmit(event) {
    event.preventDefault();

    const newTodo = {
        value: todoInput.value,
        id: Date.now(),
    } 
    
    todoInput.value = "";
    showTodo(newTodo);
    saveTodo(newTodo);
}

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach((value) => saveTodo(value));
    parsedTodos.forEach((value) => showTodo(value));
}

todoForm.addEventListener("submit",handleTodoFormSubmit);
