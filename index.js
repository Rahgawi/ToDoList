const todoInput = document.querySelector(".todo-Input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-List");
const filterOption = document.querySelector(".filter-todo");

todoList.addEventListener("click" , deleteCheck);
filterOption.addEventListener("change",filterTodo);












const completedButton = document.createdElement("button");
completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
completedButton.classList.add("complete-btn");

const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></li>';
trashButton.classList.add("trash-btn");

